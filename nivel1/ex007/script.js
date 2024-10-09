document.addEventListener("DOMContentLoaded", () =>{
    calcularMedia();
});


function calcularMedia(){
    let botao = document.getElementById("botao");
    
    botao.addEventListener("click", (e) => {
        let span = document.getElementById("span").innerHTML
        let nome = prompt("Qual é o nome do aluno?");
        let nota1 = Number(prompt(`Qual a primeira nota de ${nome}?`));
        let nota2 = Number(prompt(`Além de ${nota1} qual a segunda nota de ${nome}?`));

        let soma = nota1 + nota2;

        let media = soma / 2
        
        document.getElementById("span").innerHTML = (`Calculando a média final de ${nome}<br>
            As notas obtidas foram ${nota1} e ${nota2}<br>
            A média final é ${media}`
        )
    })
}