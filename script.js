const botoesLike = document.querySelectorAll("article button");
const video = document.getElementById("vid1");
const btnOpening = document.getElementById("btao");

// tags para botões individuais, pois estavam dando erro quando juntas //
botoesLike.forEach((btn) => {
    btn.addEventListener("click", function () {
        console.log("fui clicado");
        let texto = btn.querySelector("span");
        texto.textContent = parseInt(texto.textContent) + 1;
    });
});

// Função para abrir o vídeo //
function abrir_opening() {
    video.classList.remove("esconder");
    video.play();
    btnOpening.style.display = "none"; // Esconde o botão
}