<?php
//import CORS; import conection db
require("../config/cors.php");
$con = require("../config/db.php");

//prepara a query
$sql = $con->prepare("SELECT * FROM pessoa");
//executa a query
$sql->execute();
// $lenRow = $sql->rowCount();
// coloca em $itens tudo q a query retorna
$itens = $sql->fetchAll(PDO::FETCH_ASSOC);
//converte pro php
echo json_encode($itens);
// if ($lenRow > 0) {
    
// } else {
    
// }
