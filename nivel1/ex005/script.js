document.addEventListener("DOMContentLoaded", () =>{
    clicarNoBotaoParaCalcular();
});

alert("Bem vindo ao meu site!")

function clicarNoBotaoParaCalcular(){
    let botao = document.getElementById("botao");
    botao.addEventListener("click", (e) =>{
        let span = document.getElementById("span").innerHTML;
        let numero = prompt("Digite um número:");
        let dobro = numero * 2;
        let metade = numero / 2;

        if(numero == ""){
            document.getElementById("span").innerHTML= ("Número não pode ser vazio")
        }else{
            document.getElementById("span").innerHTML = (`O dobro de ${numero} é ${dobro} e a metade é ${metade}`);
        }

    })
}