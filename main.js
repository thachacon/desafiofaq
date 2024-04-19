let pergunta1 = window.document.getElementById("question1")
let resposta1 = window.document.getElementById("answer1")
let esconder1 = window.document.getElementById("question1none")
let frase1 = window.document.getElementById("enunciado1")

frase1.addEventListener("click", enunciado1)

function sumirconteudo(resposta1) {
    resposta1.style.display = "block"
    pergunta1.style.display = "none"
    esconder1.style.display = "block"
}

function aparecerconteudo(resposta1) {
    resposta1.style.display = "none"
    pergunta1.style.display = "block"
    esconder1.style.display = "none"
}

function fAbreGuias(ul) {
    if (resposta1.style.display = "none") {
        resposta1.style.display = "block" ;
} else {
    resposta1.style.display = "none";
}
}