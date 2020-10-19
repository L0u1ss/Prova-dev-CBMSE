<?php
//import CORS; import conection db
require("../../config/cors.php");
$con = require("../../config/db.php");

//Se o metodo de request usado for o DELETE...
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') { 
    $userid = $_GET["userid"];
    //prepara a query
    $sql = $con->prepare("DELETE FROM `contato_pessoa` WHERE id=?");
    //passa os parametros da query
    $sql->bindParam(1, $contatoid);
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
