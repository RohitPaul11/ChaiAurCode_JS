
//for_Each loop has access to every item in an array and array itself

const food = ['choco','lava', 'grapes','papaya']

// food.forEach((item)=>{
//     console.log(item);
// })

// food.forEach( (item, index, array)=>{
//     console.log(item,index, array);
// })

const person= [{                            //[{},{},{}]
    language: "hindi",
    hobby:"playing"  
},
 {
    age:55,
    fruits: "banana"
    
}]

person.forEach( (inte)=>{
    console.log( inte.age);
})