const score= 400
console.log(score);

const balance= new Number(1020)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));          //after decimal value to be fixed 1020.00

const num = 12.86
console.log(num.toPrecision(2))  //focus to precise the num given inside parentheses 

const hundred= 10000000
console.log(hundred.toLocaleString('en-IN'));   //Indian system numeration
console.log(hundred.toLocaleString());          //International system numeration



// +++++++++++++++++++++++MATHS++++++++++++++++

console.log(Math.abs(-5));     //Absolute value
console.log(Math.round(6.58));    
console.log(Math.ceil(8.3));    
console.log(Math.floor(7.58));   

console.log(Math.random());   //always displays values betwn 0 and 1    