function convertStrToNum(inputStr) {
    if (inputStr.length === 10) {
      convertedStr = "";
      inputStr = inputStr.toUpperCase();
      splittedStr = inputStr.split('');
  
      for (var i = 0; i < splittedStr.length; i++) {
          asciiVal = splittedStr[i].charCodeAt(0);
          if ((asciiVal >= 65) && (asciiVal <= 67)) { splittedStr[i] = "2"; }
          if ((asciiVal >= 68) && (asciiVal <= 70)) { splittedStr[i] = "3"; }
          if ((asciiVal >= 71) && (asciiVal <= 73)) { splittedStr[i] = "4"; }
          if ((asciiVal >= 74) && (asciiVal <= 76)) { splittedStr[i] = "5"; }
          if ((asciiVal >= 77) && (asciiVal <= 79)) { splittedStr[i] = "6"; }
          if ((asciiVal >= 80) && (asciiVal <= 83)) { splittedStr[i] = "7"; }
          if ((asciiVal >= 84) && (asciiVal <= 86)) { splittedStr[i] = "8"; }
          if ((asciiVal >= 89) && (asciiVal <= 92)) { splittedStr[i] = "9"; }
          //not a valid char, put NaN instead.
          if ((asciiVal < 65) || (asciiVal > 93)) {
            splittedStr[i] = "NaN";
            }
          convertedStr = convertedStr + splittedStr[i];
          }
        }
      else {
         convertedStr = "false";
       }
      return convertedStr;
  }
  
  a = convertStrToNum("L0ghthouse");
  a;