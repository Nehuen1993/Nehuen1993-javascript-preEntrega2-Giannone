let productos = 
[
    {
        id: 10,
        nombre: "Disco de freno",
        clase: "frenos",
        cantidad: 0 ,
        precio: 300
    },
    {
        id: 11,
        nombre: "Pastilla de freno",
        clase: "frenos",
        cantidad: 0 ,
        precio: 200
    },
    {
        id: 12,
        nombre: "Liquido de freno",
        clase: "frenos",
        cantidad: 0 ,
        precio: 100
    },
    {
        id: 20,
        nombre: "Amortiguados",
        clase: "suspencion",
        cantidad: 0 ,
        precio: 425
    },
    {
        id: 21,
        nombre: "Espirales",
        clase: "suspencion",
        cantidad: 0 ,
        precio: 250
    },
    {
        id: 22,
        nombre: "Bieleta",
        clase: "suspencion",
        cantidad: 0 ,
        precio: 175
    },
    {
        id: 30,
        nombre: "Aceite 20w-50",
        clase: "motor",
        cantidad: 0 ,
        precio: 315
    },
    {
        id: 31,
        nombre: "Filtro de aceite",
        clase: "motor",
        cantidad: 0 ,
        precio: 130
    },
    {
        id: 32,
        nombre: "Filtro de aire",
        clase: "motor",
        cantidad: 0 ,
        precio: 50
    }
]

let precio = 0
let fin = 0
let productosFiltrados = ""
let carrito = []

function tarjeta(c) {
    let precioTarjeta =  c * 1.1
    precio = precioTarjeta
}
    
function efectivo(a, b) {
let precioEfectivo = a * b
precio = precioEfectivo

}
function listaProductos(productos) {
    return productos.map(producto => {return `Nombre: ${producto.nombre} Precio: ${producto.precio} ID: ${producto.id}`}).join("\n")
    
}


while (fin != 9) {
let menu = Number(prompt("Bienvenido! Por favor ingrese el numero de lo que necesite hacer \n 1-Ir de compras \n 2-Ver carrito"))   
 if (menu == 1) {
    let clase = prompt("Por favor ingrese la clase de repusto que necesite \n Frenos \n Suspención \n Motor").toLowerCase()
    let claseFiltrada = productos.filter (producto => producto.clase === clase)
    
    if (claseFiltrada.length == 0) {
        alert("el valor ingresado no es correcto recarga la pagina por favor")
        break
    } 
    else {
        let idProducto = Number(prompt("Escriba el ID del producto que desea comprar \n" + listaProductos(claseFiltrada)))         
        let productoSeleccionado = claseFiltrada.find(producto => producto.id === idProducto)
            if (productoSeleccionado){
            carrito.push(productoSeleccionado)
            alert("se agrego el producto selecionado al carrito")
            }
            else {
                alert("el valor ingresado no es correcto recarga la pagina por favor")
                break}
        }
}
else if (menu == 2){
    alert("Los productos de tu carrito son: \n" + listaProductos(carrito))
}
else {
    alert("el valor ingresado no es correcto recarga la pagina por favor")
    break}

fin = prompt("Si queres terminar la compra preciona 9 \n Si queres seguir comprando toca 0" )
    if(fin == 9){
        break
    }
    else if (fin !=0)
    {
        alert("el valor ingresado no es correcto recarga la pagina por favor")
        break
    }   
}
alert("Muchas Gracias!")