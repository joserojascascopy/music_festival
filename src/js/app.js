document.addEventListener('DOMContentLoaded', function() { // Una vez que se cargue o este listo todo el DOM llama a todas las funciones que estan dentro 
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    document.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1) { // Para "medir" desde arriba al hacer scroll (coordenadas negativas si ya no muestra en el html)
            header.classList.add('fixed')
        }else {
            header.classList.remove('fixed')
        }
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes'); // Seleccionamos la class de .galeria-imagenes
    const cantidadImagenes = 16;

    for(let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG'); // Creamos las imagenes y guardamos cada imagen en la variable imagen
        imagen.src = `src/img/gallery/full/${i}.jpg`; // Asignamos una url a cada imagen
        imagen.alt = 'Galeria de Imagenes';

        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen); // Agregamos cada imagen a la galeria (a la clase .galeria-imagenes)
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG'); // Creamos las imagenes y guardamos cada imagen en la variable imagen
    imagen.src = `src/img/gallery/full/${i}.jpg`; // Asignamos una url a cada imagen
    imagen.alt = 'Galeria de Imagenes';


    // Generar Modal (Ventana emergente)
    const modal = document.createElement('DIV');
    modal.classList.add('modal'); // Generamos el div y le agg la class modal
    modal.onclick = cerrarModal // onclick no tiene function porque no le vamos a pasar un argumento
    modal.appendChild(imagen);

    // Botón cerrar modal

    const botonCerrarModal = document.createElement('BUTTON');
    botonCerrarModal.textContent = 'X'
    botonCerrarModal.classList.add('btn-cerrar');
    botonCerrarModal.onclick = cerrarModal

    modal.appendChild(botonCerrarModal);
   
    // Agregar al DOM
    const body = document.querySelector('body'); // Seleccionamos el body
    body.classList.add('overflow-hidden'); // Cuando abrimos la imagen de la galeria, bloqueamos el scroll
    body.appendChild(modal); // Agg modal al body
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out');

    setTimeout(() => {
        modal?.remove(); // Si existe modal?, removemos 
        const body = document.querySelector('body'); // Seleccionamos el body
        body.classList.remove('overflow-hidden'); // Cuando abrimos la imagen de la galeria, bloqueamos el scroll
    }, 500);
}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.navegacion-principal a');

      let actual = '';
      sections.forEach( section => {

        const sectionTop = section.offsetTop; // Distancia superior del section con su elemento padre (en este caso el body)
        const sectionHeigth = section.clientHeight; // Medida de las section en px

        if(window.scrollY >= (sectionTop - sectionHeigth / 3)) {
           actual = section.id;
        }
      })

      navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + actual) {
            link.classList.add('active');
        }
      })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({behavior: 'smooth'});
        })
    })
}