<?php
$userid = $_GET["userid"];
$con = require("../../config/db.php");
$sql = $con->prepare("SELECT * FROM contato_pessoa where pessoa_id=?");
$sql->bindParam(1, $userid);
$sql->execute();
// $lenRow = $sql->rowCount();
$itens = $sql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($itens);
// if ($lenRow > 0) {
    
// } else {
    
// }
