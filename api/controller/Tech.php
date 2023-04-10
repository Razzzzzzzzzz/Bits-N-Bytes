<?php 
namespace Controller\Tech;

use Hashids\Hashids;
use Controller\User\User;
/**
 * 
 */
class Tech
{

	private $hash;
	private $db;
	private $user;	

	function __construct()
	{

		$this->hash = new Hashids('', 10);
		$this->db = new \MeekroDB();
		$this->user = new User();
	}

	public function technicians()
	{

		if ($this->user->checking_auth()) {
			
			$id = $this->user->get_user_id();

			$user = $this->db->query("SELECT * FROM users WHERE id='$id'");

			$data = [];

			$user_info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");

			$tech = $this->db->query("SELECT u.email, u.id, u.username, u.active, u.url, uf.address, uf.contact, uf.verified_status FROM users as u 
									 INNER JOIN user_info as uf ON (uf.user_id = u.id) WHERE u.user_status='2'");

			foreach ($tech as $row) {
			$data[] = ["email" => $row['email'],
					   "id" => $row['id'],
					   "username" => $row['username'],
					   "active" => $row['active'],
					   "url" => $row['url'],
					   "address" => $row['address'],
					   "contact" => $row['contact'],
					   "services" => $this->get_tech_services($row['id']),
					   "rate" => $this->get_tech_rate($row['id']),
					   "verified_status" => $row['verified_status']];
			}

			echo json_encode(["login" => 1, "tech" => $data, "user" => $user, "info" => $user_info]);

		}else{

			$tech = $this->db->query("SELECT u.email, u.id, u.username, u.active, u.url, uf.address, uf.contact, uf.verified_status FROM users as u 
									 INNER JOIN user_info as uf ON (uf.user_id = u.id) WHERE u.user_status='2'");

			foreach ($tech as $row) {
			$data[] = ["email" => $row['email'],
					   "id" => $row['id'],
					   "username" => $row['username'],
					   "active" => $row['active'],
					   "url" => $row['url'],
					   "address" => $row['address'],
					   "contact" => $row['contact'],
					   "services" => $this->get_tech_services($row['id']),
					   "rate" => $this->get_tech_rate($row['id']),
					   "verified_status" => $row['verified_status']];
			}

			echo json_encode(["login" => 0, "tech" => $data]);

		}

	}

	public function get_tech_services($userid)
	{
	  $services = $this->db->query("SELECT * FROM services WHERE userid='$userid'");
	  
	  if (!$services) {
	  		return 0;
	  	}else{
	  		return $services;
	  	}	
	}

	public function get_tech_rate($userid)
	{

		$average = $this->db->query("SELECT avg(rate) as avg, count(id) as count FROM tech_ratings WHERE user_id='$userid' ");

		$data = [];

		if (!$average[0]['avg']) {
			foreach ($average as $row) {
			$data[] = ["avg" => number_format(0, 1),
					   "count" => $row['count'] ];
			}
		}else{
			foreach ($average as $row) {
			$data[] = ["avg" => number_format($row['avg'], 1),
					   "count" => $row['count'] ];
			}
		}



		return $data;

	}


	public function technician_profile()
	{



	$techid = $_POST['techid'];	
		
	$tech = $this->db->query("SELECT u.email, u.id, u.username, u.active, u.url, uf.address, uf.contact, uf.verified_status FROM users as u 
						      INNER JOIN user_info as uf ON (uf.user_id = u.id) WHERE u.id='$techid'");

	if ($this->user->checking_auth()) {

	$id = $this->user->get_user_id();

	$user = $this->db->query("SELECT * FROM users WHERE id='$id'");

	$user_info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");

	$data = [];

	foreach ($tech as $row) {

	$data[] = ["email" => $row['email'],
			   "id" => $row['id'],
			   "username" => $row['username'],
			   "active" => $row['active'],
			   "url" => $row['url'],
			   "address" => $row['address'],
			   "contact" => $row['contact'],
			   "rate" => $this->get_tech_rate($row['id']),
			   "reviews" => $this->get_tech_reviews($row['id']),
			   "verified_status" => $row['verified_status']];	

	}


	echo json_encode(["login" => 1, "tech" => $data, "user" => $user, "info" => $user_info]);
	}else{

	$data = [];

	foreach ($tech as $row) {

	$data[] = ["email" => $row['email'],
			   "id" => $row['id'],
			   "username" => $row['username'],
			   "active" => $row['active'],
			   "url" => $row['url'],
			   "address" => $row['address'],
			   "contact" => $row['contact'],
			   "rate" => $this->get_tech_rate($row['id']),
			   "reviews" => $this->get_tech_reviews($row['id']),
			   "verified_status" => $row['verified_status']];	

	}

	echo json_encode(["login" => 0, "tech" => $data]);

	}

	}

	public function get_tech_reviews($techid)
	{

		$data = $this->db->query("SELECT t.review, t.review_on, u.username, u.url FROM tech_reviews as t INNER JOIN users as u ON (t.reviewer = u.id) WHERE t.techid='$techid'");

		if (!$data) {
			return 0;
		}else{
			return $data;
		}

	}

	public function rate_tech()
	{

		$techid = $_POST['techid'];
		$rate = $_POST['rating'];

		$userid = $this->user->get_user_id();

		$checking = $this->db->query("SELECT id FROM tech_ratings WHERE user_id='$techid' AND rater_id='$userid' ");

		if (!$checking) {

		$this->db->insert('tech_ratings', [
						  'user_id' => $techid,
						  'rater_id' => $this->user->get_user_id(),
						  'rate' => $rate
						]);

		}else{

		$this->db->query("UPDATE tech_ratings SET rate=%i WHERE user_id=%i AND rater_id=%i", $rate, $techid, $userid);	
		
		}

		echo json_encode(["response" => "success"]);

	}


	public function item_search()
	{

		$search = $_POST['search'];

		$checking = $this->db->query("SELECT title FROM posted_product WHERE title LIKE '%$search%' ");


		echo json_encode(["result" => $checking]);


	}

	public function tech_review()
	{
	if ($this->user->checking_auth()) {
		$techid = $_POST['techid'];
		$comment = $_POST['comment'];

		$userid = $this->user->get_user_id();

		$user = $this->db->query("SELECT * FROM users WHERE id='$userid'");

	    $this->db->insert('tech_reviews', [
					  'reviewer' => $userid,
					  'techid' => $techid,
					  'review' => $comment,
					  'review_on' => date("F j, Y, g:i a")
					]); 

	    echo json_encode(["response" => 1, "user" => $user, "datenow" => date("F j, Y, g:i a")]);
	}else{
		echo json_encode(["response" => 0]);
	}   	

	}

	public function insert_service()
	{

		$this->db->insert('services', [
						  'service' => $_POST['service'],
						  'userid' => $_POST['id']
						]);

		echo json_encode(["response" => "success"]);

	}

	public function edit_service()
	{

		$this->db->query("UPDATE services SET service=%s WHERE id=%i ", $_POST['service'], $_POST['id']);	
		
		echo json_encode(["response" => "success"]);	

	}

	public function tech_to_search()
	{

	$search = $_POST['search'];	

		if ($this->user->checking_auth()) {
			
			$id = $this->user->get_user_id();

			$user = $this->db->query("SELECT * FROM users WHERE id='$id'");

			$data = [];

			$user_info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");

			$tech = $this->db->query("SELECT u.email, u.id, u.username, u.active, u.url, uf.address, uf.contact, uf.verified_status 
				FROM services as s INNER JOIN users as u ON (s.userid = u.id) 
				INNER JOIN user_info as uf ON (uf.user_id = u.id) WHERE u.user_status='2' AND s.service LIKE '%$search%' ");

			foreach ($tech as $row) {
			$data[] = ["email" => $row['email'],
					   "id" => $row['id'],
					   "username" => $row['username'],
					   "active" => $row['active'],
					   "url" => $row['url'],
					   "address" => $row['address'],
					   "contact" => $row['contact'],
					   "services" => $this->get_tech_services($row['id']),
					   "rate" => $this->get_tech_rate($row['id']),
					   "verified_status" => $row['verified_status']];
			}

			echo json_encode(["login" => 1, "tech" => $data, "user" => $user, "info" => $user_info]);

		}else{

			$tech = $this->db->query("SELECT u.email, u.id, u.username, u.active, u.url, uf.address, uf.contact, uf.verified_status 
				FROM services as s INNER JOIN users as u ON (s.userid = u.id) 
				INNER JOIN user_info as uf ON (uf.user_id = u.id) WHERE u.user_status='2' AND s.service LIKE '%$search%' ");

			foreach ($tech as $row) {
			$data[] = ["email" => $row['email'],
					   "id" => $row['id'],
					   "username" => $row['username'],
					   "active" => $row['active'],
					   "url" => $row['url'],
					   "address" => $row['address'],
					   "contact" => $row['contact'],
					   "services" => $this->get_tech_services($row['id']),
					   "rate" => $this->get_tech_rate($row['id']),
					   "verified_status" => $row['verified_status']];
			}

			echo json_encode(["login" => 0, "tech" => $data]);

		}

	}	

}


?>