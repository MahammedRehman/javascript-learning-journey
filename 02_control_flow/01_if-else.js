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
// const readline = require('readline').promises; // Loads the Node.js built-in module which reads from the terminal
// const rl = readline.createInterface({ // Create connection between your code and terminal
//   input: process.stdin,   // Take input from keyboard
//   output: process.stdout  // Show output on screen 
// });

// async function main() {

//  let correctUsername = "Rehman"
// let correctpassword = "124"

// let userName = await rl.question("Enter your name: ");
// let password = await rl.question("Enter your password: ");

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

//   rl.close(); // Close the connection
// }

// main(); 



// Triangle Type
// const side1 = 12
// const side2 = 12
// const side3 = 12

// if(side1 === side2 && side2 === side3){
//     console.log("Equal Sides");
    
// }
// else if(side1 === side2 || side2 === side3 || side3 === side1){
//     console.log("Two Equal Sides");
    
// }
// else{
//     console.log("All Different");
    
// }



// Electricity Bill
// let units = 121
// let electricityBill = 0

// if(units<=100){
//     electricityBill = units * 5
// }
// else if (units>100 || units<=200){
//     electricityBill = units * 7
// }
// else if(units>200){
//     electricityBill = units * 10
// }
// else{
//     console.log("Invalid Units");
    
// }

// console.log("Your last month electricity bill is " + electricityBill);




// Discount System
// Discount Logic -> discount price = base price × (100 − discount percent) / 100
const purchaseAmount = 2000
let amountAfterDiscount = 0

if(purchaseAmount>=5000){
    amountAfterDiscount = purchaseAmount * (100 - 20) / 100
}
else if(purchaseAmount>=2000){
    amountAfterDiscount = purchaseAmount * (100 - 10) / 100
}
// else if(purchaseAmount>=1500 || purchaseAmount <2000){
//     console.log("Purchase more to get 10% discount");
    
// }
// else if(purchaseAmount>=4500 || purchaseAmount <5000){
//     console.log("Purchase more to get 20% discount");
    
// }
else{
    console.log("No Disount for this purchase");
    
}

console.log("Original Amount: " + purchaseAmount);
console.log("After Discount: " + amountAfterDiscount);













