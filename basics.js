// do from mdn
// js engins:
/**
 * V8 :chrome,opera,edge
 * SpiderMonkey :firefox
 * Chakra :ID
 * Nitro: Safari
 */
// in html: <script>

// </script>
// or<script src="path"></script> //can't have both only

'use strict'// must be at the top of script or at the beginning of a function body, fully enable all features of modern JavaScipt, enabled implicitly by including modern features, default variable become let
    // in Strict Mode undeclared variables are not automatically global
// syntax: set of rules how programs are constructed
    //fixed values are called literrals
    // variable values are called variables
    //operators -(+ - * /): arithmatic, =:assignment
    //expression: combination of vlaues, variables, and operators, which computes to a value, computation is called an evaluation
    //keywords: used to indentify actions to be performed
    //Identifiers: javascript names, used to name variables and keywords and functions Must begin with A-Z or a-z ,$ or _ subsequent characters may be letters, digits, underscores, or dollar signs, 
                    // $ is often used as an alias for the main function in a library.
                    // varibles staring with _ are conventionally used as an alias for private variables , 
                    // non-Latin letters are also allowed but not recommended
    //Unicode caracter set : JS uses the unicode character set covers almost all the characters, punctuations, and symbols

//Comments
    // code after double slashes //(Single line comments) or between /* and  */(Multi line comments) treated as a comment, are ignored not executed
// variables: containers for storing data
/**
 * There are 8 basic data types: changeble in JS for a variable therefore called dynamically typed(there exist data types but variables are not bound to any of them) 
 *  1. number: both integers and floating point numbers,
 *             beside regular numbers, thee are so-called "special numeric values" : Infinity, -Infinity(any really huge no.>64bit(>2^53-1) become Infinity) and NaN( NaN propagats to whole result eg. NaN+1 become NaN, one exception NaN**0 is 1)
 *             Mathematical operations are safe in JS we can do anythig, divide by zero, treat non-numeric strings as number etc, not cause fatal error get NaN in worst case
 *             64 bit size
 *             can use underscore _ as separator: let billion= 1_000_000_000;(play role of synctactic sugar)
 *             for large no.s use 88e10(89 and 10 zeros) number after e specifies zeros count , 1e-6 for 0.000001
 *             0xff or 0xFF: 255 (hexadecimal)
 *             0b11111111: 255 in binary
 *             0o377: octal of 255
 *             num.toString(base) return a srtring representation of num in give base
 *                  12345..toString(2):( =(1234).toString(2) ) two dot used to directly call method on number
 * 
 *              there is loss of precision alert( 0.1 + 0.2 == 0.3 ); // false
 *  2. bigInt: n at the end(1234393939939203n is BigInt), cannot have decimals, arithmatic between a BigInt and a Number is not allowed(type conversion lose information), can also be written in hexadecimal,octal or binary
 */
let hex=0x393939933993939939n;
let oct=0o141217416734756734n;
let bin = 0b101010101001010111111111111111110000000000n;
/*
 *  3. string : "abc" 'abc' and `abc${expression}` , no character type in JS string may consist of zero or one or many  
 *  4. boolean : true or false
 *  5. null : empty or does not exist
 *  6. undefined : default initial value for unassigned things, function with no return return undefined
 *  7. object : special type
 *  8. symbol : used to create unique identifires for objects (Symbol.for() and Symbol.keyFor() methods)
 * 
 *  typeof will give type as first letter small('number' not 'Number') but use Number() or String() to convert type explicitly
 *  typeof undefined // "undefined"

    typeof 0 // "number"

    typeof 10n // "bigint"

    typeof true // "boolean"

    typeof "foo" // "string"

    typeof Symbol("id") // "symbol"

    typeof Math // "object"  

    typeof null // "object"  //officially recognized error

    typeof alert // "function" //there is no special function type in JS , belong to object type but typeof treats them differently, isn't correct but convenient in practice
    
    typeof is an operator not a funciton even typeof(x) is just () around x
*/ 
console.log(typeof 'abcd')//typeof operator , two exception
    console.log(typeof null) //object, error in language
    console.log(typeof function(){})//function, functions are treated specially
/**
 *1 var :function scoped, variables declared with var are "hoisted", at the top level create a property, could be redeclared
 In global scope the var declaration and function declarations create global object properites,In global scope let declarations, const declarations and Class declarations are also global that are not properties of global object,
 */     console.log(x) //undefined
        var x=5;
        console.log(x) //5
        
        {
            var var_var=10
        }
        console.log(var_var)

        var x=6
        console.log(x)

        // If you let-declare a variable that has the same name as a parameter, you get a static (load-time) error:

        function func(arg) {
            let arg; // static error: duplicate declaration of `arg`//work for var
        }
        // Doing the same inside a block shadows the parameter:

        function func(arg) {
            {
                let arg; // shadows parameter `arg`
            }
        }

    
        //If parameter have default values, they are treated like a sequence of let statements and are subject to temporal dead zones
        // OK: `y` accesses `x` after it has been declared
            function foo(x=1, y=x) {
                return [x, y];
            }
            foo(); // [1,1]

            // Exception: `x` tries to access `y` within TDZ
            function bar(x=y, y=2) {
                return [x, y];
            }
            bar(); // ReferenceError
 /* 
 * Added in ES6
 *2  let :block scoped, varaible declared by let cannot be redeclared and must be declared befre use, bind to global variable (delete with delete keyword)
 */
 let arr = [];
 for (let i=0; i < 3; i++) {
     arr.push(() => i);
 }
 console.log(arr.map(x => x())); // [0,1,2] //In loops we get a fresh binding for each iteration if we let-declare a variable,(for, for-in and for-of), but var declaration leads to a single binding for the whole loop and same for const
