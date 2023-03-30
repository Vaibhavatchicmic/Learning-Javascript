// not premitive but object which are:
    // resizable
    // heteroginous
    // non associative array (only nonnegative integer(or respective string form) as indexes) (if used then not make change in length property and not set or retrieve an element from the array list itself, but will set or access a variable associated with the array object property collection) (also not returned by JSON.stringify())
    // zero-indexed
    // array-copy operations(concat(), slice(), from(), assign(), create()) create shallow copies( whose properties share the same references as those of the source object from which the copy was made, in deep copy(use JSON.parse(JSON.stringify(source)) pr structuredClone() only for serializable object) the source and copy are completely independent)

// JS syntax requires properties beginning with a digit to be accessed using bracket notation instead of dot notation

let a={}
a[d]=10;//cause reference error
a['d']=10;//work

d='c';
a[d]=20;//set a[c] to 20

// length property:
    // give no. of nonnegative integer index elements of array
    // one more than the largest nonnegative integer index
    // can set it, decreaseing it will delete elements

//Sparse array : empty slots

// Array like methods:
    // object is expected to actually have a length property and to have indexed elements in the range 0 to length - 1. 
    //DOM objects are array-like eg. NodeList, HTMLCollection

// Constructor:
    // Array(): creaes a new Array object

//Static Properties:
    // get Array[@@species] :return Array constructor

// Static methods:
    // Array.from() : creates a new Array instance from an array-like object or iterable object
    
    // Array.isArray() : returns true if the argument is an array or false otherwise

    // Array.of() : creates a new array instance with a variable number of arguments, regardless of number or type of the arguments

// Instance properties:defined on Array.prototype and shared by all Array instances
    // Array.prototype.constructor 

    // Array.prototype[@@unscopables]

    // length

// Instance methods:
    // Array.prototype.at()

    // 
