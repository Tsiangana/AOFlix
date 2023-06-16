<?php
include 'cofing.php';
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aoflix</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="bootstrap-icons/bootstrap-icons.css">
    <link rel="stylesheet" href="css/filmes.css">
    <style>*{ margin: 0; padding: 0; box-sizing: border-box;}body{font-family: "Poppins", sans-serif;background: rgb(17, 16, 16);}
    .movie-container {
        margin-left: 10px;
        margin-right: 10px;
        }
    </style>

</head>
<body>

    <header>
        <nav>
            <a href="inicio.php" class="logo" ><img src="img/logo.png" alt=""></a>
            <div class="end_bx">
                <ul style="display: flex;align-items: center;">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="top_semanal.html">Top Semanal</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li id="list"><a style="cursor: pointer;" >Categoria <i class="bi bi-chevron-down"></i></a>
                        <div class="list">
                            <a href="#">Treds Now</a>
                            <a href="#">Popular</a>
                            <a href="#">Preferences</a>
                            <a href="#">Recently added</a>
                            <a href="#">Bollywod</a>
                            <a href="#">Tollywod</a>
                        </div>
                    </li>
                </ul>
                <div class="search">
                    <input type="text" placeholder="search movies..." id="search">
                    <i class="bi bi-search" id="search_icon"></i>
                </div>
                <div class="bell">
                    <i class="bi bi-bell-fill"></i>
                </div>
                <div class="user" >
                    <i class="bi bi-person-circle" id="user-btn"></i>
                </div>
            </div>
            <div class="account-box">
                <h1>email:</h1>
                <h2><?php echo $_SESSION['email']; ?></h2>
                <a href="logout.php"><button class="btn-sair" style="cursor: pointer;">Sair</button></a>
            </div>
        </nav>
        <div class="content">
            <h6>Duration: <span id="header_dur">02h 10min</span></h6>
            <h3 id="header_gen"><i class="bi bi-star-fill"></i>6.5
                <span>Action /Adventure /Sci-Fi</span>
            </h3>
            <h1 id="header_title">Black Panther</h1>
            <p id="header_pra">Black Panther is a 2018 American superhero film based 
                on the Marvel Comics character of the same name. 
                Produced by Marvel Studios and distributed by Walt...</p>
                <div class="btns">
                    <a href="#video"><button><i class="bi bi-play-fill" id="play_btn"></i>WATCH</button></a>
                    <button><i class="bi bi-folder-plus"></i>ADD LIST</button>
                </div>
        </div>
        <div class="slider_btns">
            <h6 class="slider"></h6>
            <h6 class="slider"></h6>
            <h6 class="slider"></h6>
        </div>
    </header>

    <!-- trading box start -->
    <div class="trading_bx">
        <li><a href="#" class="active"><i class="bi bi-chevron-double-up"></i> Treds Now <span></span></a></li>
        <li><a href="#"><i class="bi bi-fire"></i> Popular <span></span></a></li>
        <li><a href="#"><i class="bi bi-star-fill"></i> Prefrenes <span></span></a></li>
        <li><a href="#"><i class="bi bi-plus"></i> Recently Added <span></span></a></li>
    </div>


    <!-- Category box start -->
    <div class="cato_bx" id="cato_bx">
        <button id="action1">Action</button>
        <button id="crime1">Crime</button>
        <button>Adventure</button>
        <button>Biography</button>
        <button>Animation</button>
        <button>Comedy</button>
        <button>Docmentary</button>
        <button id="drama1">Drama</button>
        <button>WebSeries</button>
        <button>18+</button>
        <button>SciFi</button>
        <button>Horor</button>

        <div class="cato_left_right">
            <i class="bi bi-chevron-down" id="left_scroll"></i> 
        </div>
        <div class="cato_left_right">
            <i class="bi bi-chevron-down" id="right_scroll"></i> 
        </div>
    </div>

    <!-- Movie box start -->
    <div class="movie_bx_1" id="mvoes_bx_1" style="display:flex">
        
        <button id="left_scroll1"><i class="bi bi-chevron-down"></i> </button>
        <button id="right_scroll1"><i class="bi bi-chevron-down"></i> </button>

        <div class="movie_bxx" id="action_bx"></div>
        <div class="movie_bxx" id="crime_bx"></div>
        <div class="movie_bxx" id="drama_bx"></div>

        <!-- show products start-->




