<?php
require_once '../config/database.php';

function get_conexion() {
    // Create connection
    $conn = new mysqli($GLOBALS['db']['servername'], $GLOBALS['db']['username'], $GLOBALS['db']['password'], $GLOBALS['db']['dbname']);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}
