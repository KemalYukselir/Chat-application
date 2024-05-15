<?php
    session_start();
    if (!isset($_SESSION['unique_id'])) {
        header("location: login.php");
    }
?>
<?php include_once "php/header.php" ?>
<body>
    <div class="container">
        <section class="users">
            <header>
                <?php 
                    include_once "php/config.php";
                    $sql = mysqli_query($connection, "SELECT * FROM users WHERE unique_id = '{$_SESSION['unique_id']}'");
                    if (mysqli_num_rows($sql) > 0) {
                        $row = mysqli_fetch_assoc($sql);
                    } 
                ?>
                <div class="content">
                    <img src="Assets/logoHolder.jpg" alt=""/>
                    <div class="details">
                        <span><?php echo $row['fname'] . " " . $row['lname'] ?></span>
                        <p><?php echo $row['status'] ?></p>
                    </div>
                </div>
                <a href="#" class="logout">Logout</a>
            </header>
            <div class="users-list"> 
                
            </div>
        </section>
    </div>
</body>
<script src="js/users.js"></script>
</html>

