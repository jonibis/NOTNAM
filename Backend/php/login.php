<?php
include("conexao.php");

session_start();



$_SESSION["usuario"] = $usuario["nome"];
$_SESSION["email"] = $usuario["email"];
$_SESSION["id"] = $usuario["id"];

$sql = "SELECT * FROM usuarios
WHERE email='$login'
OR nome='$login'
OR telefone='$login'";

$resultado = mysqli_query($conexao,$sql);

if(mysqli_num_rows($resultado) > 0){

    $usuario = mysqli_fetch_assoc($resultado);

    if(password_verify($senha,$usuario["senha"])){

        $_SESSION["id"] = $usuario["id"];
        $_SESSION["nome"] = $usuario["nome"];

        header("Location: ../../Frontend/html/home.html");

    }else{

        echo "<script>
        alert('Senha incorreta!');
        history.back();
        </script>";

    }

}else{

    echo "<script>
    alert('Usuário não encontrado!');
    history.back();
    </script>";

}
?>