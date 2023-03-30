//JSON is format for storing and transporting data
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
        // Syntax
        // JSON.parse(text)
        // JSON.parse(text, reviver)

        // reviver if a function prescribes how each value originally produced by parsing is transformed before being returned.
        // has two parameters key and value

//using json build in functio JSON.stringigy() convert object to json string
const str=JSON.stringify(obj)
console.log(str)

    //undefined, Function, symbol are omitted(if in object) or changes to null(in array), Infinity,NaN,null are all ocnsidered null

    // Syntax
    // JSON.stringify(value)
    // JSON.stringify(value, replacer)
    // JSON.stringify(value, replacer, space)

    //replacer is a function that alters the process, or an array of strings and numbers that specifies properties of value to be included in the output. 
        // As an array, its elements indicate the names of the properties in the object that should be included in the resulting JSON string.

        // As a function, it takes two parameters: the key and the value being stringified, the current property value will be replaced with the replacer's return value for stringification
    
    //space could be number or string for indentation
    
    //Defining toJSON() for an object allows overriding its serialization behavior.

    //trow type error when attempts to encode an boject with circular reference.

//response.json() is used fetch call which return a promise