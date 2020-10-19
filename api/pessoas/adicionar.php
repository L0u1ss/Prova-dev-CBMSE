<?php
//import CORS; import conection db
require("../config/cors.php");
$con = require("../config/db.php");

//Se o metodo de request usado for o POST...
if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
    //recebe o conteudo e converte o json para o php
    $_POST = json_decode(file_get_contents('php://input'), true);
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    //prepara a query
    $sql = $con->prepare("INSERT INTO `pessoa` (nome, sobrenome) VALUES(?,?)");
    //passa os parametros da query
    $sql->bindParam(1, $nome);
    $sql->bindParam(2, $sobrenome);
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

