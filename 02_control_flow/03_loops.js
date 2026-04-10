// const table = 2;

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
let num = 98765;
let count = 0;

while (num > 0) {
  count++;
  num = Math.floor(num / 10);
}

console.log(count);