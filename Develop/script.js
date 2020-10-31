// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
var passwordLength = "";
var upperCharInclude;
var numsInclude;
var symbolsInclude;
var password;
var selectionFuncArray = [{lower: selectLower()}]

// Selector functions to choose random characters of each type

function selectLower() {
  return lowerChar[Math.floor(Math.random() * lowerChar.length)];
}

function selectUpper() {
  return upperChar[Math.floor(Math.random() * upperChar.length)];
}

function selectNum() {
  return nums[Math.floor(Math.random() * nums.length)];
}

function selectSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generator function
function generatePassword() {
  var generatedPassword = "";
  var typesChecked = 1 // lowercase charcters are the default character type
  if (upperCharInclude===true){
    selectionFuncArray.push({upper: selectUpper()});
    typesChecked ++
  };
  if (numsInclude===true) {
    selectionFuncArray.push({num: selectNum()});
    typesChecked ++
  };
  if (symbolsInclude===true) {
    selectionFuncArray.push({symbol: selectSymbol()});
    typesChecked ++ 
  };
  for (i=0; i < passwordLength.length; i+= typesChecked){
    selectionFuncArray.forEach(type => {
      var funcArrName = Object.keys(type)[0];
      generatedPassword += selectionFuncArray[funcArrName]();
    }
    );
  }
  console.log(generatedPassword);
  var completePassword = generatedPassword.slice(0, passwordLength);
  return completePassword
}

// Write password to the #password input
function writePassword() {
  passwordLength = parseInt(prompt("Enter a password character length from 8-128"));

  if (passwordLength < 8 || passwordLength > 128) {
    writePassword();
  }

  upperCharInclude = confirm("Click 'OK' if you want to include uppercase characters in your password.");
  numsInclude = confirm("Click 'OK' if you want to include numbers in your password.");
  symbolsInclude = confirm("Click 'OK' is you want to include symbols in your password.");
  
  // password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Test code
// console.log(selectLower());
// console.log(selectUpper());
// console.log(selectNum());
// console.log(selectSymbol());
// console.log(generatePassword());