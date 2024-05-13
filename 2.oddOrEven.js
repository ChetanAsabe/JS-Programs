
function check(num) {
    if (num % 2 == 0) {
        return `${num} is Even.`
    } else {
        return `${num} is Odd.`
    }
}

console.log(check(12));
console.log(check(5));