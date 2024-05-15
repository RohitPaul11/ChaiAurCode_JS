const myNums = [1, 2, 3]

const New = myNums.reduce((acc, currval) => 
    {
    console.log(`ACCUMALATOR: ${acc}, Current Value: ${currval}`);
    return acc + currval;               
}, 0)                              

console.log(New)
//Accumalator firstly take the initial value i.e 0 here 
      //from the next time it take the updated current value


//can be used in ecommerce in shopping cart