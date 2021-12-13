// -> Issues
// - Cannot bind this for setTimeout.
// - this in callback function of setTimeout default is global object (window)
const student = {
  name: "Zendy",
  sayHello() {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },
};
student.sayHello(); // 'Zendy'
setTimeout(student.sayHello);
// this is window, not student
setTimeout.call(student, student.sayHello);
// Uncaught TypeError: Illegal invocation

// -> Solution:
// - Use a wrapper function
const student = {
  name: "Zendy",
  sayHello() {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },
};
setTimeout(() => {
  student.sayHello(); // this is student --> 'Zendy'
});

// - Use bind()
const student = {
  name: "Zendy",
  sayHello() {
    console.log("NAME", this.name);
    console.log("THIS", this);
  },
};
setTimeout(student.sayHello.bind(student)); // Zendy
