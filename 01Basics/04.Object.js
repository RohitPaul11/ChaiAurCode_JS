


//Object Literals


const sym= Symbol("key1")


const obj={
    [sym]: "key",     // syntax for symbol defination
    name: "Rohit",
    age: 22,
    birth: "july"
}

//2 Ways to access
console.log(obj.name);
console.log(obj[sym]);      //symbol print
console.log(obj["age"]);  



// obj.name= "Kamal";
// Object.freeze(obj);        // freeze the obj object can't change the values anymore
// obj.name= "Rik";
// console.log(obj);     //Kamal




obj.greeting = function(){
   console.log(`Hello, ${this.name}`);
}

console.log(obj.greeting());




// const ob = new Object()                   //Singleton
// const ob1 = {}                          //Non-Singleton

const ob1 = {
  1:'a',
  2:'b'
}

const ob2 = {
    3:'c',
    4:'v'
}

//const res = {ob1, ob2}           //bad practice
          //OR 
// const res = Object.assign({}, ob1,ob2)              //MERGE
          //OR

  const res = {...ob1,...ob2}

console.log(res);




//Destructure
const instruc = {
    name:'anish',
    2:'hola'
  }

  const {name} = instruc
  console.log(name);