//Boolean object represents a truth value true or false
//There is also the primitive Boolean

//Any object including a Boolean object whose value is false, evaluates to true when passed to a conditional statement.
const x = new Boolean(false);
if(x){
    console.log("Boolean object false");//will execute
}
//but
const y= false;
if(y){
    console.log("Boolean primitive false");//will not run
}

// do not use the Boolean() constructor with new to convert a non-boolean value to a boolean value
const bad= new Boolean(false);

// use this instead
const good = Boolean(false);
// or
const good2= !!Boolean(false);

console.log("log 3 :",bad,good,good2);


//if you specify any object including a Boolean oject wholse value is false as the initial value of Boolean object, the new Boolean object has a value of true;
const myFalse = new Boolean(false);   // initial value of false
const g = Boolean(myFalse);           // initial value of true
const myString = new String('Hello'); // string object
const s = Boolean(myString);

console.log("log 4 :",myFalse,g,myString,s)

//Boolean coercion (coercion means implicit type conversion)
    //Boolean are returned as is
    //undefined turns into false
    //null turns into false
    //0,-0,NaN turns into false, other numbers turns into true
    //symbols turns into ture
    //All objects become true****
//unlike other type conversions boolean coercion does not attempt to convert objects to primitives 
//there are only a handful of vales that get coerced to false these are called falsy values other values are called truthy values
//some values are loosely equal to ture like [] is truthy(it is a object) but when comparing with false return ture([]==flase is ture)