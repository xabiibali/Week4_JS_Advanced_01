// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/





// function getLength(arr, cb) {
   // getLength passes the length of the array into the callback.
// }

// function last(arr, cb) {
  // last passes the last item of the array into the callback.
// }

// function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
// }

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}


const itemColback = function(cb){
return cb(items) 
} 

const arrfunct = function(item){
  return item 
}

console.log(itemColback(arrfunct));


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

getLength(items, function(leng){
  console.log(leng);
})


function last(arr, cb) {
  // last passes the last item of the array into the callback.
return cb(arr[arr.length - 1])

}

last(items, function(lastsLength){
  console.log(lastsLength);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}

sumNums(7, 4 , function(plus){
  console.log(plus);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb (x * y)
}

multiplyNums(11, 6, function(multiply){
  console.log(multiply);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
if(list.includes(item)){
 cb(true)
}else{
  cb(false)
}

}

 let cont = contains('Notebook',  items , function(conts){
  console.log(conts);
 })


 let conting = contains('laptop', items , function(conts){
  console.log(conts);
 })