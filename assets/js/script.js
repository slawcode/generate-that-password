// Assignment Code

// Password Criteria
// Length (min. 8 - max. 128)
// Lowercase (abcdefghijklmnopqrstuvwxyz) = Include or not
// Uppercase (ABCDEFGHIJKLMNOPQRSTUVWXYZ) = Include or not 
// Numbers (0123456789) = Include or not
// Symbols (!@#$%^&*()_+) = Include or not

var generateBtn = document.querySelector("#generate");

//  generatePassword function created to generate a password
function generatePassword(length) {

//    var password = "";
//    var passwordLength = 8 <= 128;
//    var possibleCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// var passwordLength = ;
// var Lowercase = abcdefghijklmnopqrstuvwxyz
// var Uppercase = ABCDEFGHIJKLMNOPQRSTUVWXYZ
// var Numbers = 0123456789

// Password variable criteria
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

   // A for-loop to execute code more than once
for (var i = 8; i <= 128; i++) { 
    var randonIndex = Math.floor(Math.random() * length.characters);
    }

// Write password to the #password input

// Calling the function generatePassword and storing value for that function into the password variable for the password display
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);