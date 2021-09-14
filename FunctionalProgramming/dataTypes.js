/* Variables and Data Types
    What do you know about the State of Ohio?
*/

// Define the variables
// Character data type. The U.S State of Ohio begins with the letter: O
let state = 'O';

// Integer data type. The State of Ohio is number (35.) in the alphabetical listing of U.S states
var numState = 35;

// Float data type. Percent of people living in poverty according to the 2000 Census data
let povertyRate = 13.9;

// Double data type. Land area in square miles according to the 2000 Census data
var landArea = 40860.69;

// String data type. The Great Seal of the State of Ohio
let motto = "WITH GOD ALL THINGS ARE POSSIBLE.";

// Boolean data type. Of course, it is true. Taken from Matthew 19:26
var isMottoTrue = true;

/*
    Use the document.getElementById('id') method to access each HTML paragraph element by the id
    Ensure that you use the same id that you defined for each HTML paragraph element
    Use the innerHTML property to write into the HTML output
    Write sentences that use the variables
*/
document.getElementById("stateOhio").innerHTML = "The State of Ohio begins with the letter: " + state;

document.getElementById("numStateOhio").innerHTML = 
"It is number " + numState + " in the alphabetical listing of U.S states.";

document.getElementById("povertyRateOhio").innerHTML = 
"It has a poverty rate of " + povertyRate + "% according to the 2000 Census data.";

document.getElementById("landAreaOhio").innerHTML = 
"The land area is " + landArea + " square miles according to the 2000 Census data.";

document.getElementById("mottoOhio").innerHTML = "The motto and seal is: " + motto;

document.getElementById("isMottoTrue").innerHTML =
"The motto and seal is " + isMottoTrue + ", and it is taken from the Bible passage of Matthew 19:26";