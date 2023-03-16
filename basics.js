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

'use strict'// must be at the top of script or at the beginning of a function body, fully enable all features of modern JavaScipt, enabled implicitly by including modern features

// variables
/**
 * There are 8 data types:
 *  number
 *  bigint
 *  string   
 *  boolean
 *  null-empty or does not exist
 *  undefined-not assigned,function with no return return undefined
 *  object
 *  symbol
 */
console.log(typeof 'abcd')//typeof operator , two exception
    console.log(typeof null) //object, error in language
    console.log(typeof function(){})//function, functions are treated specially
/**
 * var :default, function scoped, variables declared with var are "hoisted", at the top level create a property, could be redeclared
 */     console.log(x) //undefined
        var x=5;
        console.log(x) //5
        
        {
            var var_var=10
        }
        console.log(var_var)

        var x=6
        console.log(x)
 /* 
 * Added in ES6
 *  let :block scoped, varaible declared by let cannot be redeclared and must be declared befre use
 *  */      //console.log(y) //ReferrenceError :Cannot access 'y' before initialization
            let y=5;
            console.log(y) //5 but not execute becasue of previous lines

            if(true)
            {
                let let_var=10
            }
            // console.log(let_var) //error
/*          
 *  const
 */


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


    // regex
//stirng manipulation
// random
// file
// Error handling
/**
 * Any error haults the call stack
 */
