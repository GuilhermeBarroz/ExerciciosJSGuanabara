document.addEventListener("DOMContentLoaded", () =>{
    variosCalculos();
});

function variosCalculos(){
    let botao = document.getElementById("botao");
    let span = document.getElementById("span").innerHTML;
    botao.addEventListener("click", (e) =>{
        let numero = Number(prompt("Digite um número:"));
        let raizQuadrada = Math.sqrt(numero);
        let raizCubica = Math.cbrt(numero);
        let elevadoAoQuadrado = Math.pow(numero, 2);
        let elevadoAoCubo = Math.pow(numero, 3);

        document.getElementById("span").innerHTML = (`O número a ser analisado aqui será o ${numero} <hr>` + `<br>` + `O seu valor absoluto é ${numero}` + `<br>` + `A sua parte inteira é ${numero}` +  `<br>` + `O valor inteiro mais próximo é ${numero}` + `<br>`+ `A sua raiz quadrada é ${raizQuadrada}` + `<br>` + `A sua raiz cúbica é ${raizCubica}` +  `<br>` + `O valor de ${numero}² é ${elevadoAoQuadrado}` + `<br>` + `O valor de ${numero}³ é ${elevadoAoCubo}`);

    });
}