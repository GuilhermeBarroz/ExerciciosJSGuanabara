document.addEventListener("DOMContentLoaded", () =>{
    clicarNoBotao();
});

function clicarNoBotao(){
    let botao = document.getElementById("botao");
    botao.addEventListener("click", (e) =>{
        alert("Você clicou no botão");
    });
}