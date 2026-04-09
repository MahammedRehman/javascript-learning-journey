let str = "I am learning about String Methods"
let str2 = "and I think I am doing good so far"

console.log(str.length); // return string length 
console.log(str.indexOf("about")); // Find the substring index 
// return the first character index on match or -1 if no match found

console.log(str.lastIndexOf("about"));

console.log(str.slice(2,7));

console.log(str.slice(-12,-3));

// console.log(str.replace("about"," "));
let newStr = str.replace("about","") // Used another string cause strings are immutable
console.log(newStr);

console.log(str.toUpperCase()); // Turns whole string into Upper case letters
console.log(str.toLowerCase()); // Same as .toUpperCase() but into lower case letters


console.log(str.concat(" " +str2)); // Join two separate strings

console.log(str2.charAt(1)); // Returns the characater index


// Simple program to return how many times a single character repeated in a sentence
const countCharacter = "A"
let str3 = str.toLowerCase() // Converting whole string into lower cases so that program won't crash when target value is a Upper Case
let target = countCharacter.toLowerCase() // converting into lower case 

let count=0;
for(let i = 0;i<str.length;i++){
    // This line whill goes to every character in the string and compare it to tha target value.
    // Whenever there is a match increase the count or move to next character.
    if(str3.charAt(i) === target){
        count++
    }
}

if(count == 0){
    console.log("Character not found");
}
else{
    console.log(countCharacter + " is repeated " + count + " times");
}

// console.log(str.split(","));

let str4 = str.split(",")  // Spltting a string using commas gives an array

console.log(str4);

console.log(typeof str4); // Type -> Object
console.log(typeof str); // Type -> String

let str5 =  str.split("") // Splits every character into a string
console.log(str5);

console.log(str5[7]); // character at 7 index in array


console.log(typeof str5);


let num = 125;

console.log(num.toString(16));
console.log(typeof num);















