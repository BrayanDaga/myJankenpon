const btnPiedra = document.querySelector("#btnPiedra");
const btnPapel = document.querySelector("#btnPapel");
const btnTijera = document.querySelector("#btnTijera");
const resultado = document.querySelector("#resultado");
const optionsCPU = document.querySelectorAll(".opCPU");
const youScorelabel = document.querySelector("#youScore");
const cpuScorelabel = document.querySelector("#cpuScore");

let myScore = 0;
let cpuScore = 0;

btnPiedra.addEventListener("click", function(){    
    jugar(0);
});
btnPapel.addEventListener("click", function(){
    jugar(1);

});
btnTijera.addEventListener("click", function(){
    jugar(2);
});

function jugar(myOption){
    


    let stResult = enfrentar(myOption, generarOpCPU());
    if(stResult == 'VICTORIA'){
        myScore = myScore+1;
    }else if(stResult == 'DERROTA' ){
        cpuScore = cpuScore + 1;
    }
    resultado.innerText = stResult;
    youScorelabel.innerText = myScore;
    cpuScorelabel.innerText = cpuScore;
}


function generarOpCPU(){
    const opCPU = Math.floor(Math.random() * 3);
    addImageCPU(opCPU);
    return opCPU;
}

function addImageCPU(opCPU){
    for (let i = 0; i < optionsCPU.length; i++) {
        const optionCPU = optionsCPU[i];
        optionCPU.innerHTML = '';
    }
    if(opCPU == 0){
        optionsCPU[0].innerHTML = `<img src="img/piedra.png" alt="">`;
    }
    else if(opCPU == 1){
        optionsCPU[1].innerHTML = `<img src="img/papel.png" alt="">`;

    }else{
        optionsCPU[2].innerHTML = `<img src="img/tijera.png" alt="">`;
    }
}

function enfrentar(myOption, opCPU){
    if(myOption == 0){
        if(opCPU == 1){
            msg = "DERROTA";
        }
        else if(opCPU == 2){
            msg = "VICTORIA";
        }else{
            msg = "EMPATE";
        }
    }
    else if(myOption == 1){
        if(opCPU == 2){
            msg = "DERROTA";
        }
        else if(opCPU == 0){
            msg = "VICTORIA";
        }else{
            msg = "EMPATE";
        }
    }
    else{
        if(opCPU == 0){
            msg = "DERROTA";
        }
        else if(opCPU == 1){
            msg = "VICTORIA";
        }else{
            msg = "EMPATE";
        }
    }
    return msg;
}