import Pelicula from "./classPelicula.js";

//variables
const formularioAdminPelis = document.querySelector('#formularioAdministrarPelicula');

//funciones
const crearPelicula = () =>{
    //tomar toda la info del formulario


    
    //crear el objeto
    const peliNueva = new Pelicula(1, 'batman', 'djhfskdjf', 'ashdgahjs', 'Accion');
    //guardar lista de peliculas en localstorage
}


//resto de la logica
formularioAdminPelis.addEventListener('submit', crearPelicula)