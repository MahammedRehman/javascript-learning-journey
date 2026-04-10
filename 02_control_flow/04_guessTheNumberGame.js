// / Taking UserInput
const readline = require('readline').promises;         // Loads the Node.js built-in module which reads from the terminal
const rl = readline.createInterface({     // Create connection between your code and terminal
  input: process.stdin,       // Take input from keyboard
  output: process.stdout      // Show output on screen 
});

async function main() {

const secret = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 - 100
let guesses = 0;  // Number of guesses user take to guess the number
let found = false;

while (!found) {
  const guess = Number(await rl.question("Guess the Number: "));  //  Taking user input
  guesses++;    // Everytime user guesses increase the guesses
  if (guess === secret) {
    found = true;
    console.log("WhoooWhoooooooo You Guessed It ;)");
    console.log("The number was: "+secret+" and you took "+guesses+" guesses to guess the number");
    break;
    
  } else if (guess < secret) {
    console.log("Too Low");
    
  } else {
    console.log("Too High");
    
  }
}

  rl.close(); // Close the connection
}

main(); 