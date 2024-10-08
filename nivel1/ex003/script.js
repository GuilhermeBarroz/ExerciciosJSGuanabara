document.addEventListener("DOMContentLoaded",() =>{
    clicarNoBotao()
})

function clicarNoBotao(){
    let botao = document.getElementById("botao");
    
    botao.addEventListener("click", (e) =>{
        let nome = prompt("Qual o seu nome?");
        alert(`Olá, ${nome}! é um prazer te conhecer.`)
    })
}