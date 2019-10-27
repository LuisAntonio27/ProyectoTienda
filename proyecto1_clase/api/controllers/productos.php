<?php

require_once '../models/productos_model.php';

$productos = get_all_productos();

echo json_encode($productos);