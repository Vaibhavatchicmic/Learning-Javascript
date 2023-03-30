// Nullish coalecing operator-??
// a??b means a unless it is null/undefined then b


// Method borrowing, also known as function borrowing, is, as its name implies, a way for an object to use the methods of another object without redefining that same method.
// In JavaScript, we can reuse the method of a function on a different object other than the object it was defined on. Method borrowing helps to keep us from having to write the same code multiple times. Using the predefined JavaScript methods, call(), apply() or bind(), we can borrow methods from other objects without inheriting their properties and methods.
// object1.methodName.call(object2);

// //for call
// object1.methodName.call(object2, 'argument');
// //for apply
// object1.methodName.call(object2, ['argument']);
// object1.displayAge.bind(object2);

// in a return like this
// return //semicolon will be added automatically 
// {
//   a:10
// }


var a = b = 3; //is actually shorthand for:
b = 3;
var a = b;




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


  // how to swap two variables without and any operator 
let n1=1;
let n2=2;
[n1,n2]=[n2,n1] //destructuring assignment
console.log(n1,n2)



var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);
// The output of this code will be 456 (not 123).



var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);
Output:

10
2



(function () {
  try {
      throw new Error();
  } catch (x) {
      var x = 1, y = 2;
      console.log(x);
  }
  console.log(x);
  console.log(y);
})();
1
undefined
2

// The reason for this is as follows: When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].


// The increment operator can only be applied on operands that are references (variables and object properties; i.e. valid assignment targets). ++x itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together.

++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation