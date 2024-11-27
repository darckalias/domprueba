// //-------funcion constructora----------

export class Producto {
  #precio;

  constructor(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.#precio = precio;
  }

  getPrecio() {
    return this.#precio;
  }

  setPrecio(newPrecio) {
    this.#precio = newPrecio;
  }

  calcularTotal() {
    return this.#precio * this.cantidad;
  }

  obtenerInfo() {
    return `Nombre: ${this.nombre} -- cantidad: ${
      this.cantidad
    } -- precio: ${this.getPrecio()} -- total: ${this.calcularTotal()}`;
  }
}
