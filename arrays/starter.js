const nums = [1, 2, 3];
const letters = ['a', 'b', 'c'];

console.log('nums: ', nums);
console.log('letters: ', letters);

// grab an element
// arrays are zeron indexed
console.log('The 0th element of num is ', nums[0]);
console.log('The index 2 element of letters ', letters[2]);
console.log(letters[5]); // this will return undefined

// change an element
nums[0] = 4;
letters[10] = 'q'; // this is BAD because we now have a gap

console.log('nums: ', nums);
console.log('letters: ', letters);
console.log(letters[5]); // still undefined because the array doesn't have an element there 

console.log('Length of nums: ', nums.length);
console.log('Length of letters: ', letters.length);
