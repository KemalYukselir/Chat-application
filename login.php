<?php include_once "php/header.php" ?>
<body>
    <div class="container">
        <section class="form-details">
            <header>Chat Application App</header>
            <form action="#">
                <div class="error-txt">Error!</div>
                <div>
                    <label> Email Address </label>
                    <input type="text" name = "email" placeholder="Email"/>
                </div>
                <div>
                    <label> Password </label>
                    <input type="password" name = "password" placeholder="Password"/>
                    <i class="fas fa-eye"></i>
                </div>
                <div>
                    <input type="submit" value="Continue to Chat"/>
                </div>
            </form>
            <div class="link"> Don't have an account? <a href="index.php">Sign up now</a></div>
        </section>
    </div>
</body>
<script src="js/passwordShowHide.js"></script>
<script src="js/login.js"></script>
</html>