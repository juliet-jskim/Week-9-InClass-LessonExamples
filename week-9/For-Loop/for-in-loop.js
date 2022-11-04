var person = {fname:"Kenny", lname:"James", age:22};
var text = "";

for (var x in person) {
    text += person[x] + ""; // this is a shorter way for doing text = text + person etc.. (you just write out += instead)
}

console.log(person);
console.log(text);

/**
 * this contains objects and keys
 */


var computer = {
    brand:"Microsoft", 
    laptop:"Surface Laptop 4", 
    screen:"13.5\""} 
    //inches are represented as double qupoutes, so use a backslash so they don't interfere with the codeand quotations.
var sentence = "I have the ";
for(var item in computer) {
    if(item == "brand") {
        sentence += computer.brand;
    }  else if (item == "laptop") {
        sentence += computer.laptop + ".";
        break;
    } else {
        //
    }
    
     if(item =="brand") {
        sentence += " ";

     }
}
 console.log(sentence);
//I have the Microsoft Surface Laptop 4.


