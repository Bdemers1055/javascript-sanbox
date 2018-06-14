// For loops are good when you know how many
// While loop are good if you need to do something 'until a condition changes'

// Exercise: I want to print the numbers 1 - 10 with each number on a new line.
// without a loop

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
// WITH A FOR LOOP
//  start     // stop   step
for(let i = 1; i < 11; i += 1){ // could be 1<=10 also
console.log(i);
}

// console.log(1); does not exist outside of loop because of the use of let

// WITH WHILE LOOP
let x = 1;
while(x < 11){
    console.log(x);
    x += 1; // this is a bias opinion
    // alt to above it x ++; or ++x
}

// Exercise: I want to print the numbers 3 - 13 (1 per line)
// WITH A FOR LOOP

for(let j = 3; j < 14; j += 1){
    console.log(j);
}

// with a while loop

let k = 3;
while(k < 14){
    console.log(k);
    k += 1;
}

// Exercise: I want to print every other number starting at 4 and 
// ending with 16 one per line

for(let l = 4; l < 17; l +=2){
    console.log(l);
}