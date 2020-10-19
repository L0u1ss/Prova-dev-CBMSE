<?php
//import CORS; import conection db
require("../../config/cors.php");
$con = require("../../config/db.php");
$userid = $_GET["userid"];
//prepara a query
$sql = $con->prepare("SELECT * FROM contato_pessoa where pessoa_id=?");
//passa os parametros da query
$sql->bindParam(1, $userid);
//executa a  query
$sql->execute();
// $lenRow = $sql->rowCount();
// coloca em $itens tudo q a query retorna
$itens = $sql->fetchAll(PDO::FETCH_ASSOC);
//converte pro php
echo json_encode($itens);
// if ($lenRow > 0) {
    
// } else {
    
// }
