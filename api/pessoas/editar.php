<?php
if ($_SERVER['REQUEST_METHOD'] === 'PATCH') { 
    $_PATCH = json_decode(file_get_contents('php://input'), true);
    $userid = $_PATCH["userid"];
    $nome = $_PATCH["nome"];
    $sobrenome = $_PATCH["sobrenome"];
} else {
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
}
