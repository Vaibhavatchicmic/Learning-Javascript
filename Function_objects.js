// Function object : provides methods for functions, in JS every function is a Function object
    //Constructor
        // Function() 
    f=function fun(a,b,c,e=5,f,g){
        this.a=a;
        return a+b+c+e+f+g;
    };
// 
    // Instance properties

        console.log(f.length)//return no of arguments //specific for instance
        console.log(f.name)//return name of funciton //specific for instance
        console.log(f.prototype.constructor) //the constructor function that created the instance object , for Function instances the initial value is the Function constructor
        console.log(f.prototype)//used when funciton is used as a constructor with the new operator//
        f.prototype.x=10
        console.log(f.prototype)

    // Instance methods

        // Function.prototype.apply() :calls a function with a given this value and optional arguments provided as an array(or an array like object)
            
            // Syntax
                // apply(this) //for this if not in strict mode null and undefined will be replaced with the global object and primitive values converted to objects , this allow us to use methods of one object as generic utility functions
                // apply(this,argsArray) //argsArray is array-like object specify the arguments with whcih func should be called, or null or undefined if no arguments should be provided

            // return value
                // specified this value and arguments
            const num = [1, 2, 3, 4, 5, 6];
            const max = Math.max.apply(null, num);
            const min = Math.min.apply(null, num);
            console.log(`max: ${max}, min: ${min}`);

            // In general, fn.apply(null, args) is equivalent to fn(...args)
            console.log("short max",Math.max(...num)); //require num to be iterable object

        // Function.prototype.call() :calls a function with a given this value and optional arguments
            //same as apply except that call() accepts an argument list while apply() accepts a single array of arguments
                function Product(name, price) {
                    this.name = name;
                    this.price = price;
                }
                
                function Food(name, price) {
                    Product.call(this, name, price);
                    this.category = 'food';
                }
                
                console.log(new Food('cheese', 5).name);
                // Expected output: "cheese"
                
                // return the result of calling the function with the specified this value and arguments

                //should not be used for inheritance

                //If first argument(this) remain empty:
                    // Case1-> non-strict mode , this value is substituted with globalThis
                    // Case2-> strict mode, this is not substituted remain undefined (may throw TypeError)

        //Function.prototype.bind() :creates a new function that when called, has its this keyword set to a provided value, optionally with a given sequence of arguments preceding any provided when the new function is called
                const module = {
                    x: 42,
                    getX: function() {
                    return this.x;
                    }
                };
                
                const unboundGetX = module.getX;
                console.log(unboundGetX()); // The function gets invoked at the global scope
                // Expected output: undefined
                
                const boundGetX = unboundGetX.bind(module);
                console.log(boundGetX());
                // Expected output: 42

                //for returned bound function:
                    // length : lenght of target function minus the number of arguments being bound, 0 minimum value
                    // name : name of the target function plus a "bound " prefix
    
                //we can't save .call so use bind()

        // Function.prototype.toString() :returns a string representing the source code of the function. Overrides the Object.prototype.toString method
                function sum(a, b) {
                    return a + b;
                }
                
                console.log(sum.toString());
                // Expected output: "function sum(a, b) {
                //                     return a + b;
                //                   }"
                
                console.log(Math.abs.toString());
                // Expected output: "function abs() { [native code] }"
          


        
        // Difference between Function constructor and function declaration
            // function created with the Function constructor do not create closures to their creation context;they always are created in the global scope

                // Create a global property with `var`  
                var x = 10;

                function createFunction1() {
                const x = 20;
                return new Function("return x;"); // this `x` refers to global `x`
                }

                function createFunction2() {
                const x = 20;
                function f() {
                    return x; // this `x` refers to the local `x` above
                }
                return f;
                }

                const f1 = createFunction1();
                // console.log(f1()); // 10  //this will not work in Node.js as x will not be global but bound to local module
                const f2 = createFunction2();
                console.log(f2()); // 20


