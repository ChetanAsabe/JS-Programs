function sum(num) {
    if(num > 0)
        return num + sum(num-1);
    else
        return num;
}

let result = sum(50);

console.log(`The sum is ${result}.`);