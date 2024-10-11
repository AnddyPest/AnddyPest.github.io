function inicializarPagina() {      
    actualizarImagenYEstilos();
}
let rutas = ["imagenes/williams2.jpg", "imagenes/MCLAREN.jpg", "imagenes/redbull1.jpg", "imagenes/ferrari2.jpg"];
let indice = 0;
let imagen = document.getElementById("imagen");
let botonIzquierdo = document.getElementById("botonIzquierdo");
let botonDerecho = document.getElementById("botonDerecho");

function cambiarImagenIzquierda() {
    indice -= 1;
    if (indice < 0) {
        indice = 3;
    }
    actualizarImagenYEstilos();
}

function cambiarImagenDerecha() {
    indice += 1;
    if (indice > 3) {
        indice = 0;
    }
    actualizarImagenYEstilos();
}

function actualizarImagenYEstilos() {
    imagen.setAttribute("src", rutas[indice]);

   
    imagen.classList.remove("imagenWilliams", "imagenFerrari", "imagenMcLaren", "imagenRedBull");
    botonIzquierdo.classList.remove("botonWilliams", "botonFerrari", "botonMcLaren", "botonRedBull");
    botonDerecho.classList.remove("botonWilliams", "botonFerrari", "botonMcLaren", "botonRedBull");

    
    switch (indice) {
        case 0:
            imagen.classList.add("imagenWilliams");
            botonIzquierdo.classList.add("botonWilliams");
            botonDerecho.classList.add("botonWilliams");
            break;
        case 1:
            imagen.classList.add("imagenMcLaren");
            botonIzquierdo.classList.add("botonMcLaren");
            botonDerecho.classList.add("botonMcLaren");
            break;
        case 2:
            imagen.classList.add("imagenRedBull");
            botonIzquierdo.classList.add("botonRedBull");
            botonDerecho.classList.add("botonRedBull");
            break;
        case 3:
            imagen.classList.add("imagenFerrari");
            botonIzquierdo.classList.add("botonFerrari");
            botonDerecho.classList.add("botonFerrari");
            break;
        
        
    }
}
