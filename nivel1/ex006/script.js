document.addEventListener("DOMContentLoaded", () =>{
    clicarNoBotaoParaSomar();
});

function clicarNoBotaoParaSomar(){
    let botao = document.getElementById("botao");

    botao.addEventListener("click", (e) =>{
        let span = document.getElementById("span").innerHTML
        let numero1 = Number(prompt("Digite um número:"))
        let numero2 = Number(prompt("Digite outro número:"))

        let resolutado = numero1 + numero2

        document.getElementById("span").innerHTML = (`A soma entre ${numero1} e ${numero2} é igual a ${resolutado}`) 
    });
}