<?php
if (isset($_POST)) { 
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $con = require("../config/db.php");
    $sql = $con->prepare("INSERT INTO `pessoa` (nome, sobrenome) VALUES(?,?)");
    $sql->bindParam(1, $nome);
    $sql->bindParam(2, $sobrenome);
    $sql->execute();
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
