//JS has only one type of number

//rounding can copromise program securty: can safely represent integers upto 2^53-1 and down to -(2^53-1)(up to 15 digits/64 bits),also there is differece in decimal precision as numbers are stored in binary
console.log(9007199254740992===9007199254740993);
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

console.log(Number.isInteger(4))
console.log(Number.isInteger(4.4))
console.log(Number.isSafeInteger(5e15),Number.isSafeInteger(5e16))

// > num=500
// 500
// > num.toString()
// '500'
// > num.toExponential()
// '5e+2'
// > num.toExponential(6)//accurate up to 6 digits
// '5.000000e+2'
// > num.toExponential(6)//accurate up to 6 no. of decimals
// '5.000000e+2'
// > num.toFixed(2)//return string with the number with a specified number of decimals
// '500.00'
// > num.toFixed(-2)
// Uncaught RangeError: toFixed() digits argument must be between 0 and 100
//     at Number.toFixed (<anonymous>)
// > num.toPrecision(10)
// '500.0000000'
// > num.toPrecision(1)
// '5e+2'
// > num.valueOf()
// 500
// > //return number as number
// undefined
// > //used internally in JavaScript to convert Number object to primitive values
// undefined
// > //All JavaScript data types have a valueOf() and a toString() method
// undefined

// converting variables to numbers
//there are 3 JS methods that can be used to convert a variable to a number: all are global JS methods
    // Number() ->spaces not allwoed give NaN
            // Number(true);
            // 1
            // > Number(false);
            // 0
            // > Number("10");
            // 10
            // > Number("  10");
            // 10
            // > Number("10  ");
            // 10
            // > Number(" 10  ");
            // 10
            // > Number("10.33");
            // 10.33
            // > Number("10,33");
            // NaN
            // > Number("10 33");
            // NaN
            // > Number("John");
            // NaN
            // > Number(new Date("1970-01-01"))
            // 0
            // > Number(new Date())
            // 1679401737921
            // > Number(new Date())
            // 1679401740081
            // > Number(new Date())
            // 1679401741729

    // parseFloat() ->parses string and returns a number, spaces are allowed, only first number is returned
            // > parseFloat("10");
            // 10
            // > parseFloat("10.33");
            // 10.33
            // > parseFloat("10 20 30");
            // 10
            // > parseFloat("10 years");
            // 10
            // > parseFloat("years 10");
            // NaN

    // parseInt() -> parses a stirng and returns a whole number , spaces are allowed
            // > parseInt("-10");
            // -10
            // > parseInt("-10.33");
            // -10
            // > parseInt("10");
            // 10
            // > parseInt("10.33");
            // 10
            // > parseInt("10 20 30");
            // 10
            // > parseInt("10 years");
            // 10
            // > parseInt("years 10");
            // NaN
