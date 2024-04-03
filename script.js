
var timer = 60;
var score = 0;
var hitrn = 0;  

// JISPE click kar ro ge wo element par event raise hoga , event listener naa milne par event element par  dhundhega , waha bhi maa milne par event parent ke parent ke parent par listenar dhundega


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makebubble(){

var clutter = "";
for(var i=1; i<=180; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

// var timer = 60;
function runTime() {

      var timerint = setInterval(function () {

        if(timer > 0){
           timer--; 
           document.querySelector("#timerval").textContent = timer;
        }
         else{
                 clearInterval(timerint);
                 document.querySelector("#pdtm").innerHTML ="  ";
         }
        
      }, 1000);
}


// document.querySelector("#pdtm").addEventListener("click", function(dets){
// var clickednum = ( Number(dets.target.textContent));
// if (clickednum === hitrn){
//     increaseScore();
//     makebubble();
//     getNewhit();
// }
// })





runTime();
makebubble();
getNewhit();



// increaseScore();




