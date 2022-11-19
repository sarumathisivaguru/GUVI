<?php
    $userdata = $_POST;

    $DATABASE_HOST = 'localhost';
    $DATABASE_USER = 'root';
    $DATABASE_PASS = '';
    $DATABASE_NAME = 'guvi';

    $con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

    if ( mysqli_connect_errno() ) {
        exit('Failed to connect to MySQL: ' . mysqli_connect_error());
    }

    $result = array("message" => "");
    $stmt = $con->prepare('SELECT id, password FROM login WHERE email = ?');
    if ($stmt) {
        $stmt->bind_param('s', $userdata['email']);

        $stmt->execute();
        $stmt->store_result();
        
        if ($stmt->num_rows > 0) {
            echo "User Already Exists";
        }
        else{
            $insertStmt = $con->prepare('INSERT INTO login (email, username, password) VALUES (?, ?, ?)');
            if ($insertStmt) {
                $password = password_hash($userdata['password'], PASSWORD_DEFAULT);
                
                $insertStmt->bind_param('sss', $userdata['email'], $userdata['username'], $password);
                if($insertStmt->execute())
                {
                    $result['message'] = "Registerd Successfully" ;
                    echo json_encode($result);
                }
                else{
                    echo "Error";
                }
            }
        }

        $stmt->close();
    }
    else{
        echo "Error";
    }
?>