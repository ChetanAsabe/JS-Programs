function reverse(str) {
    // let string = '';

    // for(let i = str.length-1; i>=0; i--) {
    //     string += str.charAt(i);
    // }

    // return string;

    let array = str.split('').reverse().join('');
    return array;
}

console.log(reverse('ABCD'));