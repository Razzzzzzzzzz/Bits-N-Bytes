<?php 

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");



require_once('controller/User.php');
require_once('controller/Items.php');
require_once('controller/Tech.php');

include __DIR__ . '/../vendor/autoload.php';

DB::$user = 'root';
DB::$password = '';
DB::$dbName = 'market';
DB::$encoding = 'utf8';


use Controller\Items\Items;
use Controller\User\User;
use Controller\Tech\Tech;


use Phroute\Phroute\Dispatcher;
use Phroute\Phroute\RouteCollector;


$router = new RouteCollector();

date_default_timezone_set('Asia/Manila');

$router->post('market/api/unblock-user', function () {
    $user = new User();
    $user->unblock_user();
});

$router->post('market/api/block-user', function () {
    $user = new User();
    $user->block_user();
});

$router->post('market/api/list-tech', function () {
    $user = new User();
    $user->list_tech();
});

$router->post('market/api/list-buyer', function () {
    $user = new User();
    $user->list_buyer();
});

$router->post('market/api/{userid}/update-profile-picture', function ($userid) {
    $user = new User();
    $user->update_profile_picture($userid);
});

$router->post('market/api/check-admin', function () {
    $user = new User();
    $user->check_admin();
});

$router->post('market/api/login-admin', function () {
    $user = new User();
    $user->login_admin();
});

$router->post('market/api/update-account-info', function () {
    $user = new User();
    $user->update_account();
});

$router->post('market/api/update-user-pass', function () {
    $user = new User();
    $user->update_user_pass();
});

$router->post('market/api/update-admin-account', function () {
    $user = new User();
    $user->update_account_info();
});

$router->post('market/api/update-admin-password', function () {
    $user = new User();
    $user->update_owner_password();
});


$router->post('market/api/admin-account', function () {
    $user = new User();
    $user->admin_account();
});

$router->post('market/api/checking', function () {
    $user = new User();
    $user->checking();
});

$router->post('market/api/register-user', function () {
    $user = new User();
    $user->register_user();
});


$router->post('market/api/login-user', function () {
    $user = new User();
    $user->login_user();
});

$router->post('market/api/logout', function () {
    $user = new User();
    $user->log_out();
});


$router->post('market/api/remove-post', function () {
    $items = new Items();
    $items->remove_posts();
});

$router->post('market/api/get-posts', function () {
    $items = new Items();
    $items->get_posts();
});

$router->post('market/api/authenticate', function () {
    $items = new Items();
    $items->authenticate();
});

$router->post('market/api/{userid}/upload-verify', function ($userid) {
    $items = new Items();
    $items->upload_verify($userid);
});

$router->post('market/api/{randomid}/upload-image-product', function ($randomid) {
    $items = new Items();
    $items->image_product($randomid);
});

$router->post('market/api/insert-seller-post', function () {
    $items = new Items();
    $items->insert_seller_post();
});

$router->post('market/api/view-product', function () {
    $items = new Items();
    $items->view_product();
});

$router->post('market/api/rate-product', function () {
    $items = new Items();
    $items->rate_product();
});

$router->post('market/api/insert-comment', function () {
    $items = new Items();
    $items->insert_comment();
});

$router->post('market/api/view-message', function () {
    $items = new Items();
    $items->view_message();
});

$router->post('market/api/send-message', function () {
    $items = new Items();
    $items->send_message();
});

$router->post('market/api/get-messages', function () {
    $items = new Items();
    $items->get_my_messages();
});

$router->post('market/api/upload-file-chat/{userid}', function ($userid) {
    $items = new Items();
    $items->upload_file_chat($userid);
});

$router->post('market/api/get-single-message', function () {
    $items = new Items();
    $items->get_single_message();
});

$router->post('market/api/get-item', function () {
    $items = new Items();
    $items->get_item();
});

$router->post('market/api/update-item', function () {
    $items = new Items();
    $items->update_item();
});

$router->post('market/api/item-to-search', function () {
    $items = new Items();
    $items->item_to_search();
});

$router->post('market/api/item-category', function () {
    $items = new Items();
    $items->item_category();
});


$router->post('market/api/technicians', function () {
    $tech = new Tech();
    $tech->technicians();
});

$router->post('market/api/technician-profile', function () {
    $tech = new Tech();
    $tech->technician_profile();
});

$router->post('market/api/rate-tech', function () {
    $tech = new Tech();
    $tech->rate_tech();
});

$router->post('market/api/item-search', function () {
    $tech = new Tech();
    $tech->item_search();
});

$router->post('market/api/submit-comment', function () {
    $tech = new Tech();
    $tech->tech_review();
});

$router->post('market/api/insert-service', function () {
    $tech = new Tech();
    $tech->insert_service();
});

$router->post('market/api/edit-service', function () {
    $tech = new Tech();
    $tech->edit_service();
});

$router->post('market/api/tech-to-search', function () {
    $tech = new Tech();
    $tech->tech_to_search();
});


$dispatcher = new Dispatcher($router->getData());
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = rawurldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
echo $dispatcher->dispatch($httpMethod, $uri), "\n";

    

?>