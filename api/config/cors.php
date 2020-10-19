<?php
// if($_SERVER['HTTP_ORIGIN'] == "http://localhost.com") {
//     header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
// } else {
//     // temporario
//     header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
// }

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, OPTIONS');

header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
