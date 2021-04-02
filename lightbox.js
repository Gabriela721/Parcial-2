//variables
const imagenes = document.querySelectorAll('.imagen');
const lightbox = document.querySelector('#lightbox');
const btnExit = document.querySelector('#exit');
const bosimage = document.querySelector('#boxImage');
const imagenlightbox = document.querySelector('#imagenLightbox');
const nombreImagen = document.querySelector('#nombre');

//Eventos
imagenes.forEach( imagen =>{
    imagen.addEventListener('click', seleccionarImagen);
})
btnExit.addEventListener('click, ocultarLightbox')
//Funciones
function seleccionarImagen(e){
    const imagen = e.target.children[0];
    const src = imagen.getAttribute('src');
    const nombre = imagen.getAttribute('nombre');
    console.log(nombre);
    mostratLightbox(src, nombre);
}

function mostratLightbox (src, nombre){
    lightbox.style.display ='flex';
    setTimeout(()=>{
        lightbox.style.opcacity = '1';
    },10);

    boxImage.style.opcacity = '1';
    boxImage.style.marginTop = '0';
    
    imagenLightbox.setAtribute('src', src);
    nombreImagen.textContent = `Nombre: ${nombre}`;
    }

    function ocultarLightbox(){
        boxImage.style.opcacity= "0";
        setTimeout(() =>{
        lightbox.style.opcacity ="0";
        }, 250);

        setTimeout(()=>{
            lightbox.style.display= 'none';
        }, 500);

    }
