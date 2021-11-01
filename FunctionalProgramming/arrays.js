/*
    Program to calculate the Measures of Center of data
    Measures of Center are: Mean, Median, Mode, and Midrange
    Formulas: www.descriptive-statistics.appspot.com/#formulasMeasuresCenter
*/

// EventListener() method when the user clicks the submit type (Calculate) button
document.getElementById("measuresCentralTendency").addEventListener("submit", measuresCentralTendency);

// Function to accept user-input, process it, and display the output
// Function name must be the same name as the form id
function measuresCentralTendency(event) 
{
    event.preventDefault();

    // Declare the variables
    var dataset1 = document.getElementById('dataset1').value,     // data input by the user (treated as array of strings)
        data1 = dataset1.split(', '),                                                      // split method to separate each value by a comma
        sampleSize1 = data1.length,                                                  // length of the dataset array               
        sum1 = 0,                                                                               // initialize the sum
        mean,                                                                                     // to calculate the mean
        dataSort1 = data1.sort(function (a, b) {return a - b;}),     // sort the data array because of the median and midrange
        median,                                                                                  // to calculate the median
        mode,                                                                                     // to calculate the mode
        lowest,                                                                                    // to calculate the minimum value of the dataset
        highest,                                                                                   // to calculate the maximum value of the dataset
        midrange;                                                                               // to calculate the midrange

        // Calculate the mean
        for (var value = 0; value < sampleSize1; value++)
        {
            sum1 += parseFloat(data1[value]);           // Convert the array of strings to array of floats
            mean = sum1 / sampleSize1;
        }

        // Display the mean
        document.getElementById("mean").value = mean;

        // Calculate the median
        median = (dataSort1[Math.floor((sampleSize1 - 1)/2)] * 1 + dataSort1[Math.ceil((sampleSize1 - 1)/2)] * 1)/2;

        // Display the median
        document.getElementById("median").value = median;

        // Calculate the mode
        // Because the mode can be non-modal, unimodal or multimodal, 
        // we shall use the Math.js library: https://cdnjs.cloudflare.com/ajax/libs/mathjs/4.0.0/math.min.js
        mode = math.mode([dataSort1]);

        // Display the mode
        document.getElementById("mode").value =  mode;

        // Calculate the midrange
        lowest = parseFloat(dataSort1[0]);                 // first value of the sorted dataset array: lowest value
        highest = parseFloat(dataSort1[sampleSize1 - 1]);   // last value of the sorted dataset array: highest value
        midrange = (lowest + highest) / 2;
        
        // Display the midrange
        document.getElementById("midrange").value = midrange;
}

/*
    Program to calculate the Measures of Spread of data
    Measures of Spread are: Range, Variance, and Standard Deviation
    Formulas (1st Formula): www.descriptive-statistics.appspot.com/#formulasMeasuresSpread
*/

// EventListener() method when the user clicks the submit type (Calculate) button
document.getElementById("measuresSpread").addEventListener("submit", measuresSpread);

// Function to accept user-input, process it, and display the output
// Function name must be the same name as the form id
function measuresSpread(event) 
{
    event.preventDefault();

    // Declare the variables
    var dataset2 = document.getElementById('dataset2').value,     // data input by the user (treated as array of strings)
        data2 = dataset2.split(', '),                                                      // split method to separate each value by a comma
        sampleSize2 = data2.length,                                                  // length of the dataset array               
        sum2 = 0,                                                                               // initialize the sum
        average,                                                                                  // to calculate the mean
        dataSort2 = data2.sort(function (a, b) {return a - b;}),         // sort the dataset array because of the range
        min,                                                                                        // to calculate the minimum value of the dataset
        max,                                                                                        // to calculate the maximum value of the dataset
        range,                                                                                     // to calculate the range
        difference = [],                                                                       // array of the differences (deviations)
        differenceSquared = [],                                                          // array of the square of the differences
        sumDifferenceSquared = 0,                                                   // initialize the sum of the square of the differences
        variance,                                                                                 // to calculate the variance
        standardDeviation;                                                                 // to calculate the sample standard deviation                                                              

        // Calculate the range
        min = parseFloat(dataSort2[0]);                               // first value of the sorted dataset array: lowest value
        max = parseFloat(dataSort2[sampleSize2 - 1]);       // last value of the sorted dataset array: highest value
        range = max - min;
        
        // Display the range
        document.getElementById("range").value = range;

        // Calculate the average
        for (var value = 0; value < sampleSize2; value++)
        {
            sum2 += parseFloat(data2[value]);           // Convert the array of strings to array of floats
            average = sum2 / sampleSize2;
        }

        // Calculate the variance and the standard deviation
        for(var value = 0; value < sampleSize2; value++)
        {
            difference[value] = parseFloat(data2[value] - average);             // array of the differences (deviations)
            differenceSquared[value] = Math.pow(difference[value], 2);    // array of the square of the differences
            sumDifferenceSquared += differenceSquared[value];       // sum all the values of array of squares of differences
            variance = sumDifferenceSquared / (sampleSize2 - 1);            // calculate the sample variance
            standardDeviation = Math.sqrt(variance);                                // calculate the sample standard deviation
        }

        // Display the variance and standard deviation
        document.getElementById("variance").value = variance;
        document.getElementById("standardDeviation").value = standardDeviation;
}

