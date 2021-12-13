console.log("log 1");
setTimeout(() => {
  console.log("log 2");
});
console.log("log 3");
// log 1
// log 3
// log 2

// Real case: Redirect to another page after 3 seconds
setTimeout(() => {
  window.location.href = "https://github.com/zendy199x";
}, 3000);

// -> clearTimeout
const timeoutId = setTimeout(() => {
  console.log("Zendy");
}, 5000);
clearTimeout(timeoutId); // cancel the timeout
// should be called before the timeout expired

// -> Late timeout
setTimeout(() => {
  console.log("Tada!!!");
});
let count = 1;
for (let i = 0; i < 1e9; i++) {
  count++;
}
console.log("done");
