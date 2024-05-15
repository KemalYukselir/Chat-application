<?php
    session_start();
    include_once "config.php";
    $email = mysqli_real_escape_string($connection, $_POST['email']);
    $password = mysqli_real_escape_string($connection, $_POST['password']);

    if(empty($email) || empty($password)) {
        echo "\nAll fields are required";
    } else {
        // check user details
        $sql = mysqli_query($connection, "SELECT * FROM users WHERE email = '{$email}' AND password = '{$password}'");
        if(mysqli_num_rows($sql) > 0) {
            $row = mysqli_fetch_assoc($sql);
            $_SESSION['unique_id'] = $row['unique_id'];
            echo "Success";
        } else {
            echo "Wrong Email or Password";
        }
    }
?> 