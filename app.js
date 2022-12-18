
let seconds = 00;
let mins = 00;
let getSeconds = document.querySelector(".seconds");
let getMins = document.querySelector(".mins");
// let getTens = document.querySelector(".tens");
let input = document.querySelector("#inputText")
let interval;

function startTimer() {
   
     seconds++;
    if(seconds < 10){
        getSeconds.innerHTML =  '0' + seconds;
    }
    if(seconds > 9){
       getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9) {
        getSeconds.innerHTML = mins
    }
     
}



// Event listeners on start
input.addEventListener("click",() => {
    interval = setInterval(startTimer,1000);
});

