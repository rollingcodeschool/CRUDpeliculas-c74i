console.log(window.location.search)

const pametroURL = new URLSearchParams(window.location.search);
const codigoPelicula = pametroURL.get('codigo');

console.log(codigoPelicula);

//traigo el arreglo de peliculas del localstorage
//buscar la pelicula con find

//usando el DOM cargar los datos de la peli buscada