// Given: The Human Body Temperature in Celsius
// To Calculate: The Fahrenheit Temperature
function Celsius2Fahrenheit (celsiusTemp)       
{
    var fahrenheitTemp = (9 * celsiusTemp) / 5 + 32;
    document.getElementById("convertedFahrenheitTemp").innerHTML =
    "The Fahrenheit temperature of " + celsiusTemp + "&deg;C is " + fahrenheitTemp + "&deg;F";
}

/*
    What is the normal body temperature of a human being? It is about 37°C
    What is that temperature in Fahrenheit?
    Call the function: Celsius2Fahrenheit and pass in 37 as the argument
*/
Celsius2Fahrenheit(37);

// Given: The Human Body Temperature in Fahrenheit
// To Calculate: The Celsius Temperature
function Fahrenheit2Celsius(fahrenheitTemp)
{
    var celsiusTemp = 5 * (fahrenheitTemp - 32) / 9;
    return "The Celsius temperature of " + fahrenheitTemp + "&deg;F is " + celsiusTemp + "&deg;C";
}

/*
    What is the normal body temperature of a human being? It is about 98.6°F
    What is that temperature in Celsius?
    Call the function: Fahrenheit2Celsius and pass in 98.6 as the argument
    Assign the called function to the DOM
*/
document.getElementById("convertedCelsiusTemp").innerHTML = Fahrenheit2Celsius(98.6);