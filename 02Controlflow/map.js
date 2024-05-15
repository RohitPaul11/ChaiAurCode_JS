const myNums = [1, 2, 3, 4, 5, 6, 7]

//ALternative of for_Each loop
// const New = myNums.map((num)=>{
//     return num+10
// })
// console.log(New);


//Chaining means combn of methods/functions
// const New = myNums.map((num)=> num+10).map((num)=>{        //usauage of double map methods
//     return num*2;
// })
// console.log(New);


const New = myNums.filter((num)=> num>4).map((num)=>{        //usauage of map & filter methods
    return num*2;
})
console.log(New);