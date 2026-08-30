const botoes = document.querySelectorAll("article button");
const video = document.getElementById("vid1");
const botao = document.getElementById("btao");

// cria a contagem individual para cada botão pois com os dois juntos a prog não tava funcionando //
botoes.forEach((botao) => {
    botao.addEventListener("click", function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        texto.textContent = parseInt(texto.textContent) + 1;
    });
});

function abrir_opening() {

    video.classList.remove("esconder");
    video.play();
    // Esconde o botão //
    botao.style.display = "none";
}