const ini = () => {};

//-------------Inicio app------------
document.addEventListener("DOMContentLoaded", () => {
  //selecciona el elemento h1 por su id ejercicio1
  const elementDiv = document.getElementById("contenedorPrincipal");
  const elementH1 = elementDiv.querySelector("h1");
  console.log(elementH1);
  console.log(elementH1.textContent);
  const elementH1v2 = document
    .getElementById("contenedorPrincipal")
    .querySelector("h1");
  console.log(elementH1v2);
});

//ejercicio2
const parrafosdiv = document.querySelectorAll("#contenedorPrincipal .parrafo");

console.log(parrafosdiv);

//ejercicio3

const elementImg = document.querySelector('img[src = "imagen.png"]');
console.log(elementImg);

// ejercicio4

const elementsSpan = document.querySelectorAll("#contenedorSecundario span");

console.log(elementsSpan);

//ejercicio5

const primerParrafoImportante = document.querySelector(".parrafo.importante");
console.log(primerParrafoImportante);

//ejercicio6

const parrafosContenedorPrincipal = document.querySelectorAll(
  " #contenedorPrincipal p"
);

console.log(parrafosContenedorPrincipal);

//ejercicio7

const elementosConAtributos = document.querySelectorAll(
  "[data-atributo='valor1']"
);

console.log(elementosConAtributos);

//ejercicio8

const parrafosImportante = document.querySelectorAll(".parrafo.importante");
parrafosImportante.length > 1 ? console.log(parrafosImportante) : null;

//ejercicio 9
const spanDentroContenedores = document.querySelectorAll(
  "#contenedorSecundario span"
);

console.log(spanDentroContenedores);

//ejercicio10

const tercerParrafo = document.querySelector("#contenedorPrincipal .parrafo");

tercerParrafo.length > 2 ? console.log(tercerParrafo) : null;

//ejercicio2 relacion 2

document.querySelectorAll(".parrafo").forEach((parrafo) => {
  parrafo.addEventListener("dblclick", () => {
    alert(parrafo.textContent);
  });
});
