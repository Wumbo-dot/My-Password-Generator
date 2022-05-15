// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatepassword(){
    console.log("The Generate Password button has been clicked")
    // promt the user for the password criteria

    // Password length between 8, 128
    var randomNumber = prompt("select a password length between 8 and 128 characters");    
    function randomNumber(number){
        
        var number = prompt("enter length")
        function numberLength(number){
            if(isNaN(number))
                return("Please enter a valid number");
        }
}
    // numberic, lowercase, uppercase, or special characters
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