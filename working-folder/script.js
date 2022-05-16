// Assigment code
var generateBtn = document.querySelector("#generate");

// return a random interger
function randomInt(min, max){
    if(!max){
        max = min
        min = 0
    }
    var rand = Math.random()
    return Math.floor(min*(1-rand)+ rand*max)
}
// get random variable

function randomOption(list){
    return list[randomInt(0, list.length)]
}


//start of the application
function generatepassword(){
    var userInput = window.prompt("What is your desired password length?")

    var passwordLength = parseInt(userInput)

    if(isNaN(passwordLength)){
        window.alert("That is not a number")
        return("please try again")
    }else{
        window.alert("You entered "+ passwordLength)
    }
    if(passwordLength < 8 || passwordLength > 128){
        window.alert("Password must be betweeen 8 and 128 characters long")
        window.alert("Please try again")
        return
    }
// questions that users are prompted to answer
    var enteredNumberList = window.confirm("would you like to include Numbers in your password? ")
    var enteredSpecialList  = window.confirm("would you like to include Special Characters in your password? ")
    var enteredlower = window.confirm("would you like to include Lowercase Letters in your password? ")
    var enteredUpperList = window.confirm("would you like to include Uppercase Letters in your password? ")

    var numberList = ["1","2","3","4","5","6","7","8","9","0"]
    var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var optionsCart = []


    if (enteredNumberList === true){
        optionsCart.push(numberList)
    }
    if (enteredSpecialList === true){
        optionsCart.push(symbolList)
    }
    if (enteredlower === true){
        optionsCart.push(lowercaseList)
    }
    if (enteredUpperList === true) {
        optionsCart.push(uppercaseList)
    }
//  if the user clicks cancel on all options
    if(optionsCart.length === 0){
        optionsCart.push(uppercaseList)
    }

    var generatedPassword = ""

    for(var i = 0; i < passwordLength; i++){
        var randomList = randomOption(optionsCart)
        var randomChar = randomOption(randomList)
        generatedPassword += randomChar
    }

    return  generatedPassword
}




// Write password to the #password input
function writePassword(){
    var password = generatepassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);