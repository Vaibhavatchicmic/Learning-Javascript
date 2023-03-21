// Javascript String is immutable, which means once a String object is assigned to String reference the object value cannot be changed.
// JavaScript distinguishes bw String object and primitive string values

//String literals and string returned from non constructor String callls(without new keyword) are primitive strings
// where a method is to be invoked on aprimiitve stirng or a property lookup occurs, JS will automatically wrap the string primitive and call the method or perform the propertly lookup on the wrapper object

//eval(primitve_string) ->evaluate
//eval(object_string)   ->just print the string object
str="2+2";
str2=new String(str);
console.log(eval(str),eval(str2));

// A String object can always be converted to its primitve counterpart with the valueOf() method
console.log(eval(str2.valueOf()))

// something different
/**
 * Carriage return means to return to the beginning of the current line without advancing downward. The name comes from a printer's carriage, as monitors were rare when the name was coined. This is commonly escaped as "\r", abbreviated CR, and has ASCII value 13 or 0xD.

Linefeed means to advance downward to the next line; however, it has been repurposed and renamed. Used as "newline", it terminates lines (commonly confused with separating lines). This is commonly escaped as "\n", abbreviated LF or NL, and has ASCII value 10 or 0xA. CRLF (but not CRNL) is used for the pair "\r\n".

Form feed means advance downward to the next "page". It was commonly used as page separators, but now is also used as section separators. Text editors can use this character when you "insert a page break". This is commonly escaped as "\f", abbreviated FF, and has ASCII value 12 or 0xC.
(one space first time two second time three space third time and so on)

 */

// Stirng coercion
        // Strings are returned as-is.
        // undefined turns into "undefined".
        // null turns into "null".
        // true turns into "true"; false turns into "false".
        // Numbers are converted with the same algorithm as toString(10).
        // BigInts are converted with the same algorithm as toString(10).
        // Symbols throw a TypeError.
        // Objects are first converted to a primitive by calling its [@@toPrimitive]() (with "string" as hint), toString(), and valueOf() methods, in that order. The resulting primitive is then converted to a string.

//Construcor
    String(123) //creates a new String object, performs type conversion when caled as a function, rahter than as a constructor

// Static methods



//Template Literals :
        // using back-ticks `
        // can use ' or "
        // allow multiline strings
        // provide easy way to interpolate variables and expressions into strings using ${expression}


// chicmic@chicmic-MS-7D46:~/Desktop/codes/Learning/JavaScript$ node
// Welcome to Node.js v16.19.1.
// Type ".help" for more information.
// > const str= "A sting primitive"
// undefined
// > const str2=new String("\
// ... A Sring object")
// undefined
// > str
// 'A sting primitive'
// > str2
// [String: 'A Sring object']
// > str.charAt(1)
// ' '
// > str.charAt(2)
// 's'
// > str[2]
// 's'
// > a="A string"
// 'A string'
// > b="A string"
// 'A string'
// > a==b
// true
// > a===b
// true
// > c=new string("A string")
// Uncaught ReferenceError: string is not defined
// > c=new String("A string")
// [String: 'A string']
// > c==a
// true
// > c===a
// false
// > d="B string"
// 'B string'
// > d<a
// false
// > d>a
// true
// > str.toUpperCase()
// 'A STING PRIMITIVE'
// > str.toLowerCase()
// 'a sting primitive'
// > str.lenght
// undefined
// > str2.length
// 14
// > str.lenght
// undefined
// > str.length
// 17
// > str.slice(2,5)
// 'sti'
// > str.substring(2,5)//same as slice but start and end values less than 0 are treated as 0
// 'sti'
// > str.slice(-10,-2)
// ' primiti'
// > str.substring(-10)
// 'A sting primitive'
// > str.substr(5,4) //similar to slice() but second parameter specifies the length of the extracted part
// 'ng p'
// > str.substr(-10)
// ' primitive'
// > str.replace("sting","string")
// 'A string primitive'
// > str
// 'A sting primitive'
// > //only replaces the first match, use regular expression with the /g flag to replace all matches
// undefined
// > str.replace(/STING/i,"String")
// 'A String primitive'
// > str.concat(str2)
// 'A sting primitiveA Sring object'
// > //All string methods return a new string they don't modify the original string(String are immutable)
// undefined
// > str3="      Hello adkfjaslfdk      "
// '      Hello adkfjaslfdk      '
// > str3.trim()
// 'Hello adkfjaslfdk'
// > str3.trimStart()
// 'Hello adkfjaslfdk      '
// > str3.trimEnd()
// '      Hello adkfjaslfdk'
// > str.padStart(30,"abc")//make string of lenght 30 by adding padding
// 'abcabcabcabcaA sting primitive'
// > str.padEnd(40,"abc")
// 'A sting primitiveabcabcabcabcabcabcabcab'
// > str.charAt(0)
// 'A'
// > str.charCodeAt(0)
// 65
// > str[0]
// 'A'
// > //it may make stirng look like array, if no character found [] return undefined while charAt() returns an empty string, str[0]='B' give no error also not work 
// undefined
// > str.split(" ")
// [ 'A', 'sting', 'primitive' ]
// > str.split()
// [ 'A sting primitive' ]
// > str.split('')
// [
//   'A', ' ', 's', 't', 'i',
//   'n', 'g', ' ', 'p', 'r',
//   'i', 'm', 'i', 't', 'i',
//   'v', 'e'
// ]
// > //String Search methods
// undefined
// > //is there something like jupyter notebook for javascript
// undefined
// > str.indexOf('sting')
// 2
// > str.indexOf('prim')
// 8
// > str.indexOf('unknown')
// -1
// > str.lastIndexOf('i')
// 14
// > str.indexOf('i')//index of first occurence of a string, both return -1 if the text is not found
// 4
// > str.indexOf(/S/i)
// -1
// > str.indexOf(/pri/i)
// -1
// > str.indexOf("i",5)
// 10
// > //second parameter as the starting position for the search
// undefined
// > str.indexOf("i",0)
// 4
// > 
// > str.search('a')
// -1
// > str.search('A')
// 0
// > //search() method searches a string or a stirng or a regular expression
// undefined
// > //retun position
// undefined
// > //search() method cannot take a second start position argument, indexOf() method cannot us RegExp
// undefined
// > str.match("sting")
// [ 'sting', index: 2, input: 'A sting primitive', groups: undefined ]
// > str.match("s")
// [ 's', index: 2, input: 'A sting primitive', groups: undefined ]
// > str.match(/s/i)
// [ 's', index: 2, input: 'A sting primitive', groups: undefined ]
// > str.match(/a/i)
// [ 'A', index: 0, input: 'A sting primitive', groups: undefined ]
// > str.match(/i/g)
// [ 'i', 'i', 'i', 'i' ]
// > .forEach(val=>console.log(val))
// Invalid REPL keyword
// > str.match(/i/g).forEach(val=>console.log(val))
// i
// i
// i
// i
// undefined
// > str.matchAll('i')
// Object [RegExp String Iterator] {}
// > for( i in str.matchAll('i'))
// ... {
// ... conosle.log(i)
// ... }
// undefined
// > //matchAll return iterator
// undefined
// > str.includes("string")
// false
// > str.includes("sting")
// true
// > str.includes("sting",2)
// true
// > str.includes("sting",3)
// false
// > str.includes("sting",0)
// true
// > str.startsWith('A')
// true
// > str.startsWith('a')
// false
// > str.startsWith('s',2)
// true
// > str.startsWith('s',1)
// false
// > str.endsWith("e")
// true
// > str.endsWith("s",3)
// true