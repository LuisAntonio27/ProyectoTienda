<?php

require_once '../database/querys.php';

function get_all_productos() {
    $consulta = "SELECT id, codigo, precio, nombre FROM producto";
    return get_elements($consulta);
}

//function get_all_productos_by_puesto_id($puesto_id) {
//    $consulta = "SELECT id, nombre, apellido_paterno FROM productos";
//    $consulta .= " WHERE puesto_id = " . $puesto_id;
//    return get_elements($consulta);
//}
//
//function get_producto_by_id($id){
//    $consulta = "SELECT
//productos.nombre,
//productos.apellido_paterno,
//puestos.puesto,
//puestos.salario
//FROM
//productos
//INNER JOIN puestos ON puestos.id = productos.puesto_id
//WHERE
//productos.id = " . $id;
//    return get_element($consulta);
//}