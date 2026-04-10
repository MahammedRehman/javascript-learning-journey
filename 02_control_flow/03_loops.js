// const table = 2;

const { log } = require('console');

// For Loop--------------

// for(let i = 1;i<=10;i++){
//     console.log(table + " * "+ i +" = "+ table*i);
// }


// While Loop------------

// let i = 10
// let i = 11  // -> Try this with do while loop
// while(i<=10){
//     console.log(table + " * "+ i +" = "+ table*i);
//     i++;
// }


// do{
//     console.log(table + " * "+ i +" = "+ table*i);
//     i++;
// }while(i<=10)


// Render 5 product cards
// for (let i = 1; i <= 5; i++) {
//   console.log("Rendering product card #" + i);
// }



// let attempts = 0;
// while (attempts < 3) {
//   console.log("Trying to connect... attempt " + (attempts + 1));
//   attempts++;
// }


// Print all even numbers

// for(let i=0;i<=10;i++){
//     if(i%2 === 0){
//         console.log(i);
        
//     }
// }

// // Odd Numbers
// for(let i=0;i<=10;i++){
//     if(i%2 !== 0){
//         console.log(i);
        
//     }
// }

// Sum of first n natural numbers
// const n = 5
// let sum = 0;

// for(let i = 1; i<=n ;i++){
//     sum = sum + i;
// }

// console.log(sum);



// Factorial
// const n = 5

// fact = 1

// for(let i=1; i<=n; i++ ){
//     fact = fact * i
// }
// console.log("Factorial of "+ n + " is " + fact);


// Count Digits
// const num = 295927

// const str = num.toString()
// let count = 0;


// for(let i=0; i<str.length; i++){
//     count ++;
// }

// console.log(count);





// let n = 0
// let i = 0
// console.log(`${n} x ${i} = ${n * i}`);

// let num2 = null
// num2 = Math.floor(num2/10)
// console.log(num2);

// console.log(num/10);
// num = Math.floor(num / 10);
// console.log(num);



// Count Digits
// let num = 98765;
// let count = 0;

// while (num > 0) {
//   count++;
//   num = Math.floor(num / 10);
// }

// console.log(count);



// Reverse a number
// let num = 6753

// let reversed = 0

// while(num>0){
//     let temp = num % 10
//     reversed = reversed * 10 + temp
//     num = Math.floor(num/10)
// }
// console.log(reversed);



// Sum of digits
// let num = 3435 
// let sum = 0

// while(num>0){
//     sum += num % 10
//     num = Math.floor(num/10)
// }

// console.log(sum);



// Palindrome number -------------
// let num = 123
// let temp = num
// let rev = 0

// while(num>0){
//     let digit = num % 10
//     rev = rev * 10 + digit
//     num = Math.floor(num/10)
// }

// console.log(num);
// console.log(temp);

// if(rev === temp){
//     console.log("Palindrome Number");
// }
// else{
//     console.log("Not a Palindrome");
// }



// Patterns ---------------------------

// .repeat(2) will print how many times you want your string to be repeated by passing value

//Rigth Angled Triangle
// for(let i=1; i<=5; i++){
//     console.log("*".repeat(i));  
// }


// Reverse Right Angled Triangle
// for(let i=5; i>=1; i--){
//     console.log("*".repeat(i));  
// }



// Number Pattern
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// //   console.log(typeof row);
// }



// Prime Number Checker ---------------------
// let num = 3;
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (num <= 1) isPrime = false;
// console.log(isPrime ? "Prime" : "Not Prime"); //Ternary Operator



// Prime Number between n ----------------
// const n = 20;

// for (let i = 2; i <= n; i++) {
//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) console.log(i);
// }



// Fibonacci Series -------------------
// const n = 7

// let a=0,b=1

// for(let i=0; i<n; i++){
//     console.log(a);
//     let next = a+b
//     a = b
//     b = next
// }



// Largest number -------------------
// let num = 762592;
// let max = 0;

// while(num > 0){
//     let temp = num % 10;
//     if(temp > max){
//         max = temp;
//     }
//     num = Math.floor(num/10);
// }

// console.log(max);


// Most Repeated digit in the number
let num = 64617836

let target = 6
let count = 0;

while(num>0){
    let temp = num % 10;
    if(temp === target){
        count++
    }
    num = Math.floor(num/10)
}
console.log(count);





