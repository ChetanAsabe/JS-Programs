
function prime(num) {

    for(let i=2; i<num/2; i++) {
        if(num % i == 0)
            return `${num} is not Prime number.`
        else 
            return `${num} is Prime number.`
    }

}

console.log(prime(7));
console.log(prime(62));