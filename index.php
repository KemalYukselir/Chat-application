<?php include_once "php/header.php" ?>
<body>
    <div class="container">
        <section class="form-details">
            <header>Chat Application App</header>
            <form action="#">
                <div class="error-txt">Error!</div>
                <div class="name-details">
                    <div>
                        <label> First Name </label>
                        <input type="text" name="fname" placeholder="First Name" required/>
                    </div>
                    <div>
                        <label> Last Name </label>
                        <input type="text" name="lname" placeholder="Last Name" required/>
                    </div>
                </div>
                <div>
                    <label> Email Address </label>
                    <input type="text" name="email" placeholder="Email" required/>
                </div>
                <div>
                    <label> Password </label>
                    <input type="password" name="password" placeholder="Password" required/>
                    <i class="fas fa-eye"></i>
                </div>
                <div>
                    <input type="submit" value="Continue to Chat"/>
                </div>
            </form>
            <div class="link"> Already signed up? <a href="login.php">Login now</a></div>
        </section>
    </div>
</body>
<script src="js/passwordShowHide.js"></script>
<script src="js/signup.js"></script>
</html>