// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("This works?!");

//  Password Criteria
//  Length (min. 8 - max. 128)
//  Lowercase (abcdefghijklmnopqrstuvwxyz) = Include or not
//  Uppercase (ABCDEFGHIJKLMNOPQRSTUVWXYZ) = Include or not 
//  Numbers (0123456789) = Include or not

var passwordLength = 8 <= 128;
var Lowercase = 
var Uppercase = 
var Numbers = 

var password = 
  length: 
  includesLoweCase: true or false, yes or no,
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  includesUpperCase: true or false,
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  includesNumbers: true or false,
  numbers: "0123456789",

  if(passwordLength <= 7){
    return ("password length must be at least 1");
  }

// var isEqualTakeTwo = function (x, y) 
//   if (x === y) {
    // console.log('They are equal in type and value');
//   } else if (x == y) {
    // console.log('They are equal in value');
//   } else {
    // console.log('They are not equal');
//   }

// for (var i = 0; i <= generateBtn.length; i++) { 
     // console.log("I am going to zoo to see " + zooAnimals[i] + ".");
// }

// var index = Math.floor(Math.random() * options.length);

  return ;
 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
    var passwordText = document.querySelector("#password");


   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);