// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options and generate password
function generatePassword() {
  var passwordLength = parseInt(prompt("Enter the length of the password (8-128 characters):"));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128.");
    return "";
  }

  var includeSpecialCharacters = confirm("Include special characters?");
  var includeNumericCharacters = confirm("Include numeric characters?");
  var includeLowerCasedCharacters = confirm("Include lowercase characters?");
  var includeUpperCasedCharacters = confirm("Include uppercase characters?");

  // Validate at least one character type is selected
  if (!(includeSpecialCharacters || includeNumericCharacters || includeLowerCasedCharacters || includeUpperCasedCharacters)) {
    alert("At least one character type must be selected.");
    return "";
  }

  var possibleCharacters = [];
  if (includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  if (includeNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (includeLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  if (includeUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);