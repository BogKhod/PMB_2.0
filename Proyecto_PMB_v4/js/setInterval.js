// let identificadorIntervaloDeTiempo;

// function repetirCadaSegundo() {
//     identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
// }

// function mandarMensaje() {
//     console.log("Ha pasado 1 segundo.");
// }

// repetirCadaSegundo();

// -----------------------------

const cosas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let posicion = 0;
let intervalo;
const t = 1000;

function pasarFoto() {
    if (posicion >= cosas.length - 1) {
        posicion = 0;
    } else {
        posicion++;
    }
}

function autoplay() {
    intervalo = setInterval(carrusel, t);
}

function carrusel() {
    console.log(posicion);
    pasarFoto();
}

autoplay();