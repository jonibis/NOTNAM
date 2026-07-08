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
        "mensagem" => "Erro ao conectar ao banco."
    ]);

    exit();
}


$nome = $_POST["nome"];
$email = $_POST["email"];
$telefone = $_POST["telefone"];
$senha = $_POST["senha"];


$sql = "SELECT * FROM usuarios WHERE email = ?";

$stmt = $conexao->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();

$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {

    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Este e-mail já está cadastrado."
    ]);

    exit();
}


$sql = "INSERT INTO usuarios(nome,email,telefone,senha)
VALUES(?,?,?,?)";

$stmt = $conexao->prepare($sql);
$stmt->bind_param("ssss", $nome, $email, $telefone, $senha);

if ($stmt->execute()) {

    echo json_encode([
        "sucesso" => true,
        "mensagem" => "Cadastro realizado com sucesso!"
    ]);

} else {

    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Erro ao realizar o cadastro."
    ]);

}

$stmt->close();
$conexao->close();

?>