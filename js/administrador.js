import Pelicula from "./classPelicula.js";

//variables
const formularioAdminPelis = document.querySelector('#formularioAdministrarPelicula');
const codigo = document.getElementById("codigo"),
  titulo = document.getElementById("titulo"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  genero = document.getElementById("genero"),
  modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula')),
  btnAgregar = document.getElementById('btnAgregar');
//aqui creo una lista vacia para las pelis
  const listaPeliculas = [];


//funciones
const crearPelicula = (e) =>{
    e.preventDefault();
    //tomar toda la info del formulario
    //validar esa info
    //crear el objeto
    const peliNueva = new Pelicula(undefined, titulo.value, descripcion.value, imagen.value, genero.value);
    //guardar lista de peliculas en localstorage
    listaPeliculas.push(peliNueva);
    console.log(listaPeliculas);
    guardarEnLocalStorage();
    limpiarFormularioPelicula();
}

const abrirModalPelicula = ()=>{
    modalPelicula.show();
}

const guardarEnLocalStorage = () =>{
    localStorage.setItem('listaPeliculas', JSON.stringify(listaPeliculas));
}

const limpiarFormularioPelicula = ()=>{
    formularioAdminPelis.reset();
}


//resto de la logica
formularioAdminPelis.addEventListener('submit', crearPelicula)
btnAgregar.addEventListener('click', abrirModalPelicula)