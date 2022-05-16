// Assignment Code
var generateBtn = document.querySelector("#generate");

// character declarations
const noCaps = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const allCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"]


function generatePassword() {

  var totalCharacters = parseInt(prompt("please enter desired password length between 8 and 128:"));

  console.log(totalCharacters)
  if (totalCharacters < 8 || totalCharacters > 128) {
    alert("warning! invalid value! please refresh page and try again");
    return null;
  
  }

  if (isNaN(totalCharacters)) {
    alert("warning! invalid value! please enter a number");
    return null;
  }

  var char1 = confirm("would you like to include lower case letters?");

  var char2 = confirm("would you like to include upper case letters?");

  var char3 = confirm('test')

  var char4 = confirm('tes')

  if (!char1 && !char2  && !char3 && !char4) {
    alert('Warning! Please choose at least one option!')
    return null
  }

  var characterBank = [];
  var finalPassword = [];

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

  for (var i = 0; i < totalCharacters; i++) {
    var singleCharacter = randomIndex(characterBank)
    
    finalPassword.push(singleCharacter)
  }

  return finalPassword.join('')
}

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

