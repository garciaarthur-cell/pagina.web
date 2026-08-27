const botoes = document.querySelectorAll("article button");

// cria a contagem individual para cada botão pois com os dois juntos a prog não tava funcionando //
botoes.forEach((botao) => {
    let curtiu = false;

    botao.addEventListener("click", function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent = parseInt(texto.textContent) + 1;
            curtiu = true;
        } else {
            texto.textContent = parseInt(texto.textContent) - 1;
            curtiu = false;
        }
    });
});