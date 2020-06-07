<!-- Navbar -->
    <nav class="navbar navbar-expand-md py-3" id="main-navbar">
        <a class="navbar-brand pl-4 pr-2" href="../index.php"><img id="nav-logo" src="./resources/images/logos/jondavy0101-logo.png"></a>
        <button class="navbar-toggler p-0 pr-4" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="./resources/images/icons/hamburger-icon.png" width="40px">
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto justify-content-end pr-5 mt-md-0 mt-4">
                <?php
                    if($_SESSION['logged-in'] == true)
                    {   
                ?>
                        <li><a href="./resources/includes/logout.php"><img class="nav-glyph d-inline-block" src="./resources/images/icons/logout-w.png"><p class="d-inline-block m-0"> Logout</p></a></li>
                <?php   
                    } else 
                    {
                ?>
                        <li><a href="../login.php"><img class="nav-glyph d-inline-block" src="./resources/images/icons/login-w.png"><p class="d-inline-block m-0"> Login</p></a></li>
                <?php
                    }
                ?>
            </ul>
        </div>
    </nav>
    