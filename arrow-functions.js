/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
//function addTwo(a, b) {
//    return a + b;
//}
//let sum = addTwo(5, 5);
//console.log(sum);

// Arrow Function With Parameters
const addTwo = (a, b) => {
    return a + b;
}
let sum = addTwo(6, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => a + b; also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(4, 4);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('TEST');

// Implicit Returns No parameters
const sayHello = () => console.log('HEJ HEJ');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string! 
    </p>`
)
console.log(returnMultipleLines());