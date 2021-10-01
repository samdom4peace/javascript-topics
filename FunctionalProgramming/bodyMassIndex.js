/* 
    Given: first name, last name, weight (pounds), height (inches)
    To: Calculate and Interpret the Body Mass Index (BMI)
    Give advice accordingly based on the BMI
    Multiple If-s statements are used for all the conditional statements
*/
/* 
    Get the form by id when the user clicks the submit "type" button (onclick event)
    Remember that in the HTML form, the button onclick event is the same as the form id
    The method used is the addEventListener() Method
*/
document.getElementById("BMICalculator").addEventListener("submit", BMICalculator);

/*
    Create the function that will accept the user input, process it, and display the output 
    The function name should be the same name as the form id
    The parameter should be "event" or any simple appropriate name
*/
function BMICalculator(event) 
{
    // preventDefault method prevents the browser from clearing user-input entries when the user submits the form
    event.preventDefault();

    // Declare the variables for the user-input values
    // It is better to use the same name for each input as the id
    var firstName = document.getElementById("firstName").value,
        lastName = document.getElementById("lastName").value,
        weight = parseFloat(document.getElementById("weight").value, 10),
        height = parseFloat(document.getElementById("height").value, 10);

        document.getElementById("userFirstName").innerHTML = firstName;
        document.getElementById("userLastName").innerHTML = lastName;

    // Declare the output variables
    var userErrorMessage, userBMI, interpretBMI, adviceBMI;

    // Handle user-input errors for the weight and the height
    // Display error message and do not allow the form to process user input
    if ((weight <= 0) && (height <= 0)) 
    {
        userErrorMessage = "The weight and the height must be positive.";
        document.getElementById("userErrorMessage").innerHTML = userErrorMessage;
        return;
    }

    if(weight <= 0)
    {
        userErrorMessage = "The weight must be positive.";
        document.getElementById("userErrorMessage").innerHTML = userErrorMessage;
        return;
    }

    if(height <= 0)
    {
        userErrorMessage = "The height must be positive.";
        document.getElementById("userErrorMessage").innerHTML = userErrorMessage;
        return;
    }
        
    // Calculate the BMI
    // Round the value to one decimal place
    userBMI = (weight / Math.pow(height, 2)) * 703;
    document.getElementById("userBMI").innerHTML = userBMI.toFixed(1);

    // Interpret the BMI
    // Advise the user based on the BMI
    if(userBMI < 18.5)
    {
        interpretBMI = "underweight.";
        adviceBMI = "Eat more proteins.";
    }

    if((userBMI >= 18.5) && (userBMI <= 24.9))
    {
        interpretBMI = "normal weight.";
        adviceBMI = "Keep it up.";
    }

    if((userBMI > 24.9) && (userBMI <= 29.9))
    {
        interpretBMI = "overweight.";
        adviceBMI = "Do more exercise.";
    }

    if(userBMI > 29.9)
    {
        interpretBMI = "obese.";
        adviceBMI = "You need a personal trainer.";
    }

    document.getElementById("interpretBMI").innerHTML = interpretBMI;
    document.getElementById("adviceBMI").innerHTML = adviceBMI;
}

// Declare the function: (function name: erase) to clear all entries when the user clicks the Clear button
// As discussed in Module 1, we do not use "clear" as the function name to avoid conflict with the set.clear() method
function erase()
{
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("userFirstName").innerHTML = "";
    document.getElementById("userLastName").innerHTML = "";
    document.getElementById("userErrorMessage").innerHTML = "";
    document.getElementById("userBMI").innerHTML = "";
    document.getElementById("interpretBMI").innerHTML = "";
    document.getElementById("adviceBMI").innerHTML = "";
}