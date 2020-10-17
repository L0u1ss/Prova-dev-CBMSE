<?php
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') { 
    $_DELETE = file_get_contents("php://input"),$post_vars;
    $con = require("../config/db.php");
    $sql = $con->prepare("DELETE FROM `pessoa` WHERE id=?");
    $sql->bindParam(1, $id);
    //$sql->execute();
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
