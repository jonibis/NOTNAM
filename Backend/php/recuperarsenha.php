<?php

include("conexao.php");

header("Content-Type: application/json");


$host = "localhost";
$user = "root";
$password = "";
$banco = "javelf";

$conexao = new mysqli($host, $user, $password, $banco);

if ($conexao->connect_error) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Erro ao conectar ao banco de dados."
    ]);
    exit();
}


$email = $_POST["email"];
$novaSenha = $_POST["novaSenha"];


$sql = "SELECT * FROM usuarios WHERE email = ?";

$stmt = $conexao->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();

$resultado = $stmt->get_result();

if ($resultado->num_rows == 0) {

    echo json_encode([
        "sucesso" => false,
        "mensagem" => "E-mail não encontrado."
    ]);

    exit();
}


$sql = "UPDATE usuarios SET senha = ? WHERE email = ?";

$stmt = $conexao->prepare($sql);
$stmt->bind_param("ss", $novaSenha, $email);

if ($stmt->execute()) {

    echo json_encode([
        "sucesso" => true,
        "mensagem" => "Senha alterada com sucesso!"
    ]);

} else {

    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Erro ao alterar a senha."
    ]);

}

$stmt->close();
$conexao->close();

?>