const myNums = [1, 2, 3, 4, 5, 6, 7]

//const num = myNums.filter( (num) => num>4 )      //implicit 


const num = myNums.filter( (num) => {               //Explicit
    return num > 4
} )     

console.log(num);
