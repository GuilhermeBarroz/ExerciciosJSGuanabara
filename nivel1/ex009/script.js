document.addEventListener("DOMContentLoaded", () =>{
    contadorDeCliques();
    zerarCliques();
});


let contador = 0

function contadorDeCliques(){
  let botaoContar = document.getElementById("botaoContador");
  botaoContar.addEventListener("click", (e) =>{
    contador ++
    document.getElementById("span").innerHTML = (`O contador está com ${contador} cliques.`)
  })
  
}

function zerarCliques(){
    let botaoZerar = document.getElementById("ZerarContador");
    botaoZerar.addEventListener("click", (e) =>{
        contador = 0
        document.getElementById("span").innerHTML = (`O contador está com ${contador} cliques.`)
    })
}