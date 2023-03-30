// this is a keyword , its value is determined by how a funciton is called( runtime binidng.), bind() method can set the value of a function's this regardless of how it's called, and arrow functions don't provide their own this binding but retains the this value of the enclosing lexical context.

// in non-strict mode, this is always a reference to an object.
// in strict mode, it can be any value.

    //1 in function context
            // inside a function the value of this depends on how the function is called. (can think of this as a hidden parameter of a function)
            function getThis() {
                return this;
            }
            
            const obj1 = { name: "obj1" };
            const obj2 = { name: "obj2" };

            obj1.getThis = getThis;
            obj2.getThis = getThis;

            console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
            console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

            const obj3 = {
                __proto__: obj1,
                name: "obj3",
            };
            
            // the value of this is not the object that has the functio as an own property, but the object that is used to call the function.
            console.log(obj3.getThis()); // { name: 'obj3' } 


            // If the value that the method is accessed on is a primitive, this will be a primitive value as well — but only if the function is in strict mode.

            function getThisStrict() {
            "use strict"; // Enter strict mode
            return this;
            }

            // Only for demonstration — you should not mutate built-in prototypes
            Number.prototype.getThisStrict = getThisStrict;
            console.log(typeof (1).getThisStrict()); // "number"

            // If the function is called without being accessed on anything, this will be undefined — but only if the function is in strict mode.
            console.log(typeof getThisStrict()); // "undefined"

            // In non-strict mode, a special process called this substitution ensures that the value of this is always an object. This means:

            // If a function is called with this set to undefined or null, this gets substituted with globalThis.
            // If the function is called with this set to a primitive value, this gets substituted with the primitive value's wrapper object.
            function getThis() {
            return this;
            }

            // Only for demonstration — you should not mutate built-in prototypes
            Number.prototype.getThis = getThis;
            console.log(typeof (1).getThis()); // "object"
            console.log(getThis()); // "Object [global]"
            console.log(getThis() === globalThis); // true
    
    // 2 Callbacks
            // when a function is passed as a callback, the value of this depends on how the callback is called, which is determined by the implementor of the API
            ............



    // 3 arrow funcitons
            //  this retains the value of the enclosing lexical context's thi

            // when invoking arrow functions using call(), bind(), or apply(), th   e thisArg parameter is ignored

    // 4 Constructors
            // When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed, no matter which object the constructor function is accessed on. The value of this becomes the value of the new expression unless the constructor returns another non–primitive value.

            function C() {
            this.a = 37;
            }
            
            let o = new C();
            console.log(o.a); // 37
            
            function C2() {
            this.a = 37;
            return { a: 38 };
            }
            
            o = new C2();
            console.log(o.a); // 38
    
    // 5 super
            //  When a function is invoked in the super.method() form, the this inside the method function is the same value as the this value around the super.method() call, and is generally not equal to the object that super refers to.
    
    // 5 class instance
            // Class constructors are always called with new, so their behavior is the same as function constructors: the this value is the new instance being created. Class methods behave like methods in object literals — the this value is the object that the method was accessed on. If the method is not transferred to another object, this is generally an instance of the class.


    // 5.2 class static
            // Static methods are not properties of this. They are properties of the class itself. Therefore, they are generally accessed on the class, and this is the value of the class (or a subclass). Static initialization blocks are also evaluated with this set to the current class.

                class C {
                    instanceField = this;
                    static staticField = this;
                }
                
                const c = new C();
                console.log(c.instanceField === c); // true
                console.log(C.staticField === C); // true


    //  6 derived class
            // Unlike base class constructors, derived constructors have no initial this binding. Calling super() creates a this binding within the constructor and essentially has the effect of evaluating the following line of code, where Base is the base class:
            class Base {}
            class Good extends Base {}
            class AlsoGood extends Base {
            constructor() {
                return { a: 5 };
            }
            }
            class Bad extends Base {
            constructor() {}
            }

            new Good();
            new AlsoGood();
            new Bad(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

        //Derived class constructors
        //Unlike base class constructors, derived constructors have no initial this binding. Calling super() creates a this binding within the constructor and essentially has the effect of evaluating the following line of code, where Base is the base class:
.
.
.
.
.
.
.

