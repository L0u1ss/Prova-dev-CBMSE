<?php
$con = require("../config/db.php");
$sql = $con->prepare("SELECT * FROM pessoa");
$sql->execute();
// $lenRow = $sql->rowCount();
$itens = $sql->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($itens);
// if ($lenRow > 0) {
    
// } else {
    
// }
