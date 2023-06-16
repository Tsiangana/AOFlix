<?php

include 'cofing.php';
session_start();

if (isset($_POST['add_product'])) {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $price = $_POST['price'];
    $ano = $_POST['ano'];
    $genre = $_POST['genre'];
    $video = $_FILES['video']['name'];
    $video_tmp_name = $_FILES['video']['tmp_name'];
    $video_folder = 'uploaded_filmes/' . $video;

    $image = $_FILES['image']['name'];
    $image_size = $_FILES['image']['size'];
    $image_tmp_name = $_FILES['image']['tmp_name'];
    $image_folder = 'uploaded_img/'. $image;
 
    $select_product_name = mysqli_query($conn, "SELECT name FROM `products` WHERE name = '$name' ") or die('A busca falhou'); 

    if (mysqli_num_rows($select_product_name) > 0) {
        $message[] = 'Um filme com esse nome já existe';
    } else {
        $add_product_query = mysqli_query($conn, "INSERT INTO `products` (name, price, image, img, ano, genre) VALUES ('$name', '$price', '$video', '$image', '$ano', '$genre')") or die('Query failed');

        if ($add_product_query) {
            move_uploaded_file($video_tmp_name, $video_folder);
            move_uploaded_file($image_tmp_name, $image_folder);
            $message[] = 'Um filme adicionado com sucesso';
        } else {
            $message[] = 'Um filme não pode ser adicionado!';
        }
    }
}

if (isset($_GET['delete'])) {
    $delete_id = $_GET['delete'];
    $delete_video_query = mysqli_query($conn, "SELECT image FROM `products` WHERE id = '$delete_id'") or die('Query failed');
    $fetch_delete_video = mysqli_fetch_assoc($delete_video_query);
    unlink('uploaded_filmes/' . $fetch_delete_video['image']);

    $delete_image_query = mysqli_query($conn, "SELECT img FROM `products` WHERE id = '$delete_id'") or die('query faild');
    $fetch_delete_image = mysqli_fetch_assoc($delete_image_query);
    unlink('uploaded_img/'.$fetch_delete_image['img']);
    mysqli_query($conn, "DELETE FROM `products` WHERE id = '$delete_id'") or die('Query failed');
    header('location: admin_page.php');
}

