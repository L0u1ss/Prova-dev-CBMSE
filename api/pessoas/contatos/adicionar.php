<?php
//import CORS; import conection db
require("../../config/cors.php");
$con = require("../../config/db.php");

//Se o metodo de request usado for o POST...
if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
    //recebe o conteudo e converte o json para o php;
    $_POST = json_decode(file_get_contents('php://input'), true);
    $contato = $_POST["contato"];
    $userid = $_POST["userid"];
    $tipoContato = $_POST["tipoContato"];
    //prepara a query
    $sql = $con->prepare("INSERT INTO `contato_pessoa` (contato, pessoa_id, tipo_contato_id) VALUES(?,?,?)");
    //passa os parametros da query
    $sql->bindParam(1, $contato);
    $sql->bindParam(2, $userid);
    $sql->bindParam(3, $tipoContato);
    //executa a query
    $sql->execute();
    // apenas para não dar erro no front {TEMPORARIO}
    echo "{code:\"sucess\"}";
    //se o método de request usado for OPITIONS...
} else if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    //nada

    //se o método do requesto for diferente...
} else {
    //erro
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
