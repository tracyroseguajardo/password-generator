// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character Declarations
const noCaps = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const allCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"]


function generatePassword() {
  // Gathering User Information
  var totalCharacters = parseInt(prompt("please enter desired password length between 8 and 128:"));

  // Ensures user enters specified parameters of the password length
  console.log(totalCharacters)
  if (totalCharacters < 8 || totalCharacters > 128) {
    alert("warning! invalid value! please enter a number between 8 and 128");
    return null;
  }

  // Only accepts an integer 
  if (isNaN(totalCharacters)) {
    alert("warning! invalid value! please enter a number");
    return null;
  }

  // Using confirm gives a boolean (yields targeted/ workable response)
  var char1 = confirm("would you like to include lower case letters?");

  var char2 = confirm("would you like to include upper case letters?");

  var char3 = confirm("would you like to include numbers?");

  var char4 = confirm("would you like to include special characters?");

  // Ensures that at lease one character set is selected
  if (!char1 && !char2  && !char3 && !char4) {
    alert("Warning! Please choose at least one option!")
    return null
  }

  // Setting variables to save and genertate from the user input data  
  var characterBank = [];
  var finalPassword = [];

  //Adds all selected characters to a new array
  if (char1) {
    characterBank = characterBank.concat(noCaps);
  }
  if (char2) {
    characterBank = characterBank.concat(allCaps);
  }
  if (char3) {
    characterBank = characterBank.concat(num);
  }
  if (char4) {
    characterBank = characterBank.concat(special);
  }

  // For loop runs equal to the user input total password length to randomly select desired number of characters   
  for (var i = 0; i < totalCharacters; i++) {
    var singleCharacter = randomIndex(characterBank)

    // Each time the loop returns a single character it is added to the end of the finalPassword array
    finalPassword.push(singleCharacter)
  }

  // Eliminates commas from the final password string
  return finalPassword.join('')
}

// Randomly pulls a number will be used to call from the index of the characterBank array
function randomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);