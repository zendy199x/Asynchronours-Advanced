// Setup throttle

function log() {
  console.log("Zendy");
}

function throttle(callback, wait) {
  let isThrottling = false;

  return function () {
    if (isThrottling) return;

    isThrottling = true;
    setTimeout(() => {
      callback();
      isThrottling = false;
    }, wait);
  };
}

const throttledLog = throttle(log, 500);
// 0 -> 500ms
throttledLog(); // setTimeout 500 -> call -> turn of flag throttle
throttledLog(); // check throttling -> ignore
throttledLog(); // check throttling -> ignore
throttledLog(); // check throttling -> ignore
throttledLog(); // check throttling -> ignore
// Zendy

// 600
setTimeout(throttledLog, 600);
setTimeout(throttledLog, 700);
setTimeout(throttledLog, 800);
setTimeout(throttledLog, 900);
setTimeout(throttledLog, 1000);
// Zendy
