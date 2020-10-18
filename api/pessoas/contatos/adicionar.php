<?php
require("../../config/cors.php");
if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
    $_POST = json_decode(file_get_contents('php://input'), true);
    $contato = $_POST["contato"];
    $userid = $_POST["userid"];
    $tipoContato = $_POST["tipoContato"];
    $con = require("../../config/db.php");
    $sql = $con->prepare("INSERT INTO `contato_pessoa` (contato, pessoa_id, tipo_contato_id) VALUES(?,?,?)");
    $sql->bindParam(1, $contato);
    $sql->bindParam(2, $userid);
    $sql->bindParam(3, $tipoContato);
    $sql->execute();
    echo "{code:\"sucess\"}";
} else if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    //nada
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
