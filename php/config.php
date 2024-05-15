<?php
    $connection = mysqli_connect("localhost","root","","chat_application");
    if ($connection) {
        // echo "Connected to database";
    } else {
        echo "Error connecting to database";
    }
?>