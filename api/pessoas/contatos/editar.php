<?php
if ($_SERVER['REQUEST_METHOD'] === 'PATCH') { 
    $_PATCH = json_decode(file_get_contents('php://input'), true);
    $contatoid = $_PATCH["contatoid"];
    $contato = $_PATCH["contato"];
    $tipoContato = $_PATCH["tipoContato"];
    $con = require("../../config/db.php");
    $sql = $con->prepare("UPDATE `contato_pessoa` SET contato=?, tipo_contato_id=? WHERE id=?");
    $sql->bindParam(1, $contato);
    $sql->bindParam(2, $tipoContato);
    $sql->bindParam(3, $contatoid);
    $sql->execute();
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
