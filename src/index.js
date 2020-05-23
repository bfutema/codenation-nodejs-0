'use strict'

const fibonacci = () => {
    const array = [0, 1];

    while (array[array.length-1] <= 350) {
        const n = array[array.length-1] + array[array.length-2];
        array.push(n);
    }

    return array;
}

const isFibonnaci = (num) => fibonacci().includes(num);

console.log(isFibonnaci(8));

module.exports = {
    fibonacci,
    isFibonnaci
}
