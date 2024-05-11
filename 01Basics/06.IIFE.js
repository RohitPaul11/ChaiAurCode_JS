
// Immediately Invoked Function Expression (IIFE): executes as soon as functions defined 
                            // Used to avoidpolluting the global namespace

// NORMALfunctions
// const db = ()=>{
//     console.log("DB connected");
// }
// db()

//IIFE functions       // wrapping the function with parentheses

( function db()  {
       //NAMED IIFE
      console.log("DB connected");

}) ();       // need to end the function with SEMICOLON or else error encountered as TypeError: (intermediate value)(...) is not a function
                                //before starting of another IIFE functions


//Arrow functions ()=>{ } 
    //Unnamed IIFE
(  (age)=>{
    console.log(`DB connected Arrow ${age}`);
})(24)