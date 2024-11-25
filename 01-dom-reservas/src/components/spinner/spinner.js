const createSpinner = () => {
  const spinner = document.createElement("div");
  spinner.id = "spinner";
  spinner.classList.add("hidden", "spinner");
  spinner.style.color = "red";
  spinner.textContent = "cargando...";
  spinner.style.fontSize = "4rem";
  spinner.style.textAlign = "center";
  const app = document.getElementById("app");
  app.appendChild(spinner);
};

const showSpinner = () => {
  const spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.classList.remove("hidden");
  } else {
    console.warn(
      "Spinner no encontrado. Asegúrate de crearlo con createSpinner()."
    );
  }
};

const hideSpinner = () => {
  const spinner = document.getElementById("spinner");
  if (spinner) {
    spinner.classList.add("hidden");
  } else {
    console.warn(
      "Spinner no encontrado. Asegúrate de crearlo con createSpinner()."
    );
  }
};

createSpinner();
showSpinner(); // Mostrar el spinner
setTimeout(hideSpinner, 3000);
