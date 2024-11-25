//Ejercicio:
//1- crear una clase para modelar un sistema de usuarios que pueda iniciar
//sesion y cerrar sesion y actualizar su perfil
//--------------SOlucion con funciones constructoras-----------

import { Producto } from "./components/Producto";

// function Usuario(nombre, email, password) {
//   this.nombre = nombre; //variable de instancia publica
//   this.email = email;
//   let _password = password; //variable de instancia privada

//   this.login = function (email, password) {
//     // quiero evaluar si email y password son correctos
//     if (this.email === email && this._password === password) {
//       return `Bienvenido ${this.nombre}`;
//     }
//     return "Email o password incorrecos";
//   };

//   this.updateEmail = function (newEmail) {
//     this.email = newEmail;
//     return `Email actualizado a ${this.email}`;
//   };
// }

// //crear un usuario

// const usuario1 = new Usuario("juan", "juan@gmail.com", "123456");

// //------lo mostramos en el dom-------

// const app = document.getElementById("app");

// function renderUsuario() {
//   //funcion que pinta en el app el usuario
//   app.innerHTML = `
//     <h2>Usuario: ${usuario1.nombre}</h2>
//     <p>Email: ${usuario1.email}</p>
//     <button id="btnLogin">Login</button>
//   `;

//   const btnLogin = document.getElementById("btnLogin");
//   btnLogin.addEventListener("click", () => {
//     alert(usuario1.login("pepe@gmail.com", "123456"));
//   });
// }

// //-------solucion con clases-----------

// class UsuarioClases {
//   // las variables privadas se declaran anteponiendo una almohadia #al nombre

//   #password;
//   constructor(nombre, email, password) {
//     this.nombre = nombre;
//     this.email = this.email;
//     this.#password = password;
//   }

//   login(email, password) {
//     if (this.email === email && this.#password === password) {
//       return `Bienvenido ${this.nombre}`;
//     }
//     return "Email o password incorrectos";
//   }

//   updateEmail(newEmail) {
//     this.email = newEmail;
//     return `Email actualizado a ${this.email}`;
//   }
// }

// const usuario2 = new UsuarioClases("pepe", "pepe@gmail.com", "123456");

//-----------Ejercicio2
// implementar un modelo de producto con funciones y constroc clases  que
// permitan obtener informacion de producto actualizar el stock debiendo
// registrar nombre,precio,stock

//-------- solucion ejericcio2----------------

//array de productos

const productos = [
  new Producto("portatil", 500, 10),
  new Producto("movil", 1200, 20),
  new Producto("tablet", 300, 5),
];

// renderizamos los productos
const app = document.getElementById("app");

app.innerHTML = `
  <h2>Gestion de productos</h2>
  ${productos.map((producto, index) => {
    return `
          <li>${producto.obtenerInfo()}
          <button class="btn-actualizar-stock" data-index="${index}">Actualizar Stock</button>
          </li>
      `;
  })}
`;

//escuchamos el evento click en los botones de atuzli

document.querySelectorAll(".btn-actualizar-stock").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("actualizar stock");
  });
});
