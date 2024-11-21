//---------------declaracion de variables-----

//-------------- declaracion de funciones--------

const handlerDobleClickParrafo = (event) => {
  const parrafo = event.target;
};

//--------------- inicio app-------

document.addEventListener("DOMContentLoaded", function () {
  //   document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
  //     //tengo que asignar un evento al click de ese span
  //     return span.addEventListener("click", () => {
  //       const randomColor = Math.floor(Math.random() * 16000).toString(16);
  //       //cambio el estilo inline de color
  //       span.style.backgroundColor = `#${randomColor}`;
  //     });
  //   });
  // });
  // //ejercicio3
  // document.querySelectorAll(".parrafo").forEach((parrafo) => {
  //   parrafo.addEventListener("dblclick", handlerDobleClickParrafo);
  //ejercicio4
  // document.addEventListener("keydown", (event) => {
  //   if (event.key === "Enter") {
  //     document
  //       .querySelectorAll("#contenedorSecundario p")
  //       .forEach((parrafo) => {
  //         parrafo.textContent = "has pulsado enter";
  //       });
  //   }
  // });
  //ejercicio5
  // document.querySelectorAll(".etiqueta").forEach((etiqueta) => {
  //   etiqueta.addEventListener("click", () => {
  //     etiqueta.remove();
  //   });
  // });
  //Ejercicio6
  // document.querySelectorAll("#contenedorSecundario span").forEach((span) => {
  //   span.addEventListener("mouseover", () => {
  //     span.style.color = "lightblue";
  //   });
  // });
  //ejercicio8

  document
    .querySelector("#contenedorPrincipal img")
    .addEventListener("click", () => {
      document.querySelectorAll("#contenedorPrincipal p").forEach((parrafo) => {
        const currentSize = window.getComputedStyle(parrafo).fontSize;
        console.log("currentSize=>", typeof currentSize);
        parrafo.style.fontSize = `${parseInt(currentSize) * 2}px`;
      });
    });
});
