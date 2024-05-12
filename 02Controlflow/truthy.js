
// TRUTHY AND FALSY VALUES

//Falsy values
     // 0, false, -0, BigInt 0n, "", null, undefined, NaN

//TRUTHY VALUES
    // '0', "False", true, {}, " ", [], function(){}


const user = "hi@gmail.com"

if(user){
    console.log("Got the mail");
}
else{
    console.log("Not Valid");
}


const emp={}        //emptyobject

if(Object.keys(emp).length == 0)            //Object.keys(parameter) returns an array of objects
{
    console.log("Empty");
}

//NULLISH COASLISHING OPERATOR (??)  designs to handle null, undefined

let val1;

// val1= 5 ?? 10         //stores the first character

val1 = null ?? 12        

// val1 = Undefined ?? 12
console.log(val1);

//Ternary Operator
      // condition ? true :false




