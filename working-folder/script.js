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

function getRandomItem(list){
    return list[randomInt(0, list.length)]
}



function generatepassword(){
    var userInput = window.prompt("What is your desired password length?")

    var passwordLength = parseInt(userInput)

    if(isNaN(passwordLength)){
        window.alert("That is not a number")
    }else{
        window.alert("You entered "+ passwordLength)
    }
    if(passwordLength < 8 || passwordLength > 128){
        window.alert("Password must be betweeen 8 and 128 characters long")
        return
    }

    var userWantsNumbers = window.confirm("would you like to include numbers in your password? ")
    var userWantsSymbols  = window.confirm("would you like to include Special characters in your password? ")
    var userWantsLowercase = window.confirm("would you like to include lower case letters in your password? ")
    var userWantsUppercase = window.confirm("would you like to include uppercase letters in your password? ")

    var numberList = ["1","2","3","4","5","6","7","8","9","0"]
    var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
    var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var optionsCart = []


    if (userWantsNumbers === true){
        optionsCart.push(numberList)
    }
    if (userWantsSymbols === true){
        optionsCart.push(symbolList)
    }
    if (userWantsLowercase === true){
        optionsCart.push(lowercaseList)
    }
    if (userWantsUppercase === true) {
        optionsCart.push(uppercaseList)
    }

    if(optionsCart.length === 0){
        optionsCart.push(uppercaseList)
    }

    var generatedPassword = ""

    for(var i = 0; i < passwordLength; i++){
        var randomList = getRandomItem(optionsCart)
        var randomChar = getRandomItem(randomList)
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