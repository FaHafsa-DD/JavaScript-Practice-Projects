let [seconds, minutes, hours] = [0, 0, 0];
const displayTime = document.getElementById("display-time");
const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
let timer = null;

playBtn.addEventListener('click', () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
});

stopBtn.addEventListener('click', () =>{
    clearInterval(timer);
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00 : 00 : 00";

})

function stopWatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  } else if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  let h = hours < 10? "0" + hours : hours;
  let m = minutes < 10? "0" + minutes : minutes;
  let s = seconds < 10? "0" + seconds : seconds;
  displayTime.innerHTML = `${h} : ${m} : ${s}`;
}


