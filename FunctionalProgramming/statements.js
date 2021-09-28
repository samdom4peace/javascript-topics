// Decision-making Statements

// Examples 1 and 2: What is Today? 
// For Example 1, use Multiple If-s statement
// For Example 2, use the Switch statement
// Ask students their preference

// Declare the variable for the Date object
var dateTimeToday = new Date();

// Declare the variable to get only the day from the Date object
// This returns the number (0 - 6) corresponding to the day (Sunday - Saturday) 
var dayToday = dateTimeToday.getDay();

// Example 1: Print the day for today using Multiple If-s Statement 
if(dayToday == 0)
{
    document.getElementById("today").innerHTML = "Sunday";
} 

if(dayToday == 1)
{
    document.getElementById("today").innerHTML = "Monday";
} 

if(dayToday == 2)
{
    document.getElementById("today").innerHTML = "Tuesday";
} 

if(dayToday == 3)
{
    document.getElementById("today").innerHTML = "Wednesday";
} 

if(dayToday == 4)
{
    document.getElementById("today").innerHTML = "Thursday";
} 

if(dayToday == 5)
{
    document.getElementById("today").innerHTML = "Friday";
} 

if(dayToday == 6)
{
    document.getElementById("today").innerHTML = "Saturday";
} 

// Example 2: Print the day for today using Switch Statement
// Let us declare another id for today's day for the HTML
// This is because ids can only be used one time
switch (dayToday) 
{
    case 0:
        document.getElementById("whatDayToday").innerHTML = "Sunday";
        break;

    case 1:
        document.getElementById("whatDayToday").innerHTML = "Monday";
        break;

    case 2:
        document.getElementById("whatDayToday").innerHTML = "Tuesday";
        break;

    case 3:
        document.getElementById("whatDayToday").innerHTML = "Wednesday";
        break;

    case 4:
        document.getElementById("whatDayToday").innerHTML = "Thursday";
        break;

    case 5:
        document.getElementById("whatDayToday").innerHTML = "Friday";
        break;

    case 6:
        document.getElementById("whatDayToday").innerHTML = "Saturday";
        break;

    default:    // You can leave the default as blank
}

// Example 3: Switch Statement: Continents of the World
// Declare a string data type variable and initialize it to NORTHAMERICA
var continent = "NORTHAMERICA";

/* 
    Print the continent that has the country with the inscription: "IN GOD WE TRUST"
    The country is the United States of America
    It is a country in the continent of North America
    Please note that each case string label should not have any space (it should be only one word)
*/

switch (continent) 
{
    case "AFRICA":
        document.getElementById("worldContinents").innerHTML =
            "Africa: The continent that has been, and is still exploited the most. <br>" +
            "The notable country is Nigeria. <br>" +
            "Nigeria is a rich country but many Nigerians are poor.";
        break;

    case "ANTARCTICA":
        document.getElementById("worldContinents").innerHTML = "The continent of Antarctica";
        break;

    case "ASIA":
        document.getElementById("worldContinents").innerHTML = "The continent of Asia";
        break;

    case "AUSTRALIA":
        document.getElementById("worldContinents").innerHTML = "The continent of Australia";
        break;

    case "EUROPE":
        document.getElementById("worldContinents").innerHTML = "The continent of Europe";
        break;

    case "NORTHAMERICA":
        document.getElementById("worldContinents").innerHTML =
            "The continent that has the country with the inscription: <br>" +
            "IN GOD WE TRUST is North America. <br>" +
            "The country is the United States of America.";
        break;

    case "SOUTHAMERICA":
        document.getElementById("worldContinents").innerHTML = "The continent of South America";
        break;

    default:
        document.getElementById("worldContinents").innerHTML =
            "I am not of this world. <br>" +
            "I do not identify with any continent.";
}

// Repetitive Statements

// Example 1: Multiplication Tables of Numbers 3, 7, 12 using For Loop, While Loop, and Do-While Loop
// Use: For-Loop for Number 3; While Loop for Number 7; Do-While Loop for Number 12
// Declare the constants and the variable
var firstMultiplier = 3, secondMultiplier = 7, thirdMultiplier = 12;
var multiplicand;

// For Loop for the Multiplication Table of Number 3
for (multiplicand = 1; multiplicand <= 12; multiplicand++)
{   document.getElementById("Table3").innerHTML += 
    firstMultiplier + " * " + multiplicand + " = " + (firstMultiplier * multiplicand) + "<br>";
}

// While Loop for the Multiplication Table of Number 7
multiplicand = 1;
while (multiplicand <= 12)
{
    document.getElementById("Table7").innerHTML += 
    secondMultiplier + " * " + multiplicand + " = " + (secondMultiplier * multiplicand) + "<br>";
    multiplicand++;
}

// Do-While Loop for the Multiplication Table of Number 12
multiplicand = 1;
do
{
    document.getElementById("Table12").innerHTML +=
    thirdMultiplier + " * " + multiplicand + " = " + (thirdMultiplier * multiplicand) + "<br>";
    multiplicand++;
}
while (multiplicand <= 12);

// Example 2: Print Number Types using Do-While Loop, While Loop and For Loop
// Print on the same line. Separate each number with a comma
// Declare the variable
var number;

// Do-While Loop: Print the first ten positive integers
number = 1;
do
{
    document.getElementById("positiveIntegers").innerHTML += number + ", ";
    number++;
}
while (number <= 10);

// While Loop: Print the even numbers between 1 and 20 (both ends are exclusive)
number = 2;
while (number < 20)
{
    if (number % 2 == 0)
    {
        document.getElementById("evenNumbers").innerHTML += number + ", ";
    }
    number++;
}

// For Loop: Print the perfect squares between 1 and 100 (both ends are inclusive)
for (number = 1; number <= 100; number++)
{
    // Declare a variable for the perfect square
    var squareNumber = Math.pow(number, 2);

    if(squareNumber <= 100)
    {
        document.getElementById("perfectSquares").innerHTML += squareNumber + ", ";
    }
}

// Branching Statements
