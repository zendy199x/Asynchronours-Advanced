// Setup debounce
function log() {
  console.log("Zendy");
}

function debounce(callback, wait) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, wait);
  };
}

const debouncedLog = debounce(log, 500);
debouncedLog();
debouncedLog();
debouncedLog();
debouncedLog();
debouncedLog();
// Zendy
