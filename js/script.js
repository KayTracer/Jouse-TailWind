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

//Carteira
const elemImgCarteira = document.querySelector(".js-img-carteira");
const elemTextoPersonalizacao = document.querySelector(".js-texto-cor");
const elemsBolinha = document.querySelectorAll(".js-bolinhas");

elemsBolinha.forEach((elemBolinha) => {
  elemBolinha.addEventListener("click", () => {
    const corAtual = elemImgCarteira.getAttribute("data-cor-atual");
    const novaCor = elemBolinha.getAttribute("data-texto-cor");

    elemsBolinha.forEach((elem) => {
      elem.classList.remove("border-black");
      elem.classList.add("border-gray-300");
    });

    elemBolinha.classList.add("border-black");
    elemBolinha.classList.remove("border-gray-300");

    elemTextoPersonalizacao.innerText =
      elemBolinha.getAttribute("data-texto-cor");

    elemImgCarteira.src = elemImgCarteira.src.replaceAll(corAtual, novaCor);

    elemImgCarteira.setAttribute("data-cor-atual", novaCor);
  });
});
