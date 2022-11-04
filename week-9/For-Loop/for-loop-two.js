var text = "";
var total = 0;

for(var i =0; i < 6; i++) {
    if (i == 3) {
        text = "finished";
        break; //this breaks out of the loop
    } else if (i == 5) {  // whats wrong with this line: this line will never happen, because in line 5, it will break out of the loop when reached 3 
        i++;
    } else {
        //
    }
    total += i;
}

console.log(text + " at the number " + i + " with a total of " + total);

