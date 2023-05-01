function saludo() {
    alert("Bienvenido a J&R Impresiones 3D");
}

function compraFinalizada() {
    console.log(`${nombre},gracias por su compra`);
}

saludo();

let nombre = prompt("Ingrese su nombre");

const servicio = 1500;

let inventario = prompt(
    `${nombre} selecciona que tipo de producto desea agregar a su carrito:
    "mates"
    "llaveros"
    "figuras"`
);

switch (inventario) {
    case "mates":
        alert("Los mates tienen un valor de $1500");
        break;

    case "llaveros":
        alert("Los llaveros tienen un valor de $1500");
        break;

    case "figuras":
        alert("Las figuras tienen un valor de $1500");
        break;
}

let medioDePago =
    prompt(`Seleccione como desea abonar detallando 1 para abonar en efectivo o 2 para abonar con tarjeta de crédito:
1: efectivo
2: tarjeta de crédito (Recuerde que tiene un 20% de recargo`);

if (medioDePago == 1) {
    alert(`El total de su compra es de $1500`);
} else {
    alert(`El subtotal de su compra es de ` + ((servicio * 20) / 100 + 1500));
}

let continuarCompra = prompt(`¿Desea agregar algun producto más al carrito?
si 
no`);

while (continuarCompra == "si") {
    alert(`Volver al menú de productos`);
}
alert(`Finalizar compra`);

compraFinalizada();