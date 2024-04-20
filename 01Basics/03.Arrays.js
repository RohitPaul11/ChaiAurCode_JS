// Array Declaration
const arr = [1, 2, 3, 4]

const ar = ["rohit", "IDd"]

const arr1 = new Array(1,2,3)

//Array MEthods
// console.log(arr.unshift(3));
// console.log(arr.shift());
// console.log(arr.length);

// console.log(arr.indexOf(2));
// console.log(arr.includes(6));

//splice manipulate the array,includes whole(1, 4) and Slice doesn't manipulate but excludes last 4 indexing (1,4) 


//Spread Operator replacement of concat operator 
const marvel= ["Thor", "Wanda", "Vision"]
const dc = ["flash", "Batman"]

console.log(...marvel, ...dc);      //spread operator breaks arrays into individual elements

// flat(infinity) method change to unique and single array[1,2,3,4,5] from [1,2, [4,5], [2,3]]

console.log(Array.from({name:"rohit"}));       //[] empty array  interview que