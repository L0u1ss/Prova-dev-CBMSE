<?php
$db = array(
    "db-host" => "localhost",
    "db-name" => "agenda",
    "db-user" => "root",
    "db-pass" => ""
);

$con = new PDO("mysql:host=" . $db['db-host'] . ";dbname=" . $db["db-name"], $db["db-user"], $db["db-pass"]);

return $con;