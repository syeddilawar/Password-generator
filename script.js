// Assignment Code
var l;
var passwordLength;
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var generateBtn = document.querySelector("#generate");
// Function for getting a random element from an array
function getRandom(arr) {
  while (arr.length != undefined) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }
}
writePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var lowercase = confirm("include lowercase");
  var uppercase = confirm("include uppercase");
  var number = confirm("include number");
  var speicalcharacter = confirm("include speicalcharacter");
  var pw = document.getElementById("password").value;
}
//create a RANDOM password!
function generatePassword() {
  //between 8 and 128 characters
  var pw = [];

  passwordLength = prompt(
    "select length of password in numbers between 8 to 128."
  );
  document.getElementsByClassName("pw-length").value = passwordLength;

  console.log("password length is " + passwordLength);
  //retrieves the user input for password lnegth
  var length = document.getElementsByClassName("pw-length").value;

  console.log(length);
  //generate the correct amount of characters for the password depending on requestLength()
  for (var i = 0; i < length / 4; i++) {
    var letter = getRandom(lowerCasedCharacters);

    var letterCaps = getRandom(upperCasedCharacters);

    var number = getRandom(numbers);

    var specialCharacter = getRandom(specialCharacters);
    pw.push(letter);
    pw.push(letterCaps);
    pw.push(number);
    pw.push(specialCharacter);
  }
  document.getElementById("password").value = pw.join("");
  console.log(pw.join(""));
}

function generateLowerCase() {
  //select lowercase letter
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
