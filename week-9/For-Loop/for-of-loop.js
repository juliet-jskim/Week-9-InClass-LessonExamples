var cables = ["hdmi", "microb", "type-c", "type-a"];
var container = "";

for (var electronics of cables) {
    container += electronics + "\n"
}

console.log(container);

/**
 * can be for both objects and arrays
 */

/**
 * {fname: 'Kenny, lname:'James', age:22}
 * 
 * Kenny James 22
 */


var weathers = ["sunny", "rainy", "cloudy"];
var words = "";

for (var weather of weathers) {
    if(weather == "cloudy") {
        words += weather;
        break; //this line of if statements can remove the space at the end of the iteration
    }
    words += weather + "\n"; // this /n code presetns the line of output as a list and gives a space inbetween each one. 
}

console.log(words);
/**
 * sunny 
 * rainy 
 * cloudy
 */