<!-- show products end-->

        <!--<div class="card">
            <a href="#">
                <img src="capas/A-Menina-Que-Roubava-Livros.jpg" alt="">
                <div class="content">
                    <h5>A Menina Que Roubava Livros</h5>
                    <h6>
                        <span>2018</span>
                        <div class="rate">
                            <i class="bi bi-heart-fill"></i>
                            <i class="bi bi-eye-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <h6>4.5</h6>
                        </div>
                    </h6>
                </div>
            </a>
        </div>-->

    <div class="card" style="display:flex; margin-right: 10px;">
        <?php
        $select_products = mysqli_query($conn, "SELECT * FROM `products`") or die('Query failed');
        if (mysqli_num_rows($select_products) > 0) {
            while ($fetch_products = mysqli_fetch_assoc($select_products)) {
        ?>
            <a href="index.php?update=<?php echo $fetch_products['id']; ?>">
            <img src="uploaded_img/<?php echo $fetch_products['img']; ?>" alt="">
            <div class="content">
                    <h5><?php echo $fetch_products['name']; ?></h5>
                    <h6>
                        <span><?php echo $fetch_products['ano']; ?></span>
                        <div class="rate">
                            <i class="bi bi-heart-fill"></i>
                            <i class="bi bi-eye-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <h6><?php echo $fetch_products['genre']; ?></h6>
                        </div>
                    </h6>
                </div>
            <video src="uploaded_filmes/<?php echo $fetch_products['image']; ?>" controls style="display:none"></video>
            <div class="price" style="display:none"><?php echo $fetch_products['price']; ?></div>
            </a>
        <?php
            }
        }
        ?>
    </div>

    <section class="edit-product-form" id="form">
    <?php
    if (isset($_GET['update'])) {
        $update_id = $_GET['update'];
        $update_query = mysqli_query($conn, "SELECT * FROM `products` WHERE id = '$update_id'") or die('Query failed');
        if (mysqli_num_rows($update_query) > 0) {
            while ($fetch_update = mysqli_fetch_assoc($update_query)) {
    ?>

<form action="" method="post" enctype="multipart/form-data">
    <input type="reset" value="Fechar" id="close-update" class="option-btn" style="position: absolute;top: 5px;right: 15px;background-color: rgb(228, 30, 30);" onclick="fechar()">
    <input type="hidden" name="update_p_id" value="<?php echo $fetch_update['id']; ?>">
    <input type="hidden" name="update_old_video" value="<?php echo $fetch_update['image']; ?>">
    <input type="hidden" name="update_old_image" value="<?php echo $fetch_update['img']; ?>">
    <img src="uploaded_img/<?php echo $fetch_update['img']; ?>" alt="" style="display:none">
    <video src="uploaded_filmes/<?php echo $fetch_update['image']; ?>" controls ></video>
</form>

<?php
            }
        }
    } else {
        echo '<script>document.querySelector(".edit-product-form").style.display = "none";</script>';
    }
    ?>
        
