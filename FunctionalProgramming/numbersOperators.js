/* 
    Solve Questions (10.), (6.), (7.), and (23.) on the Numbers website:
    www.numbersandnotations.appspot.com/numbers.html
*/
// Declare variables to solve the questions
var answerQ10, answerQ6, answerQ7, answerQ23;

// Solve the questions
// Question (10.)
answerQ10 = (6 * 6) - (64 / (4 * 4)) * 7 - 5;

// Question (6.)
answerQ6 = Math.sqrt(188 + Math.sqrt(51 + Math.sqrt(169)));

// Question (7.) 
answerQ7 = Math.pow(Math.sqrt(0.7) + Math.sqrt(70), 2);

// Question (23.)
// Let us use a simplified approach to solve this question in order to avoid errors
var numeratorQ23 = Math.pow(Math.abs(-3 - 2), 2) + Math.pow(-1, 3);
var denominatorQ23 = 16 / 4 * 2 - 5;
answerQ23 = numeratorQ23 / denominatorQ23;

/*
    Use the document.getElementById('id') method to access each HTML span element by the id
    Ensure that you use the same id that you defined for each HTML span element
    Use the innerHTML property to write into the HTML output
*/
document.getElementById("answerQuestion10").innerHTML = answerQ10;
document.getElementById("answerQuestion6").innerHTML = answerQ6;
document.getElementById("answerQuestion7").innerHTML = answerQ7;
document.getElementById("answerQuestion23").innerHTML = answerQ23;

/* 
    Solve Question (1.) on the Percent Applications website:
    www.fractions-decimals-percents.appspot.com/percentApplications.html
*/
// First Approach: Assignment Operator: Use Multiple Variables
// Declare the variables and a constant
const serviceTip = 0.12;
var foodBill = 34.99;
var totalBill;

// Calculate the total bill
totalBill = serviceTip * foodBill;

// Round to two decimal places: First Appoach: toFixed() method
var approximateTotalBill = totalBill.toFixed(2);

// Print the total bill: exact and approximate
document.getElementById("exactTotalBillFirst").innerHTML = "$" + totalBill;
document.getElementById("approximateTotalBillFirst").innerHTML = approximateTotalBill;

// Second Approach: Compound Assignment Operators: Use a Single Variable
// Declare the variable
var totalCost = 0.12;                             // 12% tip
totalCost *= 34.99;                               // Compound Assignment Operators: service tip * food bill      

// Print the total cost: exact and approximate
document.getElementById("exactTotalCostFirst").innerHTML = totalCost;
document.getElementById("approximateTotalCostFirst").innerHTML = totalCost.toFixed(2);