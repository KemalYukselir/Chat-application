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
                        <p>Active now</p>
                    </div>
                </div>
                <a href="#" class="logout">Logout</a>
            </header>
            <div class="search">
                <!-- <span></span> -->
                <input placeholder="Enter name:"/>
                <button><i class="fas fa-search"></i></button>
            </div>
            <div class="users-list"> 
                <a href="#">
                    <div class="content">
                        <img src="Assets/logoHolder.jpg" alt=""/>
                        <div class="details">
                            <span>Kemal Yukselir</span>
                            <p> Hey </p>
                        </div>
                    </div>
                    <div class="status-dot"> <i class="fas fa-circle"></i> </div>
                </a>
                <a href="#">
                    <div class="content">
                        <img src="Assets/logoHolder.jpg" alt=""/>
                        <div class="details">
                            <span>Enis Yukselir</span>
                            <p> Hey </p>
                        </div>
                    </div>
                    <div class="status-dot"> <i class="fas fa-circle"></i> </div>
                </a>
                <a href="#">
                    <div class="content">
                        <img src="Assets/logoHolder.jpg" alt=""/>
                        <div class="details">
                            <span>Deniz Yukselir</span>
                            <p> Hey </p>
                        </div>
                    </div>
                    <div class="status-dot"> <i class="fas fa-circle"></i> </div>
                </a>
                <a href="#">
                    <div class="content">
                        <img src="Assets/logoHolder.jpg" alt=""/>
                        <div class="details">
                            <span>Yukselir Yukselir</span>
                            <p> Hey </p>
                        </div>
                    </div>
                    <div class="status-dot"> <i class="fas fa-circle"></i> </div>
                </a>
            </div>
        </section>
    </div>
</body>
</html>

