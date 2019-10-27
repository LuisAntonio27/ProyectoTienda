var lista_productos = [];
var carrito = [];
function cargarProductos() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status = 200) {
                var json_text = this.responseText;
                lista_productos = JSON.parse(json_text);
                imprimir_productos(lista_productos);
                console.log(lista_productos);
            }
        }
    };
    xhr.open('GET', 'api/controllers/productos.php', true);
    xhr.send();
}

function imprimir_productos(lista_productos) {
    var productos_div = document.getElementById('lista-productos');
    var productos_html = '<ul>';
    for (var i = 0; i < lista_productos.length; i++) {
        productos_html += '<li>';
        productos_html += lista_productos[i].nombre;
        productos_html += '  $';
        productos_html += lista_productos[i].precio;
        productos_html += ' ';
        productos_html += '<button class="btn btn-success" title="Agregar" onclick="agregarCarrito(' + lista_productos[i].id + ')">';
        productos_html += '+';
        productos_html += '</button>';
        productos_html += '</li>';
        productos_html += '</br>';
    }
    productos_html += '</ul>';
    productos_div.innerHTML = productos_html;
}

function agregarCarrito(id) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status = 200) {
                var respuesta = JSON.parse(this.responseText);
                new Noty({
                    type: 'success',
                    layout: 'topRight',
                    text: respuesta.message
                }).show();
                cargarCarrito();
            }
        }
    };
    xhr.open('POST', 'api/controllers/agregar_carrito.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send('producto_id=' + id);
}

function cargarCarrito() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status = 200) {
                var json_text = this.responseText;
                carrito = JSON.parse(json_text);
                imprimir_carrito(carrito);
                console.log(carrito);
            }
        }
    };
    xhr.open('GET', 'api/controllers/carrito.php', true);
    xhr.send();
}

function imprimir_carrito(carrito) {
    var carrito_div = document.getElementById('lista-carrito');
    var carrito_html = '<ul>';
    for (var i = 0; i < carrito.length; i++) {
        var producto_id = carrito[i].producto_id;
        var indice = compararProductosCarrito(producto_id);
        carrito_html += '<li>';
        carrito_html += lista_productos[indice].nombre;
        carrito_html += ' $' + lista_productos[indice].precio;
        carrito_html += '</li>';
    }
    carrito_html += '</ul>';
    carrito_div.innerHTML = carrito_html;
}

function buscar_producto() {
    var input_codigo = document.getElementById('codigo');
    var input_nombre = document.getElementById('nombre');
    var codigo = input_codigo.value;
    var nombre = input_nombre.value;
    var indice = buscar_codigo_en_lista(lista_productos, codigo, nombre);
    if (indice >= 0) {
        imprimir_producto(indice);
    } else {
        alert('No existe');
    }
    return false;
}

function imprimir_producto(i) {
    var producto_div = document.getElementById('lista-productos');
    var producto_html = '<ul>';
    producto_html += '<li>';
    producto_html += lista_productos[i].nombre;
    producto_html += '  $';
    producto_html += lista_productos[i].precio;
    producto_html += ' ';
    producto_html += '<button class="btn btn-success" title="Agregar" onclick="agregarCarrito(' + lista_productos[i].id + ')">';
    producto_html += '+';
    producto_html += '</button>';
    producto_html += '</li>';
    producto_html += '</ul>';
    producto_div.innerHTML = producto_html;
}

function compararProductosCarrito(producto_id) {
    for (var i = 0; i < lista_productos.length; i++) {
        if (lista_productos[i].id == producto_id) {
            return i;
        }
    }
    return -1;
}

function buscar_codigo_en_lista(lista_productos, codigo, nombre) {
    for (var i = 0; i < lista_productos.length; i++) {
        if (lista_productos[i].codigo == codigo) {
            return i;
        }
        if (lista_productos[i].nombre == nombre) {
            return i;
        }
    }
    return -1;
}