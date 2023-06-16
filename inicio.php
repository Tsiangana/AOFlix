<?php 
include 'cofing.php';
session_start();

if (isset($_POST['submit'])){

    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $pass = mysqli_real_escape_string($conn, md5($_POST['password']));

    $select ="SELECT * FROM `users` WHERE email ='$email' AND password ='$pass'";

    $result = mysqli_query($conn, $select);

    $row = mysqli_num_rows($result);

    if ($row == 1) {
      $_SESSION['email'] = $email;
      header('Location: index.php');
      exit();
    }else {
      header('Location: inicio.php');
      exit();
    }
  }



  
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="Matio_logo.png" type="image/x-icon">
    <title>Bem - Vindo / Aoflix</title>
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <link rel="stylesheet" href="bootstrap-icons/bootstrap-icons.css">
    



</head>
<body>
  <script src="jquery-3.6.1.slim.js"></script>

  <div class="content">
    <div class="content-one">
      <h2>DC</h2>
      <h1>Dead<br>pool <br> 2</h1>
      <h3>Já disponível</h3>
    </div>

    <div class="content-two">

      <h2>Streamming</h2>
      <div class="one" style="margin-bottom: 10px;">
        <h1>Filmes da Semana</h1>
        <div class="one-one" onclick="sms()"><i class="bi bi-arrow-right"></i></div>
      </div>

      <button class="btn" onclick="next()">Entrar</button>
    </div>

    
  </div>

  <nav>
    <div class="one"><i class="bi bi-twitter"></i><h6> Deadpool um filme original da DC que vem reunindo <br>um grande número de fãs</h6></div>
    <div class="two">
      <button class="btn-primary" onclick="mostrar('mostra')">Login</button>
      <button class="btn-secundary" onclick="cadastrar()">Cadastrar</button>
    </div>
  </nav>

  <footer>
    <div class="one"><i class="bi bi-play-circle-fill" onclick="video()"></i></div>
  </footer>

  <div class="login" id="mostra">
    <i class="bi bi-x"  onclick="ocultar('mostra')"></i>
    <div class="one">
      <form action="" method="post">
        <h3>Login</h3>
        <input type="email" name="email" placeholder="email" required class="box"><br>
        <input type="password" name="password" placeholder="senha" required class="box">

        <input type="submit" name="submit" value="Logar" class="btn">
        <p>Ainda não possui uma conta ! <a href="register.php">Cadastra-te já!</a></p>
    </form>
    </div>
  </div>
  




    
    <script>
      function next() {
        window.location.href = 'index.php';
      }
      function sms() {
        alert('Indisponível de momento tente mais tarde');
      }function video() {
        alert('Indisponível de momento, verifique a sua conexão a internet');
      }
      function cadastrar(){
        window.location.href = 'register.php';
      }
      $( document ).ready(function () {
        $('.login').hide();
      })
      function mostrar(id) {
        $('#'+id).show();
      }
      function ocultar(id) {
        $('#'+id).hide();
      }

    </script>  
    
</body>
</html>