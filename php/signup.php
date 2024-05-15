<?php
    session_start();
    include_once "config.php";
    $fname = mysqli_real_escape_string($connection, $_POST['fname']);
    $lname = mysqli_real_escape_string($connection, $_POST['lname']);
    $email = mysqli_real_escape_string($connection, $_POST['email']);
    $password = mysqli_real_escape_string($connection, $_POST['password']);

    if(empty($fname) || empty($lname) || empty($email) || empty($password)) {
        echo "\nAll fields are required";
    } else {
        // Check if email is valid
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "\n$email is not a valid email";
        } else {
            // check if it's already in the database
            $sql = mysqli_query($connection, "SELECT email FROM users WHERE email = '{$email}'");
            if (mysqli_num_rows($sql) > 0) {
                echo "$email already exists";
            } else {
                $status = "Online";
                $userUniqueId = rand(time(), 10000000000000000);

                $sql2 = mysqli_query($connection, "INSERT INTO users (unique_id,fname,lname,email,password,status)
                 VALUES ('{$userUniqueId}', '{$fname}', '{$lname}', '{$email}', '{$password}', '{$status}')");

                if ($sql2) {
                    $sql3 = mysqli_query($connection, "SELECT * FROM users WHERE email = '{$email}'");
                    if (mysqli_num_rows($sql3) > 0) {
                        $row = mysqli_fetch_assoc($sql3);
                        $_SESSION['unique_id'] = $row['unique_id'];
                        echo "Success";
                    }
                } else {
                    echo "Something went wrong";
                }
            }
        }
    }
?>