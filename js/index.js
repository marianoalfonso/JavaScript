// simulamos el stock del producto que consultariamos en la DB
// inicializo variables
let stockP1 = 10
let precioP1 = 3200
let stockP2 = 7
let precioP2 = 1700
let stockP3 = 4
let precioP3 = 7300

// funciones
// simula el checkeo de stock
function verificarStock(producto, cantidad) {
    let existencia = false;
    switch (producto) {
        case "1":
            if (cantidad <= stockP1) {
                existencia = true;
            }
            break;
        case "2":
            if (cantidad <= stockP2) {
                existencia = true;
            }
            break;
        case "3":
            if (cantidad <= stockP3) {
                existencia = true;
            }
            break;
        }
    return existencia;
}

// obtiene el stock de un determinado producto recibido como parametro
function obtenerStock(producto) {
    let stock = 0;
    switch (producto) {
        case "1":
            stock = stockP1;
            break;
        case "2":
            stock = stockP2;
            break;
        case "3":
            stock = stockP3;
            break;
        }
    return stock;
}

// simula la obtencion del precio que se haria desde la DB
// IMPORTANTE: se hace con IF ELSE para mostrar su uso en la entrega
function obtenerPrecio(producto) {
    let precio
    if (producto === '1') {
        precio = precioP1
    } else if (producto === '2') {
        precio = precioP2
    } else if (producto === '3') {
        precio = precioP3
    } else {
        precio = 0
    }
    return precio
}

// funcion flecha para calcular el precio con iva de un producto
// reutilizo la funcion para calcular para N unidades
let calcularPrecioIva = (precio, cantidad) => (precio * 1.21) * cantidad;



// obtencion de datos del usuario usando backticks
let producto = prompt(`seleccionar producto: \n
                        1. mouse ($${precioP1})\n
                        2. cable hdmi ($${precioP2})\n
                        3. teclado ($${precioP3})`)

let cantidad = prompt("ingresar cantidad: ")                        

// verificacion de stock
if ((!isNaN) || (producto <= 3)) {
    let stockValidado = verificarStock(producto, cantidad)
    //si no hay stock
    if (!stockValidado) {   
        console.log("no hay stock suficiente del producto seleccionado")
        console.log("listado de stock disponible:")
        // bucle para listar stock
        for (let a = 0; a < 3; a++) {
            let aux = a + 1
            producto = aux.toString();
            let stock = obtenerStock(producto.toString())
            console.log("producto ", a + 1," - stock: ", stock)
        }
    } else {
        // si hay stock
        let precioProductoSeleccionado = obtenerPrecio(producto)
        console.log("precio de lista unitario: $", precioProductoSeleccionado)
        console.log("precio unitario con IVA: $", calcularPrecioIva(precioProductoSeleccionado, 1))
        console.log("precio total x (",cantidad, ") unidades: $", calcularPrecioIva(precioProductoSeleccionado, cantidad))
    }
} else {
    console.log("seleccion no valida")
}


