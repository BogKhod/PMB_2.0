const img = [
    'https://picsum.photos/1920/1080/?blur=1',
    'https://picsum.photos/1920/1080/?blur=2',
    'https://picsum.photos/1920/1080/?blur=3',
    'https://picsum.photos/1920/1080/?blur=4',
    'https://picsum.photos/1920/1080/?blur=5'
];

let fondoHeader = document.getElementById('header');    // variable que almacena el ID 'header' mediante el DOM, para mostrar las imágenes en el HTML
let posicion = 0;   // variable para recorrer el array img
let intervalo;  // variable para almacenar la función setInterval()
const t = 5000; // tiempo entre cada imagen

// ? función para pasar de imagen a imagen de a 1 a la vez:
function pasarFoto() {
    if (posicion >= img.length - 1) {
        posicion = 0;
    } else {
        posicion++;
    }
}

// ? función que llama a la función carrusel() cada t ms (en otras palabras es la que permite el bucle):
function autoplay() {
    intervalo = setInterval(carrusel, t);
}

// ? función que renderiza como tal las imágenes en el HTML:
function carrusel() {
    console.log(posicion);
    fondoHeader.style.backgroundImage = `url(${img[posicion]})`;
    pasarFoto();
}

autoplay();

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

// SKOROKHOD