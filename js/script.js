const elemHeader = document.querySelector("header");
const elemMenu = document.querySelector(".js-menu");

elemMenu.addEventListener("click", () => {
  const barras = elemMenu.querySelectorAll("div");
  const barraCima = barras[0];
  const barraBaixo = barras[1];

  elemHeader.classList.toggle("grid-rows-[3.75rem_1fr]");
  elemHeader.classList.toggle("h-screen");

  barraCima.classList.toggle("rotate-45");
  barraCima.classList.toggle("translate-y-[0.28125rem]");

  barraBaixo.classList.toggle("-rotate-45");
  barraBaixo.classList.toggle("-translate-y-[0.28125rem]");
});
