// currying :- transforminng a function like f(a,b,c) to f(a)(b)(c) , not calling just transforming
// eg
function curry(f){
    return function(a){
        console.log("a: ",a)
        return function(b){
            console.log("b: ",b)
            return f(a,b);
        }
    }
}

function sum(a,b){
    return a+b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2))

// we can generate partial functions