// Assignment Code
// var generateBtn = document.querySelector("#generate");

// character declarations

var noCaps = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var allCaps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"]

//test to make sure arrays work
console.log(noCaps);
console.log(allCaps);
console.log(num);
console.log(special);

//prompt practice: alert, confirm, prompt

//alert("input number of characters between 8 and 128");

//if (confirm("Press a button!")) {
//  txt = "You pressed OK!";
//} else {
//  txt = "You pressed Cancel!";
//}

//var length = prompt("Please enter desired lenght of characters", "between 8-128");
//let text;
//if (person == null || person == "") {
//  text = "User cancelled the prompt.";
//} else {
//  text = "Hello " + person + "! How are you today?";
//}

var length = prompt("please enter desired password length between 8 and 128:", "enter value");

if (length < 8 || length > 128) {
  alert("warning! invalid value! please refresh page and try again");
  //prompt("warning! invalid value! please enter desired password length between 8 and 128:", "re-enter value");
} else {
  console.log(length);
  //prompt("would you like to include lower case letters?", enter "true" && "false");
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
