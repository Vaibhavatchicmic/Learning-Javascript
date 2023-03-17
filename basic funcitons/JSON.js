//JSON is format for stroing and transporting data
//JavaScript Object Notation
//lightweight,language independent, self-describing
// eg 
txt=`[{
    "abc":[
        {"one":10.0,"two":"TWO"},
        {"three":true}
    ]
}]`
// format syntactically identical to the code for creating JS objects
// JSON Syntax Rules
            // Data is in name/value pairs
            // Data is separated by commas
            // Curly braces hold objects
            // Square brackets hold arrays(could be at top)
            // boolean values aren't enclosed in quotations marks
            // only property no methods
    //diff  // (JSON names require "double quotes"(not even single quotes) JS names do not)
    //diff  //no trailing coma
    //diff  //leading zeors are prohibited, decimal point must be followed by at least one digit, NaN and Infinity are unsupported
    //diff  //no comments

//covert a JSON string to JS object

//JS provide a global JSON object that has mthods available for converting between the two
//Converting a string to a native object is called deserialization, while converting a native object to a string so it can be transmitted across the network is called serialization.

// using JS build-in function JSON.parse() convert json string to an object
const obj=JSON.parse(txt);
console.log(obj)

//using json build in functio JSON.stringigy() convert object to json string
const str=JSON.stringify(obj)
console.log(str)


//response.json() is used fetch call which return a promise