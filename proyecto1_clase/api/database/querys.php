<?php

require_once '../database/conexion.php';

function get_elements($query) {
    $conn = get_conexion();
    $result = $conn->query($query) or die(mysqli_error($conn));
    $elements = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $elements[] = $row;
        }
    }
    $conn->close();
    return $elements;
}

function get_element($query) {
    $conn = get_conexion();
    $result = $conn->query($query) or die(mysqli_error($conn));
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $conn->close();
            return $row;
        }
    }
    $conn->close();
    return NULL;
}

function insert_element($sql) {
    $conn = get_conexion();
    if ($conn->query($sql) === TRUE) {
        return $conn->insert_id;
    } else {
        return FALSE;
    }
}
