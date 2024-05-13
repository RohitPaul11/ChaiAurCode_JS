//FOR..IN LOOP

//OBJECTS
const myobject={
    cpp: "C++",
    python: "py",
    Javascript: "js"
}

for (const key in myobject) {
    //console.log(`${key} "shorthand is" ${myobject[key]}`);
}

//ARRays
const arr=['choco', 'chips', 'lays']
for (const key in arr) {
   console.log(arr[key]);
}