if (isset($_POST['update_product'])) {
    $update_p_id = $_POST['update_p_id'];
    $update_name = $_POST['update_name'];
    $update_price = $_POST['update_price'];
    $update_ano = $_POST['update_ano'];
    $update_genre = $_POST['update_genre'];

    mysqli_query($conn, "UPDATE `products` SET name = '$update_name', price = '$update_price', ano = '$update_ano', genre = '$update_genre' WHERE id = '$update_p_id'") or die('Query failed');

    $update_video = $_FILES['update_video']['name'];
    $update_video_tmp_name = $_FILES['update_video']['tmp_name'];
    $update_video_folder = 'uploaded_filmes/' . $update_video;
    $update_old_video = $_POST['update_old_video'];

    $update_image = $_FILES['update_image']['name'];
    $update_image_tmp_name = $_FILES['update_image']['tmp_name'];
    $update_folder = 'uploaded_img/'.$update_image;
    $update_old_image = $_POST['update_old_image'];

    if (!empty($update_video)) {
        mysqli_query($conn, "UPDATE `products` SET image = '$update_video' WHERE id = '$update_p_id'") or die('Query failed');
        move_uploaded_file($update_video_tmp_name, $update_video_folder);
        unlink('uploaded_filmes/' . $update_old_video);

        mysqli_query($conn, "UPDATE `products` SET img = '$update_image' WHERE id = '$update_p_id'") or die('query failed');
        move_uploaded_file($update_image_tmp_name, $update_folder);
        unlink('uploaded_img/'.$update_old_image );
    }

    header('location: admin_products.php');
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel de Produtos</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="bootstrap-icons/bootstrap-icons.css">
    <link rel="stylesheet" href="css/admin_style.css">
</head>
<body>

    <?php
    include 'admin_header.php';
    ?>

    <!-- product CRUD section start-->

<h1 class="tittle" style="margin-top:25px;margin-bottom:-10px">Loja de Produtos</h1>

<section class="add-products">
    <form action="" method="post" enctype="multipart/form-data">
        <h3>Adicionar Produtos</h3>
        <input type="text" name="name" class="box" placeholder="Nome do filme" required>
        <input type="text" name="price" class="box" placeholder="Descrição" required>
        <input type="text" name="ano" class="box" placeholder="Ano" required>
        <input type="text" name="genre" class="box" placeholder="Estrelas" required>
        <input type="file" name="image" accept="image/jpg, image/png, image/jpeg, image/webp" class="box" required>
        <input type="file" name="video" accept="video/mp4" class="box" required>
        <input type="submit" value="Adicionar Filme" name="add_product" class="btn">
    </form>
</section>

<!-- product CRUD section end-->

<!-- show products start-->

<section class="show-products">
    <div class="box-container">
        <?php
        $select_products = mysqli_query($conn, "SELECT * FROM `products`") or die('Query failed');
        if (mysqli_num_rows($select_products) > 0) {
            while ($fetch_products = mysqli_fetch_assoc($select_products)) {
        ?>
        <div class="box">
            <img src="uploaded_img/<?php echo $fetch_products['img']; ?>" alt="">
            <video src="uploaded_filmes/<?php echo $fetch_products['image']; ?>" controls style="display:none"></video>
            <div class="name"><?php echo $fetch_products['name']; ?></div>
            <div class="price"><?php echo $fetch_products['price']; ?></div>
            <a href="admin_products.php?update=<?php echo $fetch_products['id']; ?>" class="option-btn">Atualizar</a>
            <a href="admin_products.php?delete=<?php echo $fetch_products['id']; ?>" class="delete-btn" onclick="return confirm('Tem certeza de que deseja apagar este produto?');">Apagar</a>
        </div>
        <?php
            }
        } else {
            echo '<p class="empty">Ainda não foram adicionados filmes</p>';
        }
        ?>
    </div>
</section>

<section class="edit-product-form">
    <?php
    if (isset($_GET['update'])) {
        $update_id = $_GET['update'];
        $update_query = mysqli_query($conn, "SELECT * FROM `products` WHERE id = '$update_id'") or die('Query failed');
        if (mysqli_num_rows($update_query) > 0) {
            while ($fetch_update = mysqli_fetch_assoc($update_query)) {
    ?>

<form action="" method="post" enctype="multipart/form-data">
    <input type="hidden" name="update_p_id" value="<?php echo $fetch_update['id']; ?>">
    <input type="hidden" name="update_old_video" value="<?php echo $fetch_update['image']; ?>">
    <input type="hidden" name="update_old_image" value="<?php echo $fetch_update['img']; ?>">
    <img src="uploaded_img/<?php echo $fetch_update['img']; ?>" alt="" style="display:none">
    <video src="uploaded_filmes/<?php echo $fetch_update['image']; ?>" controls style="display:none"></video>
    <input type="text" name="update_name" value="<?php echo $fetch_update['name']; ?>" class="box" required placeholder="Nome do filme">
    <input type="text" name="update_price" value="<?php echo $fetch_update['price']; ?>" class="box" required placeholder="Descrição do filme">
    <input type="text" name="update_ano" value="<?php echo $fetch_update['ano']; ?>" class="box" required placeholder="Ano">
    <input type="text" name="update_genre" value="<?php echo $fetch_update['genre']; ?>" class="box" required placeholder="Estrelas">
    <input type="file" class="box" name="update_image" accept="image/jpg, image/jpeg, image/png, image/webp">
    <input type="file" class="box" name="update_video" accept="video/mp4">
    <input type="submit" value="Atualizar" name="update_product" class="btn">
    <input type="reset" value="Cancelar" id="close-update" class="option-btn">
</form>

<?php
            }
        }
    } else {
        echo '<script>document.querySelector(".edit-product-form").style.display = "none";</script>';
    }
    ?>
        
</section>

<!-- show products end-->




    

    <script src="js/admin_script.js"></script>
</body>
</html>