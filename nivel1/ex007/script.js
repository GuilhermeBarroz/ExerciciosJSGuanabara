document.addEventListener("DOMContentLoaded", () =>{
    calcularMedia();
});


function calcularMedia(){
    let botao = document.getElementById("botao");
    
    botao.addEventListener("click", (e) => {
        let nome = prompt("Qual é o nome do aluno?");
        let nota1 = Number(prompt(`Qual a primeira nota de ${nome}?`));
        let nota2 = Number(prompt(`Além de ${nota1} qual a segunda nota de ${nome}?`));

        let soma = nota1 + nota2;

        let media = soma / 2
        
        console.log(nota1, nota2, soma, media)
    })
}