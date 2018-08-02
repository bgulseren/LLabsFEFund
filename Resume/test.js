function checkAge(age) {
    if (age > 17) {
        console.log("You can drive");
    }
    else {
        console.log("You can't drive");
    }
}

checkAge(20);


//objects
var myPet = {
    name: "Wednesday",
    breed: "cat",
    age: 12
}

myPet.name;

//arrays
var pets = ["Pudge", "Wed", "Camden"];

pets[0] // "Pudge"
pets[2] // "Camden"

  //you can load an array with different types, elements do not have to be same type.