</section>
        
       
</div>
    <!-- Movie box end -->

    <!-- Video box start -->
    <div class="video_bx">
        <video src="video/trailer1.mp4" id="video"></video>
        <div class="control">
            <div class="play_redo">
                <i class="bi bi-play-fill" id="play"></i>
                <i class="bi bi-arrow-clockwise" id="sec_30"></i>
                <span>10</span>
            </div>
            <div class="start_seekbar_end">
                <span id="start_time">28.04</span>
                <div class="seek">
                    <input type="range" id="seek" value="0">
                    <h5 id="seek_2"></h5>
                    <h4></h4>
                    <h6 id="seek_dot"></h6>
                </div>
                <span id="end_time">40.06</span>
            </div>
            <div class="cc_vol_screen">
                <i class="bi bi-badge-cc-fill"></i>
                <i class="bi bi-volume-up-fill" id="vol_icon"></i>
                <input type="range" name="vol" id="vol">
                <i class="bi bi-arrows-fullscreen" id="full_screen"></i>
            </div>
        </div>

            <h4 class="title_video">Pantera Negra Wakanda para Sempre Marvel Studios Trailer Oficial</h4>
            <span class="watching"><i class="bi bi-eye-fill"></i> Watching</span>
            <div class="heart_pluse"><i class="bi bi-heart-fill"></i> <i class="bi bi-plus"></i></div>
            <div class="video_list">
                <img src="capas/indice.jpg" alt="" class="video_1">
                <img src="capas/indice1.jpg" alt="" class="video_1">
                <img src="capas/indice3.jpg" alt="" class="video_1">
            </div>
    </div>
    <!-- Video box end -->

      <!-- trading box start -->
      <div class="trading_bx" style="margin-top: 20px;">
        <li><a href="#"><i class="bi bi-film"></i> Movies <span></span></a></li>
        <li><a href="#"><i class="bi bi-fire"></i> Series <span></span></a></li>
        <li><a href="#"><i class="bi bi-star-fill"></i> Animes <span></span></a></li>
        <li><a href="#"> Trailer <span></span></a></li>
    </div>

     <!-- Category box start -->
     <div class="cato_bx cato_bx2">
        <div class="left_cato">
        <button>Sort by:</button>
        <button>All</button>
        <button>Latest</button>
        <button id="year">Year <i class="bi bi-chevron-down"></i>
            <div class="year_bx">
                <li>2024</li>
                <li>2023</li>
                <li>2022</li>
                <li>2021</li>
                <li>2020</li>
                <li>2019</li>
                <li>2018</li>           
                <li>2017</li>           
                <li>2016</li>           
                <li>2015</li>           
            </div>
        </button>
        <button id="a_z">A-Z <i class="bi bi-chevron-down"></i>
            <div class="year_bx letter_bx">
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>H</li>
                <li>I</li>           
                <li>J</li>           
                <li>K</li>           
                <li>L</li>           
            </div>
        </button>
    </div>
    <div class="right_cato">
        <i class="bi bi-star-fill"></i>
        <input type="range" name="" id="" min="4.2" max="9.9">
        <span>7.0</span>
    </div>
    </div>

    <div class="movie_bx_1 movie_bx_2">
        
        <div class="all" id="all">
            <div class="card movie-container" style="display: flex;width: 450px;">
                <?php
                $select_products = mysqli_query($conn, "SELECT * FROM `products`") or die('Query failed');
                if (mysqli_num_rows($select_products) > 0) {
                    while ($fetch_products = mysqli_fetch_assoc($select_products)) {
                ?>
                <a href="index.php?update=<?php echo $fetch_products['id']; ?>">
                    <img src="uploaded_img/<?php echo $fetch_products['img']; ?>" alt="">
                    <div class="content">
                        <h5><?php echo $fetch_products['name']; ?></h5>
                        <h6>
                            <span><?php echo $fetch_products['ano']; ?></span>
                            <div class="rate">
                                <i class="bi bi-heart-fill"></i>
                                <i class="bi bi-eye-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <h6><?php echo $fetch_products['genre']; ?></h6>
                            </div>
                        </h6>
                    </div>
                </a>
                <?php
                    }
                }
                ?>
            </div>
        </div>

        
        
        
    </div>


    
    <script>
        document.querySelector('#close-update').onclick = () =>{
        document.querySelector('.edit-product-form').style.display = 'none';
        window.location.href = 'index.php'
        }
    
        let images = document.querySelectorAll('.show-products .box-container .box img');
    
        document.querySelector('#search-box').oninput = () =>{
           var value = document.querySelector('#search-box').value.toLowerCase();
            images.forEach(img =>{
                var dataSearch = img.getAttribute('data-search');
                if(dataSearch.indexOf(value) > -1){
                    img.style.display = 'inline-block';
                }else{
                    img.style.display = 'none';
                }
            })
        }
    
    
    
        </script>
        <script src="app.js"></script>

    

</body>
</html>