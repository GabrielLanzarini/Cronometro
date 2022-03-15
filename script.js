var horaH1 = document.getElementById("hor");
var minutoH1 = document.getElementById("min");
var segundoH1 = document.getElementById("seg");


document.getElementById('butIniciar').addEventListener('click', function(){
   
var iniciaRrelogio= setInterval(relogio, 100);
})

document.getElementById('butParar').addEventListener('click', function(){
    clearInterval(iniciaRrelogio)
})

var hor = 0;
var min = 0;
var seg = 0;


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

