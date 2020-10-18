<?php
if ($_SERVER['REQUEST_METHOD'] === 'PATCH') { 
    $_PATCH = json_decode(file_get_contents('php://input'), true);
    $userid = $_PATCH["userid"];
    $nome = $_PATCH["nome"];
    $sobrenome = $_PATCH["sobrenome"];
    $con = require("../config/db.php");
    $sql = $con->prepare("UPDATE `pessoa` SET nome=?, sobrenome=? WHERE id=?");
    $sql->bindParam(1, $nome);
    $sql->bindParam(2, $sobrenome);
    $sql->bindParam(3, $userid);
    $sql->execute();
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
