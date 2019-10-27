<?php

$usuario_id = 1;

require_once '../models/carritos_model.php';

if (isset($_POST['producto_id']) && $_POST['producto_id'] !== '') {
    $data = array(
        'usuario_id' => $usuario_id,
        'producto_id' => $_POST['producto_id']
    );
    $id = insert_in_carrito($data);
    if ($id) {
        echo json_encode(array('message' => 'insertado'));
    } else {
        http_response_code(500);
        echo json_encode(array('message' => 'no se inserto'));
    }
} else {
    http_response_code(400);
    echo json_encode(array('message' => 'falta dato'));
}