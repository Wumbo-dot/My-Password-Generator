// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatepassword(){
    console.log("The Generate Password button has been clicked")
    
    // Password length between 8, 128
    var inputLength = window.prompt("Select a password length between 8 and 128 characters");    
        console.log(inputLength);
        var passwordLength = parseInt(inputLength);
    if(isNaN(passwordLength))    {
        window.alert("Please enter a valid number only")
    }else{
        window.alert("You entered "+ passwordLength)
    }

    if(passwordLength < 8 || passwordLength >128){
        window.alert("The pastword length must be a valid number between 8 and 128.")
        return
    }

    var enteredUpper = window.confirm("Would you like to have Uppercase letters in the password?")
    var enteredLower = window.confirm("Would you like to have Lowercase letters in the password?")
    var enteredNumber = window.confirm("Would you like to have Numbers in the password?")
    var enteredSpecial = window.confirm("Would you like to have Special Characters in the password?")
    
    var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var specialCharatcers = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
    var numberList = ["1","2","3","4","5","6","7","8","9","0"]

    var selectedOptions = []
// numberic, lowercase, uppercase, or special characters
    if(enteredUpper === true){
        selectedOptions.push(upperLetters)
    }
    if(enteredLower === true){
        selectedOptions.push(lowerLetters)
    }
    if(enteredNumber === true){
        selectedOptions.push(specialCharatcers)
    }
    if(enteredSpecial === true){
        selectedOptions.push(numberList)
    }

    
    // validate user input
    
    
    // display password on the page
    return "Generated Password will go here"
}



// Write a password to the #password input
function writePassword(){
    var password = generatepassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);