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

// Function to prompt user for password options
function getPasswordOptions() {
  var length;
  var specialChar;
  var number;
  var capitalLetter;
  var lowercaseLetter;

  length = prompt("Enter the length of the password");

  if (length === null) {
    alert("Please click 'Generate Paswword' button to generate password. ");
    return 0;
  }
  else if(isNaN(length))
  {
    alert("Please enter only numeric value for length");
    return 0;
  }
  else if (length < 10 || length > 64) {
    alert("Please enter length between 10-64 to get password generated. ");
    return 0;
  }
  specialChar = confirm("Do you need special characters(like:'@','%','+') in the password?");
  number = confirm("Do you need numbers in the password?");
  capitalLetter = confirm("Do you need capital letters in the password?");
  lowercaseLetter = confirm("Do you need lowercase letters in the password?");

  return [length, specialChar, number, capitalLetter, lowercaseLetter];
}

// Function for getting a random element from an array
function getRandom(arr) {
  var index = Math.floor(Math.random() * (arr.length - 1));
  return arr[index];
}

// Function to generate password with user input
function generatePassword() {
  var optionArr;
  var length;
  var specialChar;
  var number;
  var capitalLetter;
  var lowercaseLetter;
  var password = "";
  var index;

  optionArr = getPasswordOptions();

  if (optionArr.length > 0) {
    length = parseInt(optionArr[0]);
    specialChar = optionArr[1];
    number = optionArr[2];
    capitalLetter = optionArr[3];
    lowercaseLetter = optionArr[4];

    while (password.length != length) {
      if (specialChar || number || capitalLetter || lowercaseLetter) {
        index = Math.floor(Math.random() * 4);
        switch (index) {
          case 0:
            {
              if (specialChar)
                password += getRandom(specialCharacters);
              break;
            }
          case 1:
            {
              if (number) {
                password += getRandom(numericCharacters);
              }
              break;
            }
          case 2:
            {
              if (capitalLetter) {
                password += getRandom(upperCasedCharacters);
              }
              break;
            }
          case 3:
            {
              if (lowercaseLetter) {
                password += getRandom(lowerCasedCharacters);
              }
              break;
            }

        }

      }
      else {
        alert("Please choose at least one character type to generate password");
        break;

      }

    }
  }
  console.log(password.length);
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