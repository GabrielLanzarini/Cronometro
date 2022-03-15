var horaH1 = document.getElementById("hor");
var minutoH1 = document.getElementById("min");
var segundoH1 = document.getElementById("seg");

var hor = 00;
var min = 00;
var seg = 00;

var intervalo = setInterval(relogio, 10)
clearInterval(intervalo);

document.getElementById('butIniciar').addEventListener('click', function(){
    intervalo = setInterval(relogio, 10)
})

document.getElementById('butParar').addEventListener('click', function(){
    clearInterval(intervalo);
})

document.getElementById('butReiniciar').addEventListener('click', function(){
    hor = 0;
    min = 0;
    seg = 0;
    segundoH1.textContent = seg;
    minutoH1.textContent = min;
    horaH1.textContent = hor;
})



function relogio(){
    console.log(seg)
    seg += 1;
    if(seg == 60){
        seg = 0;
        min += 1;
    } else if (min == 60){
        hor +=1
        min = 0
    }
    segundoH1.textContent = seg;
    minutoH1.textContent = min;
    horaH1.textContent = hor;
}