/*
    Program to calculate the Measures of Position of data
    Measures of Position are: Minimum, Lower Quartile, Middle Quartile, Upper Quartile, Maximum
    Formulas: www.descriptive-statistics.appspot.com/#formulasMeasuresPosition
*/

// EventListener() method when the user clicks the submit type (Calculate) button
document.getElementById("measuresPosition").addEventListener("submit", measuresPosition);

// Function to accept user-input, process it, and display the output
// Function name must be the same name as the form id
function measuresPosition(event) 
{
    event.preventDefault();

    // Declare the variables
    var dataset3 = document.getElementById('dataset3').value,         // data input by the user (treated as array of strings)
        data3 = dataset3.split(', '),                                                          // split method to separate each value by a comma
        sampleSize3 = data3.length,                                                      // length of the dataset array               
        dataSort3 = data3.sort(function (a, b) {return a - b;}),              // sort the data array in ascending order
        minimum,                                                                                   // to calculate the minimum value of the dataset
        maximum,                                                                                  // to calculate the maximum value of the dataset
        lowerQuartile,                                                                            // to calculate the lower quartile
        middleQuartile,                                                                          // to calculate the middle quartile
        upperQuartile,                                                                            // to calculate the upper quartile
        sampleSize3half = sampleSize3 / 2,                                          // divide sample size in two
        firstPart,                               // first part of the formula used in the calculation of the lower and upper quartiles
        secondPart;                          // second part of the formula used in the calculation of the lower and upper quartiles

        // Calculate the minimum and the maximum
        minimum = parseFloat(dataSort3[0]);                                       // minimum value of the sorted dataset array
        maximum = parseFloat(dataSort3[sampleSize3 - 1]);               // maximum value of the sorted dataset array

        // Display the minimum and the maximum
        document.getElementById("minimum").value = minimum;
        document.getElementById("maximum").value = maximum;

        // Calculate the middle quartile (median) for all sample sizes (odd and even)
        middleQuartile = parseFloat((dataSort3[Math.floor((sampleSize3 - 1)/2)] * 1 + 
        dataSort3[Math.ceil((sampleSize3 - 1)/2)] * 1)/2);

        // Used in the calculations of the lower and upper quartiles
        firstPart = Math.floor((sampleSize3half - 1)/2);
        secondPart = Math.ceil((sampleSize3half - 1)/2);

        // Calculate the lower quartile for an even sample size
        if(sampleSize3 % 2 === 0)           // definition of an even number
        {
            for (var value = 0; value < sampleSize3half; value++)
            {
                lowerQuartile = parseFloat((dataSort3[firstPart] * 1 + dataSort3[secondPart] * 1)/2);
            }
        }

        // Calculate the lower quartile for an odd sample size
        if(sampleSize3 % 2 !== 0)           // definition of an odd number
        {
            lowerQuartile = parseFloat(dataSort3[Math.floor(0.25 * sampleSize3)]);
        }

        // Calculate the upper quartile for an even sample size
        if(sampleSize3 % 2 === 0)           // definition of an even number
        {
            var dataSort3reverse = data3.sort(function(c, d) {return d-c;});    // sort the data array in descending order
                
            for (var value = 0; value < sampleSize3half; value++)
            {         
            upperQuartile = parseFloat((dataSort3reverse[firstPart] * 1 + dataSort3reverse[secondPart] * 1)/2);
            }
        }

        // Calculate the upper quartile for an odd sample size
        if(sampleSize3 % 2 !== 0)           // definition of an odd number
        {
            upperQuartile =parseFloat(dataSort3[Math.floor(0.75 * sampleSize3)]);
        }
        
        // Display the quartiles
        document.getElementById("lowerQuartile").value = lowerQuartile;
        document.getElementById("middleQuartile").value = middleQuartile;
        document.getElementById("upperQuartile").value = upperQuartile;
}