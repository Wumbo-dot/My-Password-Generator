// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write a password to the #password input
function writePassword(){
    var password = generatepassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);