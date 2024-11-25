document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  //crear un elemento h1
  const elementoh1 = document.createElement("h1");
  elementoh1.textContent = "hello world";
  app.appendChild(elementoh1);
});
