<?php
require_once '../models/carritos_model.php';

$carrito = get_all_carrito();

echo json_encode($carrito);

?>