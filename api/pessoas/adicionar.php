<?php
require("../config/cors.php");
if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
    $_POST = json_decode(file_get_contents('php://input'), true);
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $con = require("../config/db.php");
    $sql = $con->prepare("INSERT INTO `pessoa` (nome, sobrenome) VALUES(?,?)");
    $sql->bindParam(1, $nome);
    $sql->bindParam(2, $sobrenome);
    $sql->execute();
    echo "{code:\"sucess\"}";
} else if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    //nada
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
