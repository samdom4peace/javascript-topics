// Date and Time in Different Countries
// Time zones: www.samdomforpeace.com/References/ASCII.html#specificCulture

// Declare a variable for the date object
var dateTimeNow = new Date();

// Declare the constant for the optional parameters

// Optional parameter for the State of Ohio campuses
// The time zone for the State of Ohio is the Eastern Time Time Zone...the same as the State of New York
const kentStateOhio = 
{weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "America/New_York"};

// Optional parameter for Kent State University Worldwide, Florence, Italy
const kentStateItaly = 
{weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "Europe/Rome"};

// Optional parameter for Kent State University Worldwide, Geneva, Switzerland
const kentStateSwitzerland = 
{weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "Europe/Zurich"};

// Optional parameter for Kent State University Worldwide, New Delhi, India
const kentStateIndia = 
{weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Calcutta"};

// Optional parameter for Kent State University Worldwide, Beijing, China
const kentStateChina = 
{weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Chongqing"};

// Display the current date and time in Kent State University, Ohio, USA
document.getElementById("dateTimeUnitedStates").innerHTML = 
"Greetings to our Kent State University colleagues in the United States: <br>" + 
dateTimeNow.toLocaleTimeString("en-US", kentStateOhio);

// Display the current date and time in Kent State University Worldwide, Florence, Italy
document.getElementById("dateTimeItaly").innerHTML = 
"Greetings to our Kent State University colleagues in Italy: <br>" + 
dateTimeNow.toLocaleTimeString("it-IT", kentStateItaly);

// Display the current date and time in Kent State University Worldwide, Geneva, Switzerland
document.getElementById("dateTimeSwitzerland").innerHTML = 
"Greetings to our Kent State University colleagues in Switzerland: <br>" + 
dateTimeNow.toLocaleTimeString("de-CH", kentStateSwitzerland);

// Display the current date and time in Kent State University Worldwide, New Delhi, India
document.getElementById("dateTimeIndia").innerHTML = 
"Greetings to our Kent State University colleagues in India: <br>" + 
dateTimeNow.toLocaleTimeString("hi-IN", kentStateIndia);

// Display the current date and time in Kent State University Worldwide, Beijing, China
document.getElementById("dateTimeChina").innerHTML = 
"Greetings to our Kent State University colleagues in China: <br>" + 
dateTimeNow.toLocaleTimeString("zh-CN", kentStateChina);