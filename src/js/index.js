const botoes = document.querySelectorAll('.botao');

const persona = document.querySelectorAll(".perso");


botoes.forEach((botao, indice) => {
   botao.addEventListener("click", () =>{ 
  
       const botaoselecionado = document.querySelector(".botao.selecionado");
       botaoselecionado.classList.remove("selecionado");
    botao.classList.add("selecionado")

     const persoselecionado = document.querySelector(".perso.selecionado");
     persoselecionado.classList.remove("selecionado")
    
    persona[indice].classList.add("selecionado")

   });
});