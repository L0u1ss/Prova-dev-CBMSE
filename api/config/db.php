<?php
//identificações do DB
$db = array(
    "db-host" => "localhost",
    "db-name" => "agenda",
    "db-user" => "root",
    "db-pass" => ""
);
//Conexão com o DB utilizando o módulo PDO
$con = new PDO("mysql:host=" . $db['db-host'] . ";dbname=" . $db["db-name"], $db["db-user"], $db["db-pass"]);

return $con;