// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("This works?!");

var isEqualTakeTwo = function (x, y) 
//   if (x === y) {
    // console.log('They are equal in type and value');
//   } else if (x == y) {
    // console.log('They are equal in value');
//   } else {
    // console.log('They are not equal');
//   }

for (var i = 0; i <= generateBtn.length; i++) { 
    // console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

var index = Math.floor(Math.random() * options.length);

  return ;
 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
    var passwordText = document.querySelector("#password");


   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);