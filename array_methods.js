// array literal
var array =[ 1, 2, 3, 4, 5, 6, 9, 8, 7, 10];

// sort by alphabetical or numerical order
var new_array_sorted = array.sort((a,b) => a-b);

console.log(new_array_sorted);
console.log(array.reverse());

// to add items to the end of an array
array.push(11);
console.log(array); // output: output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11

// remove the last element of an array
array.pop();
console.log(array); // output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

//check if there is at least item in an array that matches our criteria
console.log(array.some(num => num == 1)); //output: true

//check if all the items in an array match a certain condition
console.log(array.every(num => num > 0)); //output: true

//reduces all items to one
console.log(array.reduce((a,b) => a + b)); //output: 55

//what if I want to join an array to an array
var array2 = [11, 12, 13, 14, 15, 16, 17];
console.log(array.concat(array2)); // output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15, 16, 17

// what I want to join things
let words = ["hello", "world", "!"]
let sentence = words.join('');
console.log(sentence); // ouput: hello world