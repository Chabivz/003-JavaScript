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
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "="];
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
  
// Return if there is no selected string type.

 

  var LCResponse = window.confirm("Do you accept that this password will have a LOWERCASE?");
  if ( LCResponse == false ) {
    LCResponse = false;
  } else {
    LCResponse = true;
    passwordCriteria = lowerCase;
    console.log("Password Criteria" + passwordCriteria);
  }
  
  var UCResponse = window.confirm("Do you accept that this password will have a UPPERCASE?");    
  if ( UCResponse == false ){
    UCResponse = false;
  } else {
    UCResponse = true;
    upperCasePush = upperCase;
    passwordCriteria = upperCasePush.concat(passwordCriteria);
    console.log("Password Criteria" + passwordCriteria);
  }

  var NUMResponse = window.confirm("Do you accept that this password will have a NUMBERS?");
  if ( NUMResponse == false ) {
    NUMResponse = false;
  } else {
    NUMResponse = true;
    numCasePush = numeric;
    passwordCriteria = numeric.concat(passwordCriteria);
    console.log("Password Criteria" + passwordCriteria);
  }

  var SCResponse = window.confirm("Do you accept that this password will have a Special Character?");
  if ( SCResponse == false ) {
    SCResponse = false;
  } else {
    SCResponse = true;
    SCPush = specialChar;
    passwordCriteria = SCPush.concat(passwordCriteria);
    console.log("Password Criteria" + passwordCriteria);

  }

  if (LCResponse == false && UCResponse == false && SCResponse == false && NUMResponse == false ) {
    window.alert("Please select a proper string type next time.");
    return;
  }

  for ( var i = 0 ; i <= passLength ; i++ ) {

    password += passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];

  }return(password);

}



// if ( LCResponse == true ) {
//   for ( var i = 0; i >= passLength; i++) {
//     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//     console.log(password);
//     } return(password);
//   } else if  (LCResponse == true && UCResponse == false && NUMResponse == false && SCResponse == false) {
//     for ( var i = 0; i >= passLength; i++) {
//       password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
//       console.log(password);
//       } return(password);
//   } else if  (LCResponse == true && UCResponse == true && NUMResponse == false && SCResponse == false) {
//     console.log("kasdjflaskjdf")
    
//   } else if (LCResponse == true && UCResponse == true && NUMResponse == true && SCResponse == false) { 
//   console.log("kasdjflaskjdf")
  
//   } else {
    // for ( var i = 0; i >= passLength; i++) {
    //   var1 = lowerCase.concat(upperCase, numeric, specialChar);
    //   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    //   console.log(password);
    //   } return(password);    
//   }
// } 