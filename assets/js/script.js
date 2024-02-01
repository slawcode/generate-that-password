// Assignment Code

// Password Criteria
// Length (min. 8 - max. 128)
// Lowercase (abcdefghijklmnopqrstuvwxyz) = Include or not
// Uppercase (ABCDEFGHIJKLMNOPQRSTUVWXYZ) = Include or not 
// Numbers (0123456789) = Include or not
// Symbols (!@#$%^&*()_+) = Include or not

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//  Event listener calls a function called write Password, which runs function generatePassword, therefore generatePassword function created to generate a password
function generatePassword() {
  // Length variable created to get password length from user
  var length = prompt("Please enter a password length between 8 and 128.");
  console.log(length);
  // Condition to check length of the password
  if (length < 8 || length > 128){
    alert("Password length does not meet length requirements.");
    return generatePassword()
  }
}

// A for-loop to execute code more than once
// for (var i = 8; i <= 128; i++) { 
    // var randonIndex = Math.floor(Math.random() * length.characters);
    // }

// Write password to the #password input

// Calling the function generatePassword and storing value for that function into the password variable for the password display
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);