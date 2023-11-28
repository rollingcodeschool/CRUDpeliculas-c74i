import Pelicula from "./classPelicula.js";

//variables
const formularioAdminPelis = document.querySelector('#formularioAdministrarPelicula');
const codigo = document.getElementById("codigo"),
  titulo = document.getElementById("titulo"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  genero = document.getElementById("genero"),
  modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'));

  modalPelicula.show();


//funciones
const crearPelicula = () =>{
    //tomar toda la info del formulario


    
    //crear el objeto
    const peliNueva = new Pelicula(1, 'batman', 'djhfskdjf', 'ashdgahjs', 'Accion');
    //guardar lista de peliculas en localstorage
}


//resto de la logica
formularioAdminPelis.addEventListener('submit', crearPelicula)