//--------------funcion constructora-------------

export function Producto(nombre, precio, stock) {
  let _nombre = nombre;
  let _precio = precio;
  let _stock = stock;

  //setter y getter

  this.setNombre = function (nombre) {
    _nombre = nombre;
  };

  this.getNombre = function () {
    return _nombre;
  };

  this.setPrecio = function () {
    _precio = precio;
  };

  this.getPrecio = function () {
    return _precio;
  };

  this.setStock = function () {
    _stock = stock;
  };
  this.getStock = function () {
    return _stock;
  };

  this.actualizarStock = function (cantidad) {
    _stock += cantidad;
    return `Stock actualizado a ${this.getStock()}`;
  };

  this.obtenerInfo = function () {
    return `Nombre: ${this.getNombre()} Precio: ${this.getPrecio()} stock: ${this.getStock()}`;
  };
}
