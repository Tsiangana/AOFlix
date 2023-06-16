<?php 
    if (isset($message)) {
        foreach ($message as $message) {
            echo '
            <div class="message">
                <span  onclick="this.parentElement.remove();">'.$message.'</span>
            </div>
            ';
        }
    }
    ?>

<header class="header">
    <div class="flex">
        <a href="admin_page.php" class="logo"> Painel <span>Administrador</span></a>
        <nav class="nav_bar">
            <a href="admin_page.php">Início</a>
            <a href="admin_products.php">Filmes</a>
            <a href="admin_users.php">Usuários</a>
        </nav>
        <div class="icons" style="display: flex;">
            <div id="user-btn" class="bi bi-user-fill"><i class="bi bi-person-fill"></i> </div>
            <div id="menu-btn" class="bi bi-bars" ><i class="bi bi-list"></i> </div>
        </div>
        <div class="account-box">
        <h1>email:</h1>
                <h2><?php echo $_SESSION['email']; ?></h2>
                <a href="logout.php"><button class="btn-sair" style="cursor: pointer;">Sair</button></a>
        </div>
    </div>
    
</header>