const operator = prompt('Enter Operator (+, -, *, /) : ');

const num1 = parseInt(prompt('Enter First Number - '));
const num2 = parseInt(prompt('Enter Second Number - '));

let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        break;
}


console.log(`${num1} ${operator} ${num2} = ${result}`);