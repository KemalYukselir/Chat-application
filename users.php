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
        <section class="users">
            <header>
                <div class="content">
                    <img src="logoHolder.jpg" alt=""/>
                    <div class="details">
                        <span>Kemal Yukselir</span>
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
                        <img src="logoHolder.jpg" alt=""/>
                        <div class="details">
                            <span>Kemal Yukselir</span>
                            <p> Hey </p>
                        </div>
                    </div>
                    <div class="status-dot"> <i class="fas fa-circle"></i> </div>
                </a>
                <a href="#">
                    <div class="content">
                        <img src="logoHolder.jpg" alt=""/>
                        <div class="details">
                            <span>Enis Yukselir</span>
                            <p> Hey </p>
                        </div>
                    </div>
                    <div class="status-dot"> <i class="fas fa-circle"></i> </div>
                </a>
                <a href="#">
                    <div class="content">
                        <img src="logoHolder.jpg" alt=""/>
                        <div class="details">
                            <span>Deniz Yukselir</span>
                            <p> Hey </p>
                        </div>
                    </div>
                    <div class="status-dot"> <i class="fas fa-circle"></i> </div>
                </a>
                <a href="#">
                    <div class="content">
                        <img src="logoHolder.jpg" alt=""/>
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
