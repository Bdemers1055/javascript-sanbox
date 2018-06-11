function concat(a, b){ //function keyword name and arguments
    return a + b;
}

function multiplyBy3(x){
    return 3 * x;
}

function fortyTwo() {
    return 42;
}


const result = concat("yayyy", "wooo!!!");
console.log(result);
const result2 = concat(10, 3);
console.log(result2);

const product = multiplyBy3(11);
console.log(product);
const product2 = multiplyBy3('avocado');
console.log(product2);

console.log(fortyTwo());
console.log(fortyTwo('cheese'));