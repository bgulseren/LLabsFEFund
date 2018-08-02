var numbers = [0];

for (var i = 0; i < 100; i++) {
    if ((i+1) % 3 === 0) {
      numbers[i] = "fizz";
      if ((i+1) % 5 === 0) {
        numbers[i] = numbers[i]+"buzz";
      }
    }
    else {
      if ((i+1) % 5 === 0) {
        numbers[i] = "buzz";
        }
        else {
          numbers[i] = i+1;
        }
      }
    }
console.log(numbers);