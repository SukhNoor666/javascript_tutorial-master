// array
var array = ["This", "is", "my", "array", "being", "printed"];

// Iterate through the array/collection
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
} //ouput: "This is my array begin printed"

//demonstartiog for loop
for (let index in array) {
  console.log(array[index]);
} //ouput: "This is my array begin printed"

var array2 = [1, 2, 3, 4, 5];
//foreach
  array2.forEach((item) => {
    return console.log(item * 2);
  })

//fetch data from an API endpoint and loop through it 
//asynchronous functions that does not block main thread

async function fetchAndDisplayUsers(){
  try {
    
  } catch (error) {
    
  }
}