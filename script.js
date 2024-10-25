let myGreeting = "How are you?";
document.getElementById('result1').textContent = myGreeting; // Outputs to HTML
console.log(myGreeting); // Also log to the console

const pi = 3.14;
// pi = 2; // Uncaught TypeError: invalid assignment to const 'pi'

let myNumber = "17";
let result = Math.min(pi, Number(myNumber)); // Ensures myNumber is a number
document.getElementById('result2').textContent = `Math.min(${pi}, Number(${myNumber})) = ${result}`; // Outputs to HTML
console.log(`Math.min(${pi}, Number(${myNumber})) = ${result}`); // Also log to the console
