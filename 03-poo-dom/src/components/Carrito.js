import { Producto } from "./Producto";

export default class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(nombre, cantidad, precio) {
    this.productos.push(new Producto(nombre, cantidad, precio));
    // lo guardamos tambien en el localStorage
    this.guardarLocalStorage();
  }
  /**
   *
   * @param {Numver} index
   * @return void
   */
  borrarProducto(index) {
    this.productos.splice(index, 1);
    // lo actualizo o modifico en localStorage
    this.guardarLocalStorage();
  }

  editarProducto(index, newCantidad) {
    if (newCantidad > 0) {
      this.productos[index].cantidad = newCantidad;
      //actualizar el localStorage
      this.guardarLocalStorage();
    }
  }

  calcularTotalCarrito() {
    return this.productos.reduce(
      (acc, producto) => total + producto.calcularTotal(),
      0
    );
  }

  guardarLocalStorage() {
    // setItem("clave","valor") // -> para guardar hay stringui....
    localStorage.setItem("carrito", JSON.stringify(this.productos));
  }

  cargarLocalStorage() {
    //localStorage.hasOwnProperty("carrito")
    const datoscarrito = JSON.parse(localStorage.getItem("carrito"));
    if (datoscarrito) {
      this.productos = datoscarrito.map(
        (producto) =>
          new Producto(producto.nombre, producto.cantidad, producto.precio)
      );
    }
  }
}
