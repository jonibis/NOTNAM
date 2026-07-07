<?php

$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "javelf";

$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Erro ao conectar: " . $conn->connect_error);
}

$conn->set_charset("utf8");

?>