// Iterator
    // object which defines a sequence and potentially a return value upon its termination,
    // an iterator is any object which implements the iterator protocol by having a next() method that returns an object with two properties:
        // value :the next value in the iteration sequence
        // done :true if the last value in the sequence has already been consumed.


// Iterable objectss are objects that can be iterated over with for...of
//Tecnically, iterables must implement the Symbol.iterator method

// JS Iterators
//defines how to produce a sequence of values from an object
//An object becomes an iterator when it implements a next() method, which must retrun an object with two properties:
    //value(the next value)
    //done(true or false)

// Home Made Iterable
// This iterable returns never ending: 10,20,30,40,.... Everytime next() is called:
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }

  // Create Iterable
  const n = myNumbers();
  n.next(); // Returns 10
  n.next(); // Returns 20
  n.next(); // Returns 30
  
  //It does not support the JavaScript for..of statement

//A JavaScript iterable is an object that has a Symbol.iterator protperty
//Symbol.iteraor is a function that returns a iterator which has a next() function
      // Create an Object
      myNumbers = {};

      // Make it Iterable
      myNumbers[Symbol.iterator] = function() {
      let n = 0;
      done = false;
      return {
          next() {
          n += 10;
          if (n == 100) {done = true}
          return {value:n, done:done};
          }
      };
      }
      for (const num of myNumbers) {
          console.log(num)
      }

      // The Symbol.iterator method is called automatically by for..of.

      // But we can also do it "manually":
      let iterator = myNumbers[Symbol.iterator]();
      while (true) {
      const result = iterator.next();
      if (result.done) break;
          console.log(result.value)
      }

    
// Generator functions
    // allow us to define an iterative algorithm by writing a single functio whose execution is not continuous. 
    // written using the function* syntax.
    //generator function return a special type of iterator called Generator
    // Generator functio executes until it encounters the yield keyword