// const userType = "guest"

// if (userType === "admin"){
//     console.log("Admin access -> Full Access");
// }
// else if(userType === "guest"){
//     console.log("Guest access -> Read only access");
// }
// else if(userType === "editor"){
//     console.log("Editor access -> Can create and edit posts");
    
// }
// else{
//     console.log("Redirect to Login Page");
// }


// Even or Odd
// const num = 5

// if(num%2===0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }


//Positive, Negative or Zero
// const num = 0

// if(num<0){
//     console.log("Negative");
// }
// else if(num>0){
//     console.log("Positive"); 
// }
// else{
//     console.log("Zero");
// }


// Largest among two
// const a = -12
// const b = -9

// if (a>b){
//     console.log("A is Greater");
    
// }
// else if(b>a){
//     console.log("B is Greater");
    
// }
// else{
//     console.log("Both are equal");
    
// }


// Leap Year
// const year = 2032

// // if(year/400){
// //     console.log("Leap Year");
    
// // }
// if(year % 4 === 0 && year % 100 !== 0){
// console.log("Leap Year");

// }
// else{
//     console.log("Not a Leap Year");
    
// }


//FizzBuzz
// const num = 15;

// if(num%3===0 && num%5===0){
//     console.log("FizzBuzz");
    
// }
// else if(num%5===0){
//     console.log("Buzz");
    
// }
// else if(num%3===0){
//     console.log("Fizz");
    
// }
// else{
//     console.log("No Fizz and No Buzz");
    
// }



// Tempature Check
// const tempature = 32

// if(tempature>=20 && tempature<=30){
//     console.log("Warm, Ready for a walk ?");
    
// }
// else if(tempature>30){
//     console.log("Hot, Don't forget to apply sunscreen");
    
// }
// else if(tempature<0){
//     console.log("Too Cold, Wrap yourself in blankets and netflix and chill");
    
// }
// else if(tempature<20){
//     console.log("Cold, Don't forget to apply moisturizer");
    
// }
// else{
//     console.log("Enter correct tempature");
    
// }



// Simple Login System
// let correctUsername = "Rehman"
// let correctpassword = "124"

// let userName = "Rehman"
// let password = ""

// if(correctUsername === userName && correctpassword === password){
//     console.log("Login Successful");
// }
// else if(userName === ""){
//     console.log("Name fiels cannot be empty");
    
// }
// else if(password === ""){
//     console.log("Please enter password");
    
// }
// else{
//     console.log("Wrong Credetinals");
    
// }


// Taking UserInput
const readline = require('readline').promises; // Loads the Node.js built-in module which reads from the terminal
const rl = readline.createInterface({ // Create connection between your code and terminal
  input: process.stdin,   // Take input from keyboard
  output: process.stdout  // Show output on screen 
});

async function main() {

 let correctUsername = "Rehman"
let correctpassword = "124"

let userName = await rl.question("Enter your name: ");
let password = await rl.question("Enter your password: ");

if(correctUsername === userName && correctpassword === password){
    console.log("Login Successful");
}
else if(userName === ""){
    console.log("Name fiels cannot be empty");
    
}
else if(password === ""){
    console.log("Please enter password");
    
}
else{
    console.log("Wrong Credetinals");
    
}

  rl.close(); // Close the connection
}

main(); 






