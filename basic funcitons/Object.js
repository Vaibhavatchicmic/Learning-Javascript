// JS objecs are containers for named values, called properties and methods
//all objects in js are instance of Object
// only object in core js that has immutable prototype

// objec constructor

//using object literal 
const obj1={
    property1: 2,
    fun:function foo(){
        return 0;
    },
    fun2(){   //method without key
        console.log("hI")
    }
}

new Object('abcd')
Object('abckd')

//objects are mutable they are addressed by reference not by value
const obj2=obj1;//this will not copy but obj2 is is also the same object
obj2.property1=3;
console.log(obj1)


// Accessing properties
console.log(
obj1.property1,
obj1["property1"],
obj1["prop"+"erty1"])
//iterating prperties
for(let i in obj1){
    console.log(i,obj1[i])
}
// Add new property ->simply give value
obj1.property2=4;
//Delete property ->use delete keyword
delete obj1.fun;//delete both the value and property, used on object properties , has no effect on inherited properties, simple variables or functions, not sue on predefined js obj properties will crash app
var var1=10
delete var1
console.log(var1)// a not deleted

//objects can have arrays and objects as properties

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);//copies all enumerable own prpoerties form oneor more souce obj o target objee=ct
console.log(target)
console.log(returnedTarget);

const obj = Object.create(target)//create new object usinng exisitng object
 
// PROPERTY ATTRIBUTES
//object properties has 4 descriptors:
console.log(Object.getOwnPropertyDescriptor(obj1, "property1"))
            //1 value : value of property
            //2 writable :true/false
            //3 enumerable :true/false (not printed to console if obj is consoled)
            //3 configurable :true/false (can't delete if false)
const a={};
Object.defineProperty(a,'property1', {
    value: 42,
    writable: false,
    enumerable: true
  })
  console.log(Object.getOwnPropertyDescriptor(a, "property1"));

//this :keyword in js
//refers to an object
// The this keyword refers to different objects depending on how it is used:
    // In an object method, this refers to the object.
    // Alone, this refers to the global object.
    // In a function, this refers to the global object.
    // In a function, in strict mode, this is undefined.
    // In an event, this refers to the element that received the event.
    // Methods like call(), apply(), and bind() can refer this to any object.


b= String(a);
console.log(b)// will display [object Object]
console.log(JSON.stringify(a))//will display full object as JSON, but will not stringify functions (we can also stringify arrays)
console.log(a)//will display full object but not if we assign it directly to innerHTML
console.log(Object.values(a))//display values as array

// JavaScript Accessors (Getters and Settters)
//Getter and Setters are introduced in ES5 allow us to deine Object Accessors (Computed Properties) 

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {  //A 'get' accessor cannot have parameters.
      return this.language;
    },
    set lang(ln){    //A 'set' accessor must have exactly one parameter
        this.language=ln;
    }
  };
person.lang='hi'
console.log(person.lang)
// Why Using Getters and Setters?
    // It gives simpler syntax
    // It allows equal syntax for properties and methods
    // It can secure better data quality
    // It is useful for doing things behind-the-scenes

// The Object.defineProperty() method can also be used to add Getters and Setters:
Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
  });


//Constructor function
function Class2(a,b,c){ //an object constructor function to define objects of type Class2
    this.a=a;
    this.b=b;
    this.c=c;
    this.fun2= function(){
        return a+b+c;
    }
}
const obj3=new Class2(1,2,3)
console.log(obj3)

// can add property to such object
obj3.d=10;
console.log(obj3)
//adding function
obj3.fun=function(){
    return this.a+this.b+this.c+this.d;
}

console.log(obj3.fun(),obj3.fun2());
//but we can't add new property to an object constructor later

// JavaScript has built-in constructors for native objects:
        // new String()    // A new String object
        // new Number()    // A new Number object
        // new Boolean()   // A new Boolean object
        // new Object()    // A new Object object
        // new Array()     // A new Array object
        // new RegExp()    // A new RegExp object
        // new Function()  // A new Function object
        // new Date()      // A new Date object

// Prototype
// the prototype is an object that is associated with every function and objects by default in JS, where function's prototype property is accessible and modifiable and object's prototype property is not visible
// the prototype object is special type of enumerable object to which additional properties can be attached to it which wil be shared across all the instances of it's constructor function
Class2.prototype.fun3= function(){
    console.log("in funciton fun3 made with help of prototype")
}
obj3.fun3();

console.log(Class2.prototype); //object
console.log(obj2.prototype);   //undefined
console.log(obj3.__proto__);   //object //same as of Class2.prototype


//Object Prototype : object prototype property is invisible Use Object.getPrototypeOf(obj) method instead of __proto__ to access prototype object.
str=new String("abcd")
console.log(Object.getPrototypeOf(str));

// The prototype object includes:
    // properties
        //constructor
        //__proto__
    // Methods
        //hasOwnProperty()
        //isProtypeOf()
        //propertyIsEnumerable()
        //toLocalString()
        //toString()
        //valueOf()

// if you change function's prototype then only new objects will be linked to changed prototype