<?php
//import CORS; import conection db
require("../../config/cors.php");
$con = require("../../config/db.php");

//Se o metodo de request usado for o PATCH...
if ($_SERVER['REQUEST_METHOD'] === 'PATCH') { 
    //recebe o conteudo e converte o json para o php
    $_PATCH = json_decode(file_get_contents('php://input'), true);
    $contatoid = $_PATCH["contatoid"];
    $contato = $_PATCH["contato"];
    $tipoContato = $_PATCH["tipoContato"];
    //prepara a query
    $sql = $con->prepare("UPDATE `contato_pessoa` SET contato=?, tipo_contato_id=? WHERE id=?");
    //passa os parametros da query
    $sql->bindParam(1, $contato);
    $sql->bindParam(2, $tipoContato);
    $sql->bindParam(3, $contatoid);
    //executa a query
    $sql->execute();
    // apenas para não dar erro no front {TEMPORARIO}
    echo "{code:\"sucess\"}";
    //se o método de request usado for OPITIONS...
} else if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    //nada

    //se o método do requesto for diferente..
} else {
    //erro
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
