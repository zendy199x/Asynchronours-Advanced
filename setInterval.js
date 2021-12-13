// Countdown
function countdown(second) {
  let currentSecond = second;

  const intervalId = setInterval(() => {
    console.log(currentSecond);

    if (currentSecond <= 0) {
      clearInterval(intervalId);
    }
    currentSecond -= 1;
  }, 1000);
}

countdown(5);

// -> setTimeout and setInterval: https://javascript.info/settimeout-setinterval
// setInterval: from the time of the previous function call to the next function call of 100ms
let i = 1;
setInterval(function () {
  func(i++);
}, 100);

// nested timeout: from the time of execution to the end of the previous function with the next function call of 100ms
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
