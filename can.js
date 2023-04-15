let timeDisplay=document.querySelector("#timeDisplay");
let startBtn=document.querySelector("#startBtn");
let pauseBtn=document.querySelector("#pauseBtn");
let reset=document.querySelector("#resetBtn");
let paused=true;
let startingTime=0;
let elapsedTime=0;
let currentTime=0;
let hr=0;
let min=0;
let sec=0;
let timerId;

startBtn.addEventListener("click",()=>{
    if(paused){
        paused=false;
        startingTime=Date.now()-elapsedTime;
      timerID=  setInterval(timeUpdate,75)
    }
    });

pauseBtn.addEventListener("click",()=>
{
    if(!paused){
        paused=true;
        elapsedTime=Date.now()-startingTime;
        clearInterval(timerID);
    }
});
reset.addEventListener("click",()=>{
   paused=true;
   clearInterval(timerID);
   startingTime=0;
   elapsedTime=0;
   currentTime=0;
   hr=0;
   min=0;
   sec=0;
   timeDisplay.textContent="00:00:00";



    }
);



function timeUpdate(){
    elapsedTime=Date.now()-startingTime;
    sec=Math.floor((elapsedTime/1000)%60);
    min=Math.floor((elapsedTime/(1000*60))%60);
    hr=Math.floor((elapsedTime/(1000*60*60))%60);
    hr=pad(hr);
    min=pad(min);
    sec=pad(sec);
    timeDisplay.textContent=`${hr}:${min}:${sec}`;
    function pad(unit){
        return (("0")+unit).length>2?unit:"0"+unit;
    }
}
