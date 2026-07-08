<?php

session_start();

if (!isset($_SESSION["usuario"])) {

    header("Location: ../../Frontend/html/loginUser.html");
    exit();

}

?>