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
  const listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || [];
  console.log(listaPeliculas)


//funciones
const crearPelicula = (e) =>{
    e.preventDefault();
    // //tomar toda la info del formulario
    // invocar funciones que validan
    //validar esa info
    //crear el objeto
    const peliNueva = new Pelicula(undefined, titulo.value, descripcion.value, imagen.value, genero.value);
    //guardar lista de peliculas en localstorage
    listaPeliculas.push(peliNueva);
    console.log(listaPeliculas);
    guardarEnLocalStorage();
    limpiarFormularioPelicula();
    //dibujar la peli en la tabla
    crearFila(peliNueva, listaPeliculas.length);
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

const cargaInicial = ()=>{
    if(listaPeliculas.length > 0){
        //dibujar las filas
        listaPeliculas.map((pelicula, posicion)=> crearFila(pelicula, posicion + 1))
    }else{
        console.log('No hay pelis para mostrar')
    }
}

const crearFila = (pelicula, fila)=> {
    const tablaPelicula = document.querySelector('tbody');
    tablaPelicula.innerHTML += `<tr>
    <th scope="row">${fila}</th>
    <td>${pelicula.titulo}</td>
    <td>${pelicula.descripcion}</td>
    <td>${pelicula.imagen}</td>
    <td>${pelicula.genero}</td>
    <td><button class="btn btn-warning">Editar</button><button class="btn btn-danger">Borrar</button></td>
  </tr>`
}


//resto de la logica
formularioAdminPelis.addEventListener('submit', crearPelicula)
btnAgregar.addEventListener('click', abrirModalPelicula)

cargaInicial();