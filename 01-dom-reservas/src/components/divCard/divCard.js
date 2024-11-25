//Crear un div

const divCard = document.createElement("div");
divCard.id = "card";
divCard.classList.add("principal", "card");
app.appendChild(divCard);
// //crear un parrafo
const p = document.createElement("p");
p.textContent = "hola soy un parrafo";
divCard.appendChild(p);

const mensajeBtn = document.createElement("button");
mensajeBtn.textContent = "mostrar mensaje";
divCard.appendChild(mensajeBtn);
