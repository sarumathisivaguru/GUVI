<?php
    require_once __DIR__ . '/vendor/autoload.php';
    // require '.\vendor\autoload.php';
    // $redis = new Predis\Client();
    $client = new MongoDB\Client(
            'mongodb+srv://root:root@cluster0.fl7oxdf.mongodb.net/guvi?retryWrites=true&w=majority');
    $collection = $client->guvi->user;            
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        // $email = $redis->get($_POST["auth_token"]);
        // if($email == ""){
        //     echo "Please Login";
        // }
        // else{
        $data = array("name"=>$_POST["name"], "dob"=>$_POST["dob"], "age"=>$_POST["age"], "phone"=>$_POST["phone"]);
        $collection->insertOne($data);
        $result["message"] = "Updated";
        echo json_encode($result);
        // }
    }
?>