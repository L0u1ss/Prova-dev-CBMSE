<?php
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') { 
    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $url_components = parse_url($url);
    @parse_str($url_components['query'], $_DELETE);

    $userid = $_DELETE["userid"];

    $con = require("../config/db.php");
    $sql = $con->prepare("DELETE FROM `pessoa` WHERE id=?");
    $sql->bindParam(1, $userid);
    $sql->execute();
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
