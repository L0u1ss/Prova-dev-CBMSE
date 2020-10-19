<?php
//import CORS; import conection db
require("../config/cors.php");
$con = require("../config/db.php");

//Se o metodo de request usado for o PATCH...
if ($_SERVER['REQUEST_METHOD'] === 'PATCH') { 
    //recebe o conteudo e converte o json para o php;
    $_PATCH = json_decode(file_get_contents('php://input'), true);
    $userid = $_PATCH["userid"];
    $nome = $_PATCH["nome"];
    $sobrenome = $_PATCH["sobrenome"];
    //prepara a query
    $sql = $con->prepare("UPDATE `pessoa` SET nome=?, sobrenome=? WHERE id=?");
    //passa os parametros da query
    $sql->bindParam(1, $nome);
    $sql->bindParam(2, $sobrenome);
    $sql->bindParam(3, $userid);
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
