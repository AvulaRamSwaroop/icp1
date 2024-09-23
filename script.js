let [hours, min, sec] = [0, 0, 0];
let timer = null;
function display() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  document.querySelector(".kk").innerHTML = `${h}:${m}:${s}`;
}
function startClock() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
    if (min === 60) {
      hours++;
      min = 0;
    }
  }
  display();
}

function startbtn() {
  if (timer !== null) {
    stopbtn();
  }
  timer = setInterval(startClock, 1000);
}

function stopbtn() {
  clearInterval(timer);
}

function resetbtn() {
  document.querySelector(".kk").innerHTML = "00:00:00";
  [hours, min, sec] = [0, 0, 0];
  clearInterval(timer);
  timer = null;
}
document.querySelector(".start").addEventListener("click", () => {
  startbtn();
});

document.querySelector(".stop").addEventListener("click", () => {
  stopbtn();
});

document.querySelector(".reset").addEventListener("click", () => {
  resetbtn();
});
