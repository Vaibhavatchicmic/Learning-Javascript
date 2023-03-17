// Nullish coalecing operator-??
// a??b means a unless it is null/undefined then b


// Method borrowing, also known as function borrowing, is, as its name implies, a way for an object to use the methods of another object without redefining that same method.
// In JavaScript, we can reuse the method of a function on a different object other than the object it was defined on. Method borrowing helps to keep us from having to write the same code multiple times. Using the predefined JavaScript methods, call(), apply() or bind(), we can borrow methods from other objects without inheriting their properties and methods.
object1.methodName.call(object2);

// //for call
// object1.methodName.call(object2, 'argument');
// //for apply
// object1.methodName.call(object2, ['argument']);
// object1.displayAge.bind(object2);







// JavaScript Clousures : a closure is a function having access to the parent scope , even after the parent function has closed

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();
//     The variable add is assigned to the return value of a self-invoking function.

//     The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

//     This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

//     This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

//     The counter is protected by the scope of the anonymous function, and can only be changed using the add function.







        // In JavaScript, the this keyword refers to an object.

        // Which object depends on how this is being invoked (used or called).

        // The this keyword refers to different objects depending on how it is used:

        // In an object method, this refers to the object.
        // Alone, this refers to the global object.
        // In a function, this refers to the global object.
        // In a function, in strict mode, this is undefined.
        // In an event, this refers to the element that received the event.
        // Methods like call(), apply(), and bind() can refer this to any object.
        // Note
        // this is not a variable. It is a keyword. You cannot change the value of this.