var generateBtn = document.querySelector("#generate");

// Variables with strings of possible password letters, special characters and numbers
var lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()[]{}";
var numbers = "0123456789";

//  Event listener calls a function called writePassword, which runs function generatePassword, therefore generatePassword function created
function generatePassword() {
  
  // Length variable created to get password length from user
  var length = prompt("Please enter a password length between 8 and 128.");
  console.log(length);
  
  // Condition to check length of the password
  if (length < 8 || length > 128){
    alert("Password length does not meet length requirements.");
    return generatePassword()
  }

  // Variables created to store user's password preferences after confirming through question
  var wantsLowerCase = confirm("Do you want lowercase characters in your password?")
  var wantsUpperCase = confirm("Do you want uppercase characters in your password?")
  var wantsSpecialCharacters = confirm("Do you want special characters in your password?")
  var wantsNumbers = confirm("Do you want numbers in your password?")

  // Responses from the above questions will go into the choices variable. Variable starts off empty. 
  var choices = ""
  if (wantsLowerCase === true) {
    choices = choices + lowerCase
  }
  if (wantsUpperCase === true) {
    choices = choices + upperCase
  }
  if (wantsSpecialCharacters === true) {
    choices = choices + specialCharacters
  }
  if (wantsNumbers === true) {
    choices = choices + numbers
  }

  // For-loop/iteration to execute code multiple times and randomly go through and grab characters from the choices string and stores in password variable. Math random generates a random number under 1. This numbers gets multiplied by choices length.  
  var password = ""
  for (var i = 0; i < length; i++)  {
  password = password + choices [Math.floor(Math.random()*choices.length)]
  }
  return password
}

// Calling the function generatePassword and storing value for that function into the password variable for the password displayed on page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);