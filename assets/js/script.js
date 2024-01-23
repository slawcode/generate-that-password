// Assignment Code

// Password Criteria
// Length (min. 8 - max. 128)
// Lowercase (abcdefghijklmnopqrstuvwxyz) = Include or not
// Uppercase (ABCDEFGHIJKLMNOPQRSTUVWXYZ) = Include or not 
// Numbers (0123456789) = Include or not
// Symbols (!@#$%^&*()_+) = Include or not

var generateBtn = document.querySelector("#generate");

//  generatePassword function created 
function generatePassword(length) {

   var password = "";
   var passwordLength = 8 <= 128;
   var possibleCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// A for-loop to execute code more than once
for (var i = 8; i <= 128; i++) { 
    var randonIndex = Math.floor(Math.random() * length.characters);
    }
}

// var passwordLength = ;
// var Lowercase = abcdefghijklmnopqrstuvwxyz
// var Uppercase = ABCDEFGHIJKLMNOPQRSTUVWXYZ
// var Numbers = 0123456789

  var password = 
    length: 8 <= 128,
    includesLoweCase: true or false,
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    includesUpperCase: true or false,
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    includesNumbers: true or false,
    numbers: "0123456789",

  if(passwordLength <= 7){
     return ("Password length must be at least 8 characters");
  }

  if(passwordLength >= 129){
    return ("Password length must be no more than 128 characters"); 
   }



// For-loops are often used to iterate over arrays
// var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
// for (var i = 0; i < zooAnimals.length; i++) { 
    // console.log("I am going to zoo to see " + zooAnimals[i] + ".");
// }
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var lowerCase = ["a", "b", "c", "d", "e"];

// for (var i = 0; i < 10; i++) {
    // This is the block of code that will run each time
    // console.log("This is the current value of i: " + i + ".");
// }
// (var i = 0; i < 10; i++) {
    // This is the block of code that will run each time
    // console.log("This is the current value of i: " + i + ".");
// }



// var isEqualTakeTwo = function (x, y) 
//   if (x === y) {
    // console.log('They are equal in type and value');
//   } else if (x == y) {
    // console.log('They are equal in value');
//   } else {
    // console.log('They are not equal');
//   }



// Write password to the #password input

// Calling the function generatePassword and storing value for that function into the password variable 
function writePassword() {
  var password = generatePassword();
    var passwordText = document.querySelector("#password");

   passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);