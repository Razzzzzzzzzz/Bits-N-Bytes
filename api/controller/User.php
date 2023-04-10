<?php 

namespace Controller\User;

use Hashids\Hashids;


class User
{
	
	private $hash;
	private $db;
	private $auth;


	function __construct()
	{

        $this->mkdb = new \PDO('mysql:dbname=market;host=localhost;charset=utf8mb4', 'root', '');
        $this->auth = new \Delight\Auth\Auth($this->mkdb);
		$this->hash = new Hashids('', 10);
		$this->db = new \MeekroDB();

	}

	public function unblock_user()
	{

	$id = $_POST['id'];		

    $this->db->query("UPDATE users SET block_status=%i WHERE id=%i", 0, $id);

    echo json_encode(["response" => "success"]);

	}

	public function block_user()
	{

	$id = $_POST['id'];		

    $this->db->query("UPDATE users SET block_status=%i WHERE id=%i", 1, $id);

    echo json_encode(["response" => "success"]);

	}

	public function list_buyer()
	{

		$buyer = $this->db->query("SELECT u.username, u.user_status, u.block_status, u.email, u.id, ui.address, ui.contact, ui.verified_status 
								  FROM users as u 
								  INNER JOIN user_info as ui ON(ui.user_id = u.id)
								  WHERE u.user_status='0'");

		echo json_encode(["users" => $buyer]);

	}

	public function list_tech()
	{

		$tech = $this->db->query("SELECT u.username, u.user_status, u.block_status, u.email, u.id, ui.address, ui.contact, ui.verified_status 
								  FROM users as u 
								  INNER JOIN user_info as ui ON(ui.user_id = u.id)
								  WHERE u.user_status='2' OR u.user_status='1'");

		echo json_encode(["users" => $tech]);

	}

	public function login_admin()
	{

	try {
	    $this->auth->login($_POST['email'], $_POST['password']);

	    $id = $this->get_user_id();

	    $check_status = $this->db->query("SELECT user_status FROM users WHERE id='$id'");


	    if ($check_status[0]['user_status'] == 1 ) {

	     $this->auth->logOut();	 

	     echo json_encode(["response"=>'Access decline!', "status"=>0]);

	    }else if ($check_status[0]['user_status'] == 0) {

	     $this->auth->logOut();	 

	     echo json_encode(["response"=>'Access decline!', "status"=>0]);

	    }else if ($check_status[0]['user_status'] == 2) {

	     $this->auth->logOut();	 

	     echo json_encode(["response"=>'Access decline!', "status"=>0]);

	    }else if ($check_status[0]['user_status'] == 3) {

	     $info = $this->db->query("SELECT * FROM users WHERE id='$id'");	

	     echo json_encode(["response"=>'Admin is logged in', "status"=>1, "user"=>$info]);

	    }


	   
	}
	catch (\Delight\Auth\InvalidEmailException $e) {
	    echo json_encode(["response"=>'Wrong email address', "status"=>0]);
	}
	catch (\Delight\Auth\InvalidPasswordException $e) {
	    echo json_encode(["response"=>'Wrong password', "status"=>0]);
	}
	catch (\Delight\Auth\EmailNotVerifiedException $e) {
	    echo json_encode(["response"=>'Email not verified', "status"=>0]);
	}
	catch (\Delight\Auth\TooManyRequestsException $e) {
		echo json_encode(["response"=>'Too many requests', "status"=>0]);
	}

	}

	public function check_admin()
	{
	if ($this->checking_auth()) {

		$id = $this->get_user_id();	
		
		$checking = $this->db->query("SELECT user_status FROM users WHERE id='$id'");

		$posted_product = $this->db->query("SELECT count(id) as count FROM posted_product");

		$buyer = $this->db->query("SELECT count(id) as count FROM users WHERE user_status='0'");

		$seller = $this->db->query("SELECT count(id) as count FROM users WHERE user_status='1'");

		$tech = $this->db->query("SELECT count(id) as count FROM users WHERE user_status='2'");

		$services = $this->db->query("SELECT count(id) as count FROM services");

		$verified = $this->db->query("SELECT count(id) as count FROM user_info WHERE verified_status='1'");

		$notverified = $this->db->query("SELECT count(id) as count FROM user_info WHERE verified_status='0'");

		$uniqueid = $this->db->query("SELECT DISTINCT(category) FROM posted_product ");

		$catarray = Array();
		$catcount = Array();
		$colorarray = Array();

		foreach ($uniqueid as $row) {
		
		$catid = $row['category'];

		$count = $this->db->query("SELECT count(id) as count FROM posted_product WHERE category='$catid'");

		$name = $this->db->query("SELECT category_name FROM category WHERE id='$catid'");

		$color = $this->random_color();

		array_push($colorarray, $color);

		array_push($catcount, intval($count[0]['count']));

		array_push($catarray, $name[0]['category_name']);

		}

		// $number_of_owners = $this->db->query("SELECT count(id) as count FROM users WHERE user_status='1'");
		// $number_of_guest = $this->db->query("SELECT count(id) as count FROM users WHERE user_status='0'");

		// $totolcount = $number_of_owners[0]['count']+$number_of_guest[0]['count'];

		// $percent_owners = $number_of_owners[0]['count']/$totolcount;

		// $final_percentage_owners = $percent_owners*100;


		// $percent_guest = $number_of_guest[0]['count']/$totolcount;

		// $final_percentage_guest = $percent_guest*100;


		if ($checking[0]['user_status'] == 3) {

			echo json_encode(["status" => 1 , 
							  "catarray" => $catarray,
							  "colors" => $colorarray,
							  "catcount" => $catcount,
						      "product" => $posted_product[0]['count'],
						      "verified" => $verified[0]['count'],
						      "notverified" => $notverified[0]['count'],
						      "buyer" => $buyer[0]['count'],
						      "seller" => $seller[0]['count'],
						      "services" => $services[0]['count'],
						      "tech" => $tech[0]['count']] );

		}else{
			echo json_encode(["status" => 0]);
		}

	}else{

	echo json_encode(["status" => 0]);	
		
	}	
	}


	public function random_color_part() {
	    return str_pad( dechex( mt_rand( 0, 255 ) ), 2, '0', STR_PAD_LEFT);
	}

	public function random_color() {
	    return "#".$this->random_color_part() . $this->random_color_part() . $this->random_color_part();
	}

	public function update_profile_picture($userid)
	{

		$files = $_FILES['image'];
		$file_path = $files['tmp_name'];
		$file_name = $files['name'];
		$file_size = $files['size'];
		$file_type = $files['type'];
		$directory = "./../profile";
		$path = $directory."/".$file_name;

		$newdir = "./profile/".$file_name;

		if (!is_dir($directory)) {
		//Create our fam_monitor_directory(fam, dirname).
		mkdir($directory, 755, true);
		move_uploaded_file($file_path, $path);
		} else {

		move_uploaded_file($file_path, $path);

		}

		$this->db->query("UPDATE users SET url=%s WHERE id=%i", $newdir, $userid);

		echo json_encode(["url" => $newdir]);

	}

	public function update_account()
	{

		if ($_POST['text'] == "address") {
		
			$this->db->query("UPDATE user_info SET address=%s WHERE user_id=%i", $_POST['value'], $_POST['id']);	

		}else{

			$this->db->query("UPDATE user_info SET contact=%s WHERE user_id=%i", $_POST['value'], $_POST['id']);	

		}


		echo json_encode(["response" => "success"]);
	}

	public function update_user_pass()
	{
        try {
            $this->auth->changePasswordWithoutOldPasswordNewVersion($_POST['password'], $_POST['id']);

            echo json_encode(["response" => "Password has been changed"]);
        } catch (\Delight\Auth\NotLoggedInException $e) {
            echo json_encode(["response" => "Not logged in"]);
        } catch (\Delight\Auth\InvalidPasswordException $e) {
            echo json_encode(["response" => "Invalid password(s)"]);
        } catch (\Delight\Auth\TooManyRequestsException $e) {
            echo json_encode(["response" => "Too many requests"]);
        }
	}
	
	public function update_owner_password()
	{
		try {
		    $this->auth->changePassword($_POST['oldPassword'], $_POST['newPassword']);

		    echo json_encode(["response" => "Password has been changed", "status" => 1]);
		}
		catch (\Delight\Auth\NotLoggedInException $e) {
		    echo json_encode(["response" => "Not logged in", "status" => 0]);
		}
		catch (\Delight\Auth\InvalidPasswordException $e) {
		   echo json_encode(["response" => "Invalid password(s)", "status" => 0]);
		}
		catch (\Delight\Auth\TooManyRequestsException $e) {
		   echo json_encode(["response" => "Too many requests, Try again after 1 hour.", "status" => 0]);
		}
	}

	public function update_account_info()
	{

	$id = $_POST['id'];
	$email = $_POST['email'];
	$username = $_POST['username'];


	$this->db->query("UPDATE users SET email=%s, username=%s WHERE id=%i", $email, $username, $id);		

	echo json_encode(["response" => "success"]);

	}

	public function admin_account()
	{
	if ($this->checking_auth()) {

		$id = $this->get_user_id();	

		$users = $this->db->query("SELECT * FROM users WHERE id='$id'");

		$data = [];

		foreach ($users as $row) {
		$data[] = ["id" => $row['id'],
					"username" => $row['username'],
					"email" => $row['email'],
					"registered" => date("Y-m-d H:i:s", $row['registered']),
					"lastlogin" => date("Y-m-d H:i:s", $row['last_login'])];
		}

		echo json_encode(["status" => 1, "users" => $data]);

	}else{

		echo json_encode(["status" => 0]);

	}	
    }

	public function register_user()
	{

		try {
		    $userId = $this->auth->register($_POST['email'], $_POST['password'], $_POST['username'], function ($selector, $token) {

		    });

		    $url = 'assets/images/faces/1.jpg';

		    $this->db->query("UPDATE users SET verified=%i, user_status=%i, url=%s WHERE id=%i", 1, $_POST['type'], $url, $userId);

		    $this->db->insert('user_info', [
							  'user_id' => $userId
							]);

		    echo json_encode(["response"=>"User registered!"]);
		    
		}
		catch (\Delight\Auth\InvalidEmailException $e) {
		    echo json_encode(["response"=>"Invalid email address"]);
		}
		catch (\Delight\Auth\InvalidPasswordException $e) {
		    echo json_encode(["response"=>"Invalid password"]);
		}
		catch (\Delight\Auth\UserAlreadyExistsException $e) {
		    echo json_encode(["response"=>"User already exists"]);
		}
		catch (\Delight\Auth\TooManyRequestsException $e) {
		    echo json_encode(["response"=>"Too many requests"]);
		}

	}


	public function checking()
	{

		if ($this->checking_auth()) {
			echo json_encode(["login" => 1]);
		}else{
			echo json_encode(["login" => 0]);
		}

	}

	public function login_user()
	{

	try {
	    $this->auth->login($_POST['email'], $_POST['password']);

	    $id = $this->get_user_id();

	    $check_status = $this->db->query("SELECT user_status FROM users WHERE id='$id'");


	    if ($check_status[0]['user_status'] == 1 ) {

	     $info = $this->db->query("SELECT * FROM users WHERE id='$id'");	

	     echo json_encode(["response"=>'Owner is logged in', "status"=>1, "user"=>$info]);

	    }else if ($check_status[0]['user_status'] == 2) {

	     $info = $this->db->query("SELECT * FROM users WHERE id='$id'");	

	     echo json_encode(["response"=>'Owner is logged in', "status"=>1, "user"=>$info]);

	    }else if ($check_status[0]['user_status'] == 0) {

	     $info = $this->db->query("SELECT * FROM users WHERE id='$id'");	

	     echo json_encode(["response"=>'Owner is logged in', "status"=>1, "user"=>$info]);

	    }else if ($check_status[0]['user_status'] == 3) {

	     $info = $this->db->query("SELECT * FROM users WHERE id='$id'");	

	     $this->auth->logOut();

	     echo json_encode(["response"=>'Admin account', "status"=>0]);

	    }


	   
	}
	catch (\Delight\Auth\InvalidEmailException $e) {
	    echo json_encode(["response"=>'Wrong email address', "status"=>0]);
	}
	catch (\Delight\Auth\InvalidPasswordException $e) {
	    echo json_encode(["response"=>'Wrong password', "status"=>0]);
	}
	catch (\Delight\Auth\EmailNotVerifiedException $e) {
	    echo json_encode(["response"=>'Email not verified', "status"=>0]);
	}
	catch (\Delight\Auth\TooManyRequestsException $e) {
		echo json_encode(["response"=>'Too many requests', "status"=>0]);
	}

	}

	public function force_log_out()
	{
		
	$this->auth->logOut();

	}

	public function log_out()
	{

	$this->auth->logOut();
	
	echo json_encode(["response" => "Logout!"]);

	}

	public function get_user_id()
	{
    $id = $this->auth->getUserId();
    return $id;
	}


	public function view_users()
	{
	
	$users = $this->db->query("SELECT * FROM users WHERE admin_status='0'");
	
	$data = [];

	foreach ($users as $row) {
	
	$data[] = [ "id" => $this->hash->encode($row['id']),
			    "username"=> $row['username'],
				"email" => $row['email']]; 
	
	}

	echo json_encode(["userdata" => $data]);	


	}

	public function delete_users()
	{

	$id = $this->hash->decode($_POST['id']);	

	try {

	    $this->auth->admin()->deleteUserById($id[0]);

	    echo json_encode(["response" => "Deleted"]);	
	}
	catch (\Delight\Auth\UnknownIdException $e) {
	
		echo json_encode(["response" => "Unknown ID"]);	

	}

	}

    public function checking_auth()
    {

        $LoggedIn = false;

        if ($this->auth->isLoggedIn()) {
            $LoggedIn = true;
        }

        return $LoggedIn;
    }




}


?>