<?php 
    session_start();
    include_once "config.php";
    $sql = mysqli_query($connection, "SELECT * FROM users");
    $output = "";

    if (mysqli_num_rows($sql) == 1) {
        $output .= "No Users available";
    }
    else if (mysqli_num_rows($sql) > 0) {
        while($row = mysqli_fetch_assoc($sql)) {
            $output .= '
            <a href="#">
            <div class="content">
                <img src="Assets/logoHolder.jpg" alt=""/>
                <div class="details">
                    <span>'. $row['fname'] . " " . $row['lname'] .'</span>
                    <p> Hey </p>
                </div>
            </div>
            <div class="status-dot"> <i class="fas fa-circle"></i> </div>
        </a>
        ';
        }
    }

    echo $output;
?>