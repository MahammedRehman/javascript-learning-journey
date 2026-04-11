

console.log(greet("Noor")) // This is called Hoisting -> means you can call it even before you define it in the file.


function greet(name){
    return "Hello, " + name;
}


// Function Expression -> store a function inside a variable. Not hoisted, so you must define it before calling it.

const msg = function (alertMsg){
    console.log("Alert: "+ alertMsg );
}

msg("Something Went Wrong")



const double = function (n){
    return n*2;
}
console.log(double(2));


const add = (n1,n2) => {  // Arrow Function similar to lamda experssion in Java.
    return n1+n2;
}

console.log(add(2,7));


// Tips:
// In React, almost every component and handler is a function expression or arrow function. 
// You'll almost never use function declarations in modern frontend code. But you must understand hoisting for interviews.


