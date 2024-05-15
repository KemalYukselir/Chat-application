<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat Application</title>
    <link rel="stylesheet" href="styles.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <section class="form-signup">
            <header>Chat Application App</header>
            <form action="#">
                <div class="error-txt">Error!</div>
                <div>
                    <label> Email Address </label>
                    <input type="text" placeholder="Email"/>
                </div>
                <div>
                    <label> Password </label>
                    <input type="password" placeholder="Password"/>
                    <i class="fas fa-eye"></i>
                </div>
                <div>
                    <input type="submit" value="Continue to Chat"/>
                </div>
            </form>
            <div class="link"> Don't have an account? <a href="#">Login now</a></div>
        </section>
    </div>
</body>
<script src="js/passwordShowHide.js"></script>
</html>