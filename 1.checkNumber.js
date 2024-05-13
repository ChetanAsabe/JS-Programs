
function checkNum(num) {
    if(num == 0)
        return 'The number is Zero!';
    else if (num > 0) {
        return 'The number is Positive!'
    } else {
        return 'The number is Negative!'
    }
}

console.log(checkNum(12));
console.log(checkNum(0));
console.log(checkNum(-5));