import Carrito from "./components/Carrito";

// Ejercicio:
// gestion dinamica de un carrito de la compra mediante con funciones constructoras
// Objetivo:
// agregar producto al carrito guardando nombre,cantidad y precio
// editar producto permitiendo cambiar la cantidad
//eliminar producto en el carrito
// actualizar apagar dinamicamente
const carrito = new Carrito();
//cargamos los datos de localstorage al carrito
carrito.cargarLocalStorage();

function pintarInterfazWeb() {
  const app = document.getElementById("app");
  function pintarCarrito() {
    const lista = document.getElementById("lista-productos");
    lista.innerHTML = carrito.productos
      .map((producto, index) => {
        // retornar pintar un li)
        return `<li data-id="${index}">${producto.obtenerInfo()}
      <button class="btn-editar" data-id="${index}">Editar</button>
      <button class="btn-borrar" data-id="${index}">Borrar</button>
      </li>`;
      })
      .join("");

    //calcular el totat
  }

  const handlerSubmit = (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre-producto").value.trim();
    const cantidad = Number(document.querySelector("#cantidad-producto").value);
    const precio = Number(document.querySelector("#precio-producto").value);
    // validaciones del formulario basicas
    if (!nombre || cantidad < 0 || precio < 0) {
      alert("Debes de insertar valores correctos");
    }
    //añadimos el producto nombre, cantidad y precio a un producto del carrito
    carrito.agregarProducto(nombre, cantidad, precio);
    pintarCarrito();
  };

  const opcionesProducto = (event) => {
    // cuando pulso el click obtengo el componente
    //target es el componente donde he hecho clicl o lo que sea
    const indice = Number(event.target.dataset.id);
    //event.target.classList.contains();
    if (event.target.classList.contains("btn-borrar")) {
      carrito.borrarProducto(indice);
      pintarCarrito();
    }

    if (event.target.classList.contains("btn-editar")) {
      alert("voy a editar");
    }
  };

  app.innerHTML = `
    <h1>Carrito de la compra</h1>
    <form id="form-producto">
      <input id="nombre-producto" type="text" placeholder="Nombre del producto">
    
      <input id="cantidad-producto" type="number" placeholder="Cantidad">
     
      <input id="precio-producto" type="number" placeholder="Precio">
    
      <button type="submit">Agregar Producto</button>
    </form>

    <div id="lista-productos">

    </div>
  `;
  document
    .getElementById("form-producto")
    .addEventListener("submit", handlerSubmit);
  document
    .getElementById("lista-productos")
    .addEventListener("click", opcionesProducto);
}

// ---------------inicio de la aplicacion---------

pintarInterfazWeb();
