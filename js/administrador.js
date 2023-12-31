import Pelicula from "./classPelicula.js";

//variables
const formularioAdminPelis = document.querySelector(
  "#formularioAdministrarPelicula"
);
const codigo = document.getElementById("codigo"),
  titulo = document.getElementById("titulo"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  genero = document.getElementById("genero"),
  modalPelicula = new bootstrap.Modal(document.getElementById("modalPelicula")),
  btnAgregar = document.getElementById("btnAgregar");
//aqui creo una lista vacia para las pelis
const listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculas")) || [];
console.log(listaPeliculas);

//funciones
const crearPelicula = (e) => {
  e.preventDefault();
  // //tomar toda la info del formulario
  // invocar funciones que validan
  //validar esa info
  if (
    validarTexto(titulo.value, 3, 50) &&
    validarTexto(descripcion.value, 3, 350) &&
    validarGenero(genero.value) &&
    validarURLImagen(imagen.value)
  ) {
    //crear el objeto
    const peliNueva = new Pelicula(
      undefined,
      titulo.value,
      descripcion.value,
      imagen.value,
      genero.value
    );
    //guardar lista de peliculas en localstorage
    listaPeliculas.push(peliNueva);
    console.log(listaPeliculas);
    guardarEnLocalStorage();
    limpiarFormularioPelicula();
    //dibujar la peli en la tabla
    crearFila(peliNueva, listaPeliculas.length);
  } else {
    alert("Ingresaste datos erroneos");
  }
};

const abrirModalPelicula = () => {
  modalPelicula.show();
};

const guardarEnLocalStorage = () => {
  localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
};

const limpiarFormularioPelicula = () => {
  formularioAdminPelis.reset();
};

const cargaInicial = () => {
  if (listaPeliculas.length > 0) {
    //dibujar las filas
    listaPeliculas.map((pelicula, posicion) =>
      crearFila(pelicula, posicion + 1)
    );
  } else {
    console.log("No hay pelis para mostrar");
  }
};

const crearFila = (pelicula, fila) => {
  const tablaPelicula = document.querySelector("tbody");
  tablaPelicula.innerHTML += `<tr>
    <th scope="row">${fila}</th>
    <td>${pelicula.titulo}</td>
    <td>${pelicula.descripcion}</td>
    <td>${pelicula.imagen}</td>
    <td>${pelicula.genero}</td>
    <td>
    <button class="btn btn-primary" onclick='verDetalle("${pelicula.codigo}")'>Ver detalle</button>
    <button class="btn btn-warning">Editar</button>
    <button class="btn btn-danger" onclick='borrarPelicula("${pelicula.codigo}")'>Borrar</button>
    </td>
  </tr>`;
};

window.borrarPelicula = (codigo) => {
  Swal.fire({
    title: "¿Esta seguro de borrar la pelicula?",
    text: "No puedes revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //agregar la logica para borrar
      console.log(codigo);
      //buscar en el array el codigo de la peli a borrar
      const posicionPelicula = listaPeliculas.findIndex(
        (pelicula) => pelicula.codigo === codigo
      );
      console.log(posicionPelicula);
      //borrar la peli del array con splice posicion de la peli
      listaPeliculas.splice(posicionPelicula, 1);
      //actualizar el localstorage
      guardarEnLocalStorage();
      //borrar la fila de la tabla
      const tablaPelicula = document.querySelector("tbody");
      console.log(tablaPelicula.children[posicionPelicula]);
      tablaPelicula.removeChild(tablaPelicula.children[posicionPelicula]);
      Swal.fire({
        title: "La pelicula fue borrada",
        text: "La pelicula fue eliminada exitosamente",
        icon: "success",
      });
    }
  });
};

window.verDetalle = (codigo) => {
  console.log(window.location);
  window.location.href =
    window.location.origin + "/pages/detallePelicula.html?codigo=" + codigo;
};

const validarTexto = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    console.log("El texto cumple con la cantidad especificada");
    return true;
  } else {
    console.log("no paso la validacion de cantidad de caracteres");
    return false;
  }
};

const validarGenero = (genero) => {
  if (
    genero === "Accion" ||
    genero === "Fantasia" ||
    genero === "Aventura" ||
    genero === "Comedia" ||
    genero === "Terror"
  ) {
    return true;
  } else {
    return false;
  }
};

const validarURLImagen = (url) =>{
  const patron = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
  // if(true)
  if(patron.test(url)){
    // msjError = 'hgdjhfgdfg'
    return true;
  }else{
    return false
  }
}

//resto de la logica
formularioAdminPelis.addEventListener("submit", crearPelicula);
btnAgregar.addEventListener("click", abrirModalPelicula);

cargaInicial();
