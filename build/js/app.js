document.addEventListener('DOMContentLoaded', function() { // Una vez que se cargue o este listo todo el DOM llama a todas las funciones que estan dentro 
    crearGaleria();
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes'); // Seleccionamos la class de .galeria-imagenes
    const cantidadImagenes = 16;

    for(let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG'); // Creamos las imagenes y guardamos cada imagen en la variable imagen
        imagen.src = `src/img/gallery/full/${i}.jpg`; // Asignamos una url a cada imagen
        imagen.alt = 'Galeria de Imagenes';

        galeria.appendChild(imagen);
    }
}