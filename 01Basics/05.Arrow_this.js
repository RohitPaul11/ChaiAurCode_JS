const user ={
     Username: "Rohit",
     age: 54,

     welcome: function (){
       console.log(`${this.Username}, "welcome to the site"`)
     }
}

user.welcome()
console.log(this)                  //here it's empty object but in browser (this) keyword is an empty object



function error(){
  let Username = "Paul"
 console.log(this.Username);        // Undefined as declaration and this keyword is not worked in functions
}
error()




//ARROW Functions
const chaai = () => {
  let Username = "Rishi";
  console.log(this.Username);     //UNdefined
}


//IMplicit arrow function
const addTwo0 = (num1, num2) => {          //  return statement required as curly braces is present
  
  return num1 + num2;
}
    

                  //OR 

const addTwo = (num1, num2) => (num1 + num2)         //removal of curly braces no need to write return keyword 
                                                          // and also put it in one line.
  console.log(addTwo(2,3)); 