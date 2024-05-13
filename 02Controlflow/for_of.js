// For..Of loop : not for object

const greet = "Hello Greetings"
for(const g of greet){
    if(g== " ") continue;
    //console.log(`Each char is:  ${g}`);
}

//MAPS: unique values
const map= new Map()
map.set('India', 91);
map.set('Italy', 41);
map.set('USA', 15);

//console.log(map);

for (const [key, value] of map) {
    console.log(key ,":-" ,value);
}