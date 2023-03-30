// build in object hwose constructor returns a symbol promitive that guaranteed to be unique, are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and wich are hidden
// Every Symbol() call is guaranteed to return a unique Symbol. Every Symbol.for("key") call will always return the same Symbol for a given value of "key". When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.
Symbol("foo") === Symbol("foo"); // false
const sym = new Symbol(); // TypeError

// Symbol() function will create a Symbol whose value remains unique throughout the lifetime of the program. 
// To create Symbols available across files and even across realms (each of which has its own global scope), use the methods Symbol.for() and Symbol.keyFor()

// The method Symbol.for(tokenString) takes a string key and returns a symbol value from the registry, while Symbol.keyFor(symbolValue) takes a symbol value and returns the string key corresponding to it. 


const globalSym = Symbol.for('foo'); // Global symbol

console.log(Symbol.keyFor(globalSym));
// Expected output: "foo"

const localSym = Symbol(); // Local symbol

console.log(Symbol.keyFor(localSym));
// Expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// Expected output: undefined
