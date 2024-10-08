document.addEventListener("DOMContentLoaded", ()=>{
    clicarNoBotao();
});

function clicarNoBotao(){
    let botao = document.getElementById("botao");
    botao.addEventListener("click", (e) =>{
        let span = document.getElementById("span").innerHTML;
        let nome = prompt("Qual é o seu nome?");
        document.getElementById("span").innerHTML = (`Olá, ${nome}! É um grande prazer te conhecer! 🖖`);
        
    })
}