// var_def=10
// delete var_def;
// console.log(var_var)
 /*
 *  */      //console.log(y) //ReferrenceError :Cannot access 'y' before initialization
            let y=5;
            console.log("y:",y) //5 but not execute becasue of previous lines

            if(true)
            {
                let let_var=10
            }
            // console.log(let_var) //error
/**          
 *3  const : same as let but not change
 */
// const does not affect whether the value of a constant itself is mutable or not , for an object we can change object properties
const obj={};
obj.a=10;
console.log(obj);

//obj = {} // it will give Typeerror

// if we wanted to obj to truly be a constant, we have to freeze its value
Object.freeze(obj)
// obj.b=20; cause TypeError


 /*
 * 
 * general rule always delcare variables with const, if you think the value of the variable can change use let
 *
 * 4 using nothing: make variable global, bad practice and would cause an error in strict mode
 */

// Operators:
        // types: unary binary
        // math : + - * / % ** (with + if there is string result will be string if first two numbers then these two numbers are added calculated left to right)
        //  single + operator(unary before variable) : does nothing to number but if the operand is not number thn converts it into a number (+true => 1 , +'' => 0) same as Number(...) but shorter 
        // Precedence	Name	        Sign
                // …	…	…
                // 14	unary plus	     +
                // 14	unary negation	 -
                // 13	exponentiation	 **
                // 12	multiplication	 *
                // 12	division	     /
                // 11	addition	     +
                // 11	subtraction	     -
                // …	…	…
                // 2	assignment	     = (x=value writes the value into x and then returns it)


// Interation : pause script execution and don't allow the visitor to interact with the page
        // alert("hello") //need to press ok

        // result = prompt(title,dafault); //to input text default is (optional) initial value of input field

        // result = confirm(question); //Ok and Cancel


//control flow
    // loops c style while, do whle, and for loop
    //switch : uses === for comparisons



// functions
function funname(){ //function declaration , if in a if block this can only be use in that block so use function expression
    ;
}
 /**
  * function is a value in javascript
  */
    let funname2= function(){  //function expression , this function could only be used after this line
        console.log("this is funname2")
    }
    funname2()

    //function callback: sending function as parameter to another function

    // Arrow funciton :easy way of writing function expression
    let funcname3 =(arg1,arg2,arg3)=> arg1+arg2+arg3;
    console.log(funcname3(1,2,3))

    // function parameters and arguments: parameters are the names listed in the function definitonn but arguments are the real values passed to /received by the function
            //no data type
            //no type checking
            //not check the number of arguments
        //if functio is called with missing arguments then missing values are set to undefined

        // can have default value
        function funcname4(x,y=3){
                return x+y;
        }

        // functionn rest parameters(...) allow a funciton to treat an indefinite number of arguments as an array
        function function4(...args){
            let sum=0;
            for(let arg of args)sum+=arg;
            return sum;
        }
        console.log("function4() :",function4(1,2,3,4,5))

        //argument object
        function sum(){
            let sum=0;
            for(let arg of arguments){
                sum+=arg;
            }
            return sum;
        }
        console.log("sum() :",sum(1,2,3,4,5))



    // regex :syntax: /pattern/modifiers(s)
                                // modifiers-> g for global match(find all matches rather than stopping after the first match), 
                                            // i or case-insensitive matching
                                            // m to perform mulitiline matching
//stirng manipulation
    //length
    let text="abcdefghijk"
    console.log(text.length)

    //Extracting parts
    //1 slice
    console.log(text.slice(2,8))//take start position and end position as parameters
    console.log(text.slice(7))//only first parameter rest at end
    console.log(text.slice(-7))
    console.log(text.slice(-12,-6))

    // 2 substr
    // 3 substring()

    // replacing string content
    console.log(text.replace("abc","xyz"))//nto change the string but return a new replaces only the first match, case sensitive by default, can use regular expression
    // regex to replace caseinsensitive /pattern/i ,no quotes
    // regex to replace all matches /patterrn/g
    






// random
console.log(Math.random()) //return a random no. beween 0(inclusive), and 1 (exclusive)
console.log(Math.floor(Math.random()*100))//random integer from 0 to 99
console.log(Math.floor(Math.random()*101))//random integer from 0 to 100

console.log(Math.floor(Math.random()*(35-12+1))+12)//generate random no betwenn 12 and 35


// file



// Error handling
/**
 * Any error not handled haults the call stack
 */
try{
    throw 10; //to create a custom error, we can throw an exception as String, Number, Boolean or Object
}
catch(err){
    console.log("error :",err);
}
finally{
    console.log("always executes");
}

// Error Object
    // JS has a built in error object that provides error information when an error occurs , provides two useful properties : name and message
    // Six different values can be returned by the error name property:

    //     Error Name	Description
    //     EvalError	An error has occurred in the eval() function
    //     RangeError	A number "out of range" has occurred
    //     ReferenceError	An illegal reference has occurred
    //     SyntaxError	A syntax error has occurred
    //     TypeError	A type error has occurred
    //     URIError	An error in encodeURI() has occurred