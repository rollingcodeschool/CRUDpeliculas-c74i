export default class Pelicula{
    #codigo;
    #titulo;
    #descripcion;
    #imagen;
    #genero;
    constructor(codigo = 1, titulo, descripcion, imagen, genero){
        this.#codigo = codigo;
        this.#titulo = titulo;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#genero = genero;
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(newCodigo){
        this.#codigo = newCodigo
    }

    get titulo(){
        return this.#titulo;
    }

    set titulo(newTit){
        this.#titulo = newTit;
    }

    get descripcion(){
        return this.#descripcion;
    }

    set descripcion(newDescrip){
        this.#descripcion = newDescrip;
    }

    get imagen(){
        return this.#imagen;
    }

    set imagen(newImg){
        this.#imagen = newImg;
    }

    get genero(){
        return this.#genero;
    }

    set genero(gen){
        this.#genero = gen;
    }

    //para que funcione JSON.stringify
    toJSON(){
        return {
            codigo: this.codigo,
            titulo: this.titulo,
            descripcion: this.descripcion,
            imagen: this.imagen,
            genero: this.genero,
        }
    }
}