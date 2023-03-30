//Default Parameter:
// originally all parameters have default value undefined 
// can be any but lenght calculated till before first defalut parameter(The first default parameter and all parameters after it will not contribute to the function's length.)
// > function fun(x,y,z){return x+y+z}
// undefined
// > fun.length
// 3
// > function fun(x=1,y,z){return x+y+z}
// undefined
// > fun.length
// 0

// The default parameter initializers live in their own scope, which is a parent of the scope created for the function body.
// This means that earlier parameters can be referred to in the initializers of later parameters. However, functions and variables declared in the function body cannot be referred to from default value parameter initializers;
function f(a, b = () => console.log(a)) {
    var a = 1;
    b();
  }
  
  f(); // undefined
  f(5); // 5


// even if the argument for default parameter is set explicitly to undeffined the value oof the num argument is still the default
  function test(num = 1) {
    console.log(typeof num);
  }
  
  test(); // 'number' (num is set to 1)
  test(undefined); // 'number' (num is set to 1 too)
  
  // test with other falsy values:
  test(""); // 'string' (num is set to '')
  test(null); // 'object' (num is set to null)


//Defalut arguments is evaluated at call time


//Parameters are essentially passed to function by value but when we pass an object as a parameter, if the function changes the object's protperties, that change is visible outside the function(also for array(it is function))

//a name can be provided with a function expression , allow the function to refer to itself and ease in debugging
const factorial = function fac(n){
    return n<2?1:n*fac(n-1);
}
console.log(fac(10))

//function hoisting only works iwht functio declaration not with function expressions