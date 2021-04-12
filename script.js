// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array 
var specialChar = ["!", "@", "#", "$", "%", "^", "\&", "*", "(", ")", "_", "+", "-", "=", " ", "~", "}", "{", "]", "[", "`", "\\"];
// var specialChar = JSON.stringify(obj);
var numeric = ["0", "1", "3", "2", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Lower Case to Upper Case Array
var upperCase = lowerCase.map(lowerCase => lowerCase.toUpperCase());


// Console Log Lower Case to Upper Case
// for ( var i = 0; i < upperCase.length; i++) {
//   console.log(" " + upperCase[i] );
// }
console.log("--------------------------------");

// Password length 
console.log(specialChar.length);
console.log(numeric.length);
console.log(lowerCase.length);
console.log(upperCase);

// Function 
function generatePassword() {
  // passwordText.value = password;
  
  var password = "";
  var passLength = window.prompt("How long is the password ( 8 - 128 ): \n")
  // Creating a arracy variable
  var passwordCriteria = {};

  // Password Length Validations
  if (passLength < 8 || passLength > 128) {
    window.alert("Password is invalid. Please select number range from ( 8 - 128 ): \n");
    return;
    
  }

  // If input is not a number. Try Again
  if (isNaN(passLength)) {
    window.alert("Please enter a valid value. Hint: It's a number");
    return;
  }
  
  // Lowercase Option
  var LCResponse = window.confirm("Do you accept that this password will have a LOWERCASE?");
  if ( LCResponse == false ) {
    LCResponse = false;
  } else {
    LCResponse = true;
    passwordCriteria = lowerCase;
    console.log("Password Criteria" + passwordCriteria);
  }
  
  // Uppercase Option
  var UCResponse = window.confirm("Do you accept that this password will have a UPPERCASE?");    
  if ( UCResponse == false ){
    UCResponse = false;
  } else {
    UCResponse = true;
    // Creating a variable container.
    upperCasePush = upperCase;
    // Adding upperCase dataset to passwordCriteria through array.
    passwordCriteria = upperCasePush.concat(passwordCriteria);
    console.log("Password Criteria" + passwordCriteria);
  }
// Numeric
  var NUMResponse = window.confirm("Do you accept that this password will have a NUMBERS?");
  if ( NUMResponse == false ) {
    NUMResponse = false;
  } else {
    NUMResponse = true;
    numCasePush = numeric;
    passwordCriteria = numeric.concat(passwordCriteria);
    console.log("Password Criteria" + passwordCriteria);
  }
// Special Characters
  var SCResponse = window.confirm("Do you accept that this password will have a Special Character?");
  if ( SCResponse == false ) {
    SCResponse = false;
  } else {
    SCResponse = true;
    SCPush = specialChar;
    passwordCriteria = SCPush.concat(passwordCriteria);
    console.log("Password Criteria" + passwordCriteria);

  }

// Prompt if there are no selected string style.
  if (LCResponse == false && UCResponse == false && SCResponse == false && NUMResponse == false ) {
    window.alert("Please select a proper string type next time.");
    return;
  }

// Brewing the password.
  for ( var i = 0 ; i <= passLength ; i++ ) {
    password += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
    password.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&#039");
  }
  return(password);

}