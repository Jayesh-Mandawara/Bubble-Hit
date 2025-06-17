// Code for making bubbles: -
function makeBubbles(){
    var clutter = "";
for(var i = 1; i<=171; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}

// Code for running the timer: -
var timer = 60;
function runTimer(){
    var interval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(interval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1><br>
             <button id = "Rbtn" onclick="refreshPage()">Refresh</button>`;
        }
    }, 1000);
}

//Code for refreshing the page when the button is clicked!: -
function refreshPage() {
  location.reload();
}

// Code for getting a new Hit value: -
var hitrn = 0;
function newHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

// Code for updating the score: -
var score = 0;
function updateScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

// Code for updatingScore, matchingNum, makingNewBubbles and gettingNewHit by clicking on it: - 
document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        updateScore();
        makeBubbles();
        newHit();
    }
});

// Calling the functions to make the content visible at start: -
makeBubbles();
runTimer();
newHit();