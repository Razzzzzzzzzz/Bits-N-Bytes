<?php 
namespace Controller\Items;

use Hashids\Hashids;
use Controller\User\User;

/**
 * 
 */
class Items 
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

	public function update_item()
	{

        $id = $this->hash->decode($_POST['id']);
        $title = $_POST['title'];
        $price = $_POST['price'];
        $contact = $_POST['contact'];
        $details = $_POST['details'];
        $category = $_POST['category'];

        $this->db->query("UPDATE posted_product SET title=%s, details=%s, price=%d, category=%i, contact=%s 
        				  WHERE id=%i", $title, $details, $price, $category, $contact, $id[0]);

		echo json_encode(["response"=> "success"]);

	}


	public function get_item()
	{

		$itemid = $this->hash->decode($_POST['id']);

		$item = $this->db->query("SELECT * FROM posted_product WHERE id='$itemid[0]'");

		echo json_encode(["item"=>$item]);

	}


	public function get_single_message()
	{

		$senderid = $this->user->get_user_id();
		$receiverid = $_POST['userid'];

		$get_group_id = $this->db->query("SELECT id FROM group_chat WHERE sender='$senderid' AND receiver='$receiverid' OR sender='$receiverid' AND receiver='$senderid' ");

		$groupid = $get_group_id[0]['id'];

		$count = $this->db->query("SELECT count(id) as count FROM messages WHERE group_id='$groupid' AND receiver='$senderid'");

		$newmessage = $this->db->query("SELECT * FROM messages WHERE group_id='$groupid' AND receiver='$senderid' 
										AND seen_status='0' ORDER BY id DESC LIMIT 1");	

		if (!$newmessage) {
			echo json_encode(["count" => $count[0]['count'] ]);
		}else{

			$this->db->query("UPDATE messages SET seen_status=%i WHERE group_id=%i AND receiver=%i", 1, $groupid, $senderid);

			echo json_encode(["count" => $count[0]['count'], "new" => $newmessage ]);
		}

		
	}

	public function upload_file_chat($userid)
	{

	$files = $_FILES['image'];
	$file_path = $files['tmp_name'];
	$file_name = $files['name'];
	$file_size = $files['size'];
	$file_type = $files['type'];
	$directory = "./../img";
	$path = $directory."/".$file_name;

	$newdir = "./img/".$file_name;

	if (!is_dir($directory)) {
	//Create our fam_monitor_directory(fam, dirname).
	mkdir($directory, 755, true);
	move_uploaded_file($file_path, $path);
	} else {

	move_uploaded_file($file_path, $path);

	}

	$sender = $this->user->get_user_id();
	$message = $newdir;
	$receiver = $userid;

	$checking = $this->db->query("SELECT id FROM group_chat WHERE sender='$sender' AND receiver='$receiver' OR sender='$receiver' AND receiver='$sender' ");

	if (!$checking) {

    $this->db->insert('group_chat', [
				  'sender' => $sender,
				  'receiver' => $receiver
				]); 

    $groupid = $this->db->insertId();

    $this->db->insert('messages', [
				  'text' => $message,
				  'sender' => $sender,
				  'receiver' => $receiver,
				  'group_id' => $groupid,
				  'file_status' => 1
				]); 

	}else{

	$groupid = $checking[0]['id'];	

    $this->db->insert('messages', [
				  'text' => $message,
				  'sender' => $sender,
				  'receiver' => $receiver,
				  'group_id' => $groupid,
				  'file_status' => 1
				]); 

	}

	echo json_encode(["response" => $message]);



	}


	public function get_my_messages()
	{

	 $id = $this->user->get_user_id();
	
	 $user = $this->db->query("SELECT * FROM users WHERE id='$id'");	

	 $group = $this->db->query("SELECT * FROM group_chat WHERE sender='$id' OR receiver='$id'");

	 $data = [];

	 foreach ($group as $row) {
	 
	 if ($id == $row['sender']) {

	 	$sender = $row['receiver'];

		$group1 = $this->db->query("SELECT gc.id, u.id as userid, u.username, u.active, u.user_status, u.url 
									   FROM group_chat as gc 
									   INNER JOIN users as u ON(gc.receiver = u.id)	
									   WHERE gc.sender='$id' AND gc.receiver='$sender'");
		foreach ($group1 as $row) {
		
		$data[] = ["id" => $row['id'],
				   "userid" => $row['userid'],	
				   "username" => $row['username'],
				   "active" => $row['active'],
				   "user_status" => $row['user_status'],
				   "url" => $row['url'] ];	

		}
	 }else{

	 	$sender = $row['sender'];

		$group2 = $this->db->query("SELECT gc.id, u.id as userid, u.username, u.active, u.user_status, u.url 
									   FROM group_chat as gc 
									   INNER JOIN users as u ON(gc.sender = u.id)	
									   WHERE gc.receiver='$id' AND gc.sender='$sender'");
	 
		foreach ($group2 as $row) {
		
		$data[] = ["id" => $row['id'],
				   "userid" => $row['userid'],	
				   "username" => $row['username'],
				   "active" => $row['active'],
				   "user_status" => $row['user_status'],
				   "url" => $row['url'] ];	

		}

	 }



	 }

	 echo json_encode(["group" => $data, "user" => $user]);

	}

	public function get_my_messages_x()
	{

		$id = $_POST['userid'];

		if ($_POST['status'] == 0) {


			$id = $this->user->get_user_id();

			$user = $this->db->query("SELECT * FROM users WHERE id='$id'");

			$data = [];

			$group = $this->db->query("SELECT gc.id, u.id as userid, u.username, u.active, u.user_status, u.url 
									   FROM group_chat as gc 
									   INNER JOIN users as u ON(gc.receiver = u.id)	
									   WHERE gc.sender='$id'");

			foreach ($group as $row) {
			
			$data[] = ["id" => $row['id'],
					   "productid" => $this->get_product($row['userid']),
					   "username" => $row['username'],
					   "active" => $row['active'],
					   "user_status" => $row['user_status'],
					   "url" => $row['url'] ];	

			}

			echo json_encode(["group" => $data, "user" => $user]);



		}else if ($_POST['status'] == 1) {
		
			$id = $this->user->get_user_id();

			$user = $this->db->query("SELECT * FROM users WHERE id='$id'");

			$data = [];

			$group = $this->db->query("SELECT gc.id, u.id as userid, u.username, u.active, u.user_status, u.url 
									   FROM group_chat as gc 
									   INNER JOIN users as u ON(gc.receiver = u.id)	
									   WHERE gc.sender='$id'");

			foreach ($group as $row) {
			
			$data[] = ["id" => $row['id'],
					   "productid" => $this->get_product($row['userid']),
					   "username" => $row['username'],
					   "active" => $row['active'],
					   "user_status" => $row['user_status'],
					   "url" => $row['url'] ];	

			}

			$data1 = [];

			$group1 = $this->db->query("SELECT gc.id, u.id as userid, u.username, u.active, u.user_status, u.url 
									    FROM group_chat as gc 
									    INNER JOIN users as u ON(gc.sender = u.id)	
									    WHERE gc.receiver='$id'");

			foreach ($group1 as $row) {
			
			$data1[] = ["id" => $row['id'],
					   "productid" => $this->get_product($id),
					   "username" => $row['username'],
					   "active" => $row['active'],
					   "user_status" => $row['user_status'],
					   "url" => $row['url'] ];	

			}



			echo json_encode(["group" => $data, "group1" => $data1, "user" => $user]);

		}else{

		}


	}

	public function get_product($userid)
	{

		$id = $this->db->query("SELECT id FROM posted_product WHERE user_id='$userid' LIMIT 1");

		return $this->hash->encode($id[0]['id']);

	}

	public function send_message()
	{

		$sender = $this->user->get_user_id();
		$message = $_POST['text'];
		$receiver = $_POST['userid'];

		$checking = $this->db->query("SELECT id FROM group_chat WHERE sender='$sender' AND receiver='$receiver' OR sender='$receiver' AND receiver='$sender' ");

		if (!$checking) {

	    $this->db->insert('group_chat', [
					  'sender' => $sender,
					  'receiver' => $receiver
					]); 

	    $groupid = $this->db->insertId();

	    $this->db->insert('messages', [
					  'text' => $message,
					  'sender' => $sender,
					  'receiver' => $receiver,
					  'group_id' => $groupid
					]); 

		}else{

		$groupid = $checking[0]['id'];	

	    $this->db->insert('messages', [
					  'text' => $message,
					  'sender' => $sender,
					  'receiver' => $receiver,
					  'group_id' => $groupid
					]); 

		}

		echo json_encode(["response" => "success"]);


	}


	public function insert_comment()
	{

	    $productid = $this->hash->decode($_POST['productid']);
	    $comment = $_POST['comment'];

	    $this->db->insert('comments', [
					  'comment' => $comment,
					  'commentor' => $this->user->get_user_id(),
					  'product_id' => $productid[0]
					]);

	    echo json_encode(["response" => "success"]);

	}

	public function rate_product()
	{

		$product_id = $this->hash->decode($_POST['productid']);
		$rate = $_POST['rating'];

		$userid = $this->user->get_user_id();

		$checking = $this->db->query("SELECT id FROM ratings WHERE product_id='$product_id[0]' AND rater='$userid' ");

		if (!$checking) {

		$this->db->insert('ratings', [
						  'product_id' => $product_id[0],
						  'rater' => $this->user->get_user_id(),
						  'ratings' => $rate
						]);

		}else{

		$this->db->query("UPDATE ratings SET ratings=%i WHERE product_id=%i AND rater=%i", $rate, $product_id[0], $this->user->get_user_id());	
		
		}

		echo json_encode(["response" => "success"]);

	}

	public function view_message()
	{

		$receiver = $_POST['userid'];

		if ($this->user->checking_auth()) {
			
			$id = $this->user->get_user_id();

			$user = $this->db->query("SELECT * FROM users WHERE id='$id'");

			$groupid = $this->db->query("SELECT * FROM `group_chat` WHERE sender='$id' AND receiver='$receiver' OR sender='$receiver' AND receiver='$id'");
 
			$receiver_info = $this->db->query("SELECT * FROM users WHERE id='$receiver'");

			if (!$groupid) {
			
			echo json_encode(["login" => 1, "user" => $user, "receiver"=>$receiver_info]);

			}else{

			$messages = $this->get_messages($groupid[0]['id']);

			$this->db->query("UPDATE messages SET seen_status=%i WHERE group_id=%i AND receiver=%i", 1, intval($groupid[0]['id']), $id);
			
			echo json_encode(["login" => 1, "user" => $user, "receiver"=>$receiver_info, "messages" => $messages]);
			}


		}else{


		}


	}

	public function view_message_x()
	{

		$product_id = $this->hash->decode($_POST['productid']);

		if ($this->user->checking_auth()) {
			
			$id = $this->user->get_user_id();

			$user = $this->db->query("SELECT * FROM users WHERE id='$id'");


				$products = $this->db->query("SELECT * FROM posted_product WHERE status='0' AND id='$product_id[0]'");

				$data = [];

				foreach ($products as $row) {
				$data[] = ["id" => $this->hash->encode($row['id']),
							"userid" => $row['user_id'],
							"messages" => $this->get_messages($id, $row['user_id']),
							"userprof" => $this->get_user_profile($row['user_id']),
							"title" => $row['title'],
							"details" => $row['details'],
							"price" => $row['price'] ];
				}

				$receiverid = $products[0]['user_id'];

				$get_group_id = $this->db->query("SELECT id FROM group_chat WHERE sender='$id' AND receiver='$receiverid'");

				if (!$get_group_id) {
					# code...
				}else{
				$groupid = $get_group_id[0]['id'];

				$this->db->query("UPDATE messages SET seen_status=%i WHERE group_id=%i AND receiver=%i", 1, intval($groupid), $id);
				}

				echo json_encode(["login" => 1, "user" => $user, "products" => $data]);
		


		}else{
			$products = $this->db->query("SELECT * FROM posted_product WHERE status='0' AND id='$product_id[0]'");

			$data = [];

			foreach ($products as $row) {
			$data[] = ["id" => $this->hash->encode($row['id']),
						"userid" => $row['user_id'],
						"messages" => $this->get_messages($id, $row['user_id']),
						"userprof" => $this->get_user_profile($row['user_id']),
						"title" => $row['title'],
						"details" => $row['details']];
			}

			echo json_encode(["login" => 0, "products" => $data]);

		}


	}


	public function get_messages($groupid)
	{


	$messages = $this->db->query("SELECT * FROM messages WHERE group_id='$groupid'");

	return $messages;
	



	}



	public function view_product()
	{

		$product_id = $this->hash->decode($_POST['id']);

		if ($this->user->checking_auth()) {
			
			$id = $this->user->get_user_id();

			$user = $this->db->query("SELECT * FROM users WHERE id='$id'");

			$products = $this->db->query("SELECT * FROM posted_product WHERE status='0' AND id='$product_id[0]'");

			$data = [];

			foreach ($products as $row) {
			$uid = $row['user_id'];	
			$data[] = ["id" => $this->hash->encode($row['id']),
						"userid" => $row['user_id'],
						"userprof" => $this->get_user_profile($row['user_id']),
						"title" => $row['title'],
						"details" => $row['details'],
						"price" => $row['price'],
						"verified" => $this->db->query("SELECT verified_status FROM user_info WHERE user_id='$uid'"),
						"comments" => $this->get_comments($row['id']),
						"ratings" => $this->get_ratings($row['id']),
						"image" => $this->get_product_allimage($row['url_rand_id'])];
			}

			echo json_encode(["login" => 1, "user" => $user, "products" => $data]);

		}else{
			$products = $this->db->query("SELECT * FROM posted_product WHERE status='0' AND id='$product_id[0]'");

			$data = [];

			foreach ($products as $row) {
			$uid = $row['user_id'];
			$data[] = ["id" => $this->hash->encode($row['id']),
						"userid" => $row['user_id'],
						"userprof" => $this->get_user_profile($row['user_id']),
						"ratings" => $this->get_ratings($row['id']),
						"title" => $row['title'],
						"details" => $row['details'],
						"comments" => $this->get_comments($row['id']),
						"verified" => $this->db->query("SELECT verified_status FROM user_info WHERE user_id='$uid'"),
						"price" => $row['price'],
						"image" => $this->get_product_allimage($row['url_rand_id'])];
			}

			echo json_encode(["login" => 0, "products" => $data]);

		}


		

	}


	public function get_comments($productid)
	{

		$comments = $this->db->query("SELECT cm.comment, cm.date_commented, u.username, u.url FROM comments as cm
									  INNER JOIN users as u ON(cm.commentor = u.id) WHERE cm.product_id='$productid' ORDER BY cm.id DESC");

		$data = [];

		foreach ($comments as $row) {
		$data[] = ["comment" => $row['comment'],
				   "url" => $row['url'],
				   "date" => date("F j, Y, g:i a", strtotime($row['date_commented'])),
				   "username" => $row['username']];
		}

		return $data;
	}

	public function get_ratings($productid)
	{

	$total = $this->db->query("SELECT avg(ratings) as avg, count(id) as count FROM ratings WHERE product_id='$productid'");

	$data = [];

	foreach ($total as $row) {
	$data[] = ["average" => number_format($row['avg'], 1), "count" => $row['count']];
	}

	return $data;

	}


	public function get_user_profile($userid)
	{

	$user = $this->db->query("SELECT * FROM users WHERE id='$userid'");	

	return $user;

	}

	public function get_posts()
	{

			
	$id = $this->user->get_user_id();

	$user = $this->db->query("SELECT * FROM users WHERE id='$id'");

	$products = $this->db->query("SELECT * FROM posted_product WHERE status='0' ORDER BY id DESC");

	$data = [];

	foreach ($products as $row) {

	$userid = $row['user_id'];	

	$username = $this->db->query("SELECT username FROM users WHERE id='$userid'");	

	$data[] = ["id" => $row['id'],
				"userid" => $row['user_id'],
				"userprof" => $this->get_user_profile($row['user_id']),
				"title" => $row['title'],
				"username" => $username[0]['username'],
				"details" => $row['details'],
				"price" => $row['price'],
				"posted" => $row['date_posted'],
				"comments" => $this->get_comments($row['id']),
				"ratings" => $this->get_ratings($row['id']),
				"image" => $this->get_product_image($row['url_rand_id'])];
	}


	$user_info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");


	echo json_encode(["login" => 1, "user" => $user, "products" => $data]);



	}


	public function authenticate()
	{

		if ($this->user->checking_auth()) {
			
			$id = $this->user->get_user_id();

			$checking = $this->db->query("SELECT user_status FROM users WHERE id='$id'");

			if ($checking[0]['user_status'] == 3) {
				$products = $this->db->query("SELECT * FROM posted_product WHERE status='0'");

				$data = [];

				foreach ($products as $row) {
				$data[] = ["id" => $this->hash->encode($row['id']),
							"userid" => $row['user_id'],
							"userprof" => $this->get_user_profile($row['user_id']),
							"title" => $row['title'],
							"details" => $row['details'],
							"price" => $row['price'],
							"comments" => $this->get_comments($row['id']),
							"ratings" => $this->get_ratings($row['id']),
							"image" => $this->get_product_image($row['url_rand_id'])];
				}

				$this->user->force_log_out();

				echo json_encode(["login" => 0, "products" => $data]);
			}else{
				$user = $this->db->query("SELECT * FROM users WHERE id='$id'");

				$products = $this->db->query("SELECT * FROM posted_product WHERE status='0' ORDER BY id DESC");

				$myproducts = $this->db->query("SELECT * FROM posted_product WHERE status='0' AND user_id='$id' ORDER BY id DESC");

				$data = [];
				$data2 = [];

	 			foreach ($products as $row) {
				$data[] = ["id" => $this->hash->encode($row['id']),
							"userid" => $row['user_id'],
							"userprof" => $this->get_user_profile($row['user_id']),
							"title" => $row['title'],
							"details" => $row['details'],
							"price" => $row['price'],
							"comments" => $this->get_comments($row['id']),
							"ratings" => $this->get_ratings($row['id']),
							"image" => $this->get_product_image($row['url_rand_id'])];
				}

	 			foreach ($myproducts as $row) {
				$data2[] = ["id" => $this->hash->encode($row['id']),
							"userid" => $row['user_id'],
							"userprof" => $this->get_user_profile($row['user_id']),
							"title" => $row['title'],
							"details" => $row['details'],
							"price" => $row['price'],
							"comments" => $this->get_comments($row['id']),
							"ratings" => $this->get_ratings($row['id']),
							"image" => $this->get_product_image($row['url_rand_id'])];
				}

				$user_info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");


				$services = [];

				foreach ($user_info as $row) {
				
				$techid = $row['user_id'];

				$get_serv = $this->db->query("SELECT * FROM services WHERE userid='$techid'");	

				$services[] = ["services" => $get_serv];

				}


				echo json_encode(["login" => 1, "services"=>$services, "user" => $user, "products" => $data, "info" => $user_info, "myproducts" => $data2]);
			}


		}else{
			$products = $this->db->query("SELECT * FROM posted_product WHERE status='0'");

			$data = [];

			foreach ($products as $row) {
			$data[] = ["id" => $this->hash->encode($row['id']),
						"userid" => $row['user_id'],
						"userprof" => $this->get_user_profile($row['user_id']),
						"title" => $row['title'],
						"details" => $row['details'],
						"price" => $row['price'],
						"comments" => $this->get_comments($row['id']),
						"ratings" => $this->get_ratings($row['id']),
						"image" => $this->get_product_image($row['url_rand_id'])];
			}

			echo json_encode(["login" => 0, "products" => $data]);

		}


	}

	public function get_product_allimage($urlid)
	{

		$img = $this->db->query("SELECT url FROM product_photo WHERE random_id='$urlid' ");

		return $img;

	}

	public function get_product_image($urlid)
	{

		$img = $this->db->query("SELECT url FROM product_photo WHERE random_id='$urlid' LIMIT 1");

		return $img[0]['url'];

	}

	public function upload_verify($userid)
	{

		$files = $_FILES['image23'];
		$file_path = $files['tmp_name'];
		$file_name = $files['name'];
		$file_size = $files['size'];
		$file_type = $files['type'];
		$directory = "./../verified";
		$path = $directory."/".$file_name;

		$newdir = "./verified/".$file_name;

		if (!is_dir($directory)) {
		//Create our fam_monitor_directory(fam, dirname).
		mkdir($directory, 755, true);
		move_uploaded_file($file_path, $path);
		} else {

		move_uploaded_file($file_path, $path);

		}

		$this->db->query("UPDATE user_info SET verified_id=%s, date_uploaded=%s WHERE user_id=%i ", $newdir, date("F j, Y, g:i a"), $userid);

		echo json_encode(["url" => $newdir]);

	}


	public function image_product($randomid)
	{

		$files = $_FILES['image22'];
		$file_path = $files['tmp_name'];
		$file_name = $files['name'];
		$file_size = $files['size'];
		$file_type = $files['type'];
		$directory = "./../products";
		$path = $directory."/".$file_name;

		$newdir = "./products/".$file_name;

		if (!is_dir($directory)) {
		//Create our fam_monitor_directory(fam, dirname).
		mkdir($directory, 755, true);
		move_uploaded_file($file_path, $path);
		} else {

		move_uploaded_file($file_path, $path);

		}

		$this->db->insert('product_photo', [
						  'url' => $newdir,
						  'random_id' => $randomid
						]);

		echo json_encode(["url" => $newdir]);

	}


	public function insert_seller_post()
	{

        $subject = $_POST['subject'];
        $category = $_POST['category'];
        $details = $_POST['details'];
        $contact = $_POST['contact'];
        $randomid = $_POST['randomid'];
        $userid = $_POST['userid'];
        $price = $_POST['price'];

		$this->db->insert('posted_product', [
						  'user_id' => $userid,
						  'title' => $subject,
						  'details' => $details,
						  'category' => $category,
						  'url_rand_id' => $randomid,
						  'contact' => $contact,
						  'price' => $price
						]);


		echo json_encode(["response" => "success"]);

	}




	public function view_all_posts()
	{

	if ($this->user->checking_auth()) {


	echo json_encode(["status"=>1]);

	}else{
	

	echo json_encode(["status"=>0]);

	}


	}


	public function item_to_search()
	{

		$search = $_POST['search'];

		$products = $this->db->query("SELECT * FROM posted_product WHERE status='0' AND title LIKE '%$search%' ");

		$data = [];

		foreach ($products as $row) {
		$data[] = ["id" => $this->hash->encode($row['id']),
					"userid" => $row['user_id'],
					"userprof" => $this->get_user_profile($row['user_id']),
					"title" => $row['title'],
					"details" => $row['details'],
					"price" => $row['price'],
					"comments" => $this->get_comments($row['id']),
					"ratings" => $this->get_ratings($row['id']),
					"image" => $this->get_product_image($row['url_rand_id'])];
		}

		echo json_encode(["products" => $data]);

	}

	public function item_category()
	{

		$cat = $_POST['category'];

		$products = $this->db->query("SELECT * FROM posted_product WHERE status='0' AND category='$cat' ");

		$data = [];

		foreach ($products as $row) {
		$data[] = ["id" => $this->hash->encode($row['id']),
					"userid" => $row['user_id'],
					"userprof" => $this->get_user_profile($row['user_id']),
					"title" => $row['title'],
					"details" => $row['details'],
					"price" => $row['price'],
					"comments" => $this->get_comments($row['id']),
					"ratings" => $this->get_ratings($row['id']),
					"image" => $this->get_product_image($row['url_rand_id'])];
		}

		echo json_encode(["products" => $data]);


	}

	public function remove_posts()
	{

	$id = $_POST['id'];		

    $this->db->query("UPDATE posted_product SET status=%i WHERE id=%i", 1, $id);

    echo json_encode(["response" => "success"]);

	}



}



?>