// Assignment Code
// var generateBtn = document.querySelector("#generate");

// character declarations
const noCaps = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const allCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"]

//test to make sure arrays work
console.log(noCaps);
console.log(allCaps);
console.log(num);
console.log(special);

//Prompt box sequence
var totalCharacters = prompt("please enter desired password length between 8 and 128:", "enter value");

if (totalCharacters < 8 || totalCharacters > 128) {
  alert("warning! invalid value! please refresh page and try again");
  document.location.reload();
  //prompt("warning! invalid value! please enter desired password length between 8 and 128:", "re-enter value");
} else {
  alert("great! you selected: " + (totalCharacters));
  console.log(totalCharacters);
}

var char1 = prompt("would you like to include lower case letters?", "enter true or false");
if (char1 != "true" && char1 != "false") {
  alert("warning! invalid answer!");
  char1 = prompt("would you like to include lower case letters?", "enter true or false");
} else {
  alert("great! you selected: " + char1);
  console.log(char1)
}

var char2 = prompt("would you like to include upper case letters?", "enter true or false");
if (char2 != "true" && char2 != "false") {
  alert("warning! invalid answer!");
  char2 = prompt("would you like to include upper case letters?", "enter true or false");
} else {
  alert("great! you selected: " + char2);
  console.log(char2);
}

var char3 = prompt("would you like to include numerals?", "enter true or false");
if (char3 != "true" && char3 != "false") {
  alert("warning! invalid answer!");
  char3 = prompt("would you like to include lower case letters?", "enter true or false");
} else {
  alert("great! you selected: " + char3);
  console.log(char3);
}

var char4 = prompt("would you like to include special characters?", "enter true or false");
if (char4 != "true" && char4 != "false") {
  alert("warning! invalid answer!");
  char4 = prompt("would you like to include lower case letters?", "enter true or false");
} else {
  alert("great! you selected: " + char4);
  console.log(char4);
}

//combines desired character arrays to give full character bank (not complete for now)
if (char1 == "true" && char2 == "true") {
  var characterBank = [].concat(noCaps, allCaps);
  console.log(characterBank);
  console.log(characterBank.length);
}

console.log(totalCharacters);

//push each value returned from for loop to a new array named password
password =[]
for (var i = 0; i < totalCharacters; i++) {
  var index = Math.floor(Math.random() * (characterBank.length));
  //console.log(index);
  var value = (characterBank[index])
  password.push(value);
}
//outside of function, displays the final password array
console.log(password);

//this yields a string without commas
var finalForm = password.join("");
console.log(finalForm);

//DISPLAYS IN GENERATE PASSWORD BOX 
document.getElementById("password").innerHTML = finalForm;

//BELOW IS ALL EXPERIMENTATION//

//Produces an index selector for the number of characters in bank
//var index = Math.floor(Math.random() * (characterBank.length));
//console.log(index);

//Types single selected character in console log!
//console.log(characterBank[(index)]);

//build the full function
//function getCharacter(0,(characterBank.length)) {
//  return Math.floor(Math.random() * (characterBank.length)
//}

//var index = randomIndexGen()

/* function randomIndexGen() {
  Math.floor(Math.random() * (characterBank.length));
  console.log(index);
} */
// var animalsStartingWithD = [];
// for(var i = 0; i< animals.length; i++){
//   if(animals[i].charAt(0) === 'd') {
//     animalsStartingWithD.push(animals[i])
//   }
// }

/* //this WORKING code gives length # of characters in individual returns. need to get them into array
i = length;
console.log(totalCharacters);
for (var i = 0; i < length; i++) {
  var index = Math.floor(Math.random() * (characterBank.length));
  //console.log(index);
  const password = [characterBank[(index)]];
  console.log(password);
}

//const password= jumble.slice(index);

  //var password = jumble.toString();


//var index = function getCharacter()
//console.log(index)



/*function randomIndex() {
  return Math.floor(Math.random() * (characterBank.length - min+ 1) ) + min;
}

if (char1 == "true") {
  a=1, b=25;
 noCaps[function randomIndex()];
}

/*function passwordLength() {
  if (length < 8 || length > 128) {
    prompt("warning! invalid value! please enter desired password length between 8 and 128:", "re-enter value");
  } else {
  console.log(length);
}
} */




// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");
//
//  passwordText.value = password;
//
//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

// code i prob dont need but not ready to delete yet


//var length = prompt("Please enter desired lenght of characters", "between 8-128");
//let text;
//if (person == null || person == "") {
//  text = "User cancelled the prompt.";
//} else {
//  text = "Hello " + person + "! How are you today?";
//}


