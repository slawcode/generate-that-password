// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
//    console.log("Does this work?");

   var passwordLength = 8;
   var possibleCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   var password = "";

   for (var i = 0; i <= password.length; i++) { 
    // console.log("I am going to zoo to see " + zooAnimals[i] + ".");
    var index = Math.floor(Math.random() * password.length);
    }
}


// We use a for-loop to execute code more than once
for (var i = 0; i < 5; i++) {
    // This is the block of code that will run each time
    console.log("This is the current value of i: " + i + ".");
}

// For-loops are often used to iterate over arrays
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
for (var i = 0; i < zooAnimals.length; i++) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e"];

//  Password Criteria
//  Length (min. 8 - max. 128)
//  Lowercase (abcdefghijklmnopqrstuvwxyz) = Include or not
//  Uppercase (ABCDEFGHIJKLMNOPQRSTUVWXYZ) = Include or not 
//  Numbers (0123456789) = Include or not

// var passwordLength = ;
// var Lowercase = abcdefghijklmnopqrstuvwxyz
// var Uppercase = ABCDEFGHIJKLMNOPQRSTUVWXYZ
// var Numbers = 0123456789

// var password = 
//   length: 8 <= 128,
//   includesLoweCase: true or false, yes or no,
//   lowerCase: "abcdefghijklmnopqrstuvwxyz",
//   includesUpperCase: true or false,
//   upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   includesNumbers: true or false,
//   numbers: "0123456789",

//   if(passwordLength <= 7){
    // return ("Password length must be at least 8 characters");


//   if(passwordLength >= 129){
    // return ("Password length must be no more than 128 characters");
//   }

// Evaluates to false so nothing is logged
// if (hungerLevel < 50) {
    // console.log("I'm full!");
//   }

// var isEqualTakeTwo = function (x, y) 
//   if (x === y) {
    // console.log('They are equal in type and value');
//   } else if (x == y) {
    // console.log('They are equal in value');
//   } else {
    // console.log('They are not equal');
//   }

 
// window.alert("The computer chose " + computerChoice);
//  window.alert("The computer chose " + computerChoice);
//   return ;
//  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length);
    var passwordText = document.querySelector("#password");


   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);