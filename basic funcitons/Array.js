//Array object store collection of multiple items under a single variable name, not primitives in JS, 
//      resizable
//      not associaivve
//      zero indexed
//      create shallow copy(share same referece, in deep copy source and copy are completely independent)

// a=[]
// a[2]=4
// a['2']=5
// console.log(a['2'])

//splice(start[,deleteCount[,item1,[item2,itemN]]]) :delete deleteCount element from start and add items to change contents of an arry by removing, replacing or adding elements in place
//return array of removed elements
// a[10]=4
// console.log(a.length)





// chicmic@chicmic-MS-7D46:~/Desktop/codes$ node
// Welcome to Node.js v16.19.1.
// Type ".help" for more information.
// > arr=[1,2,3]
// [ 1, 2, 3 ]
// > arr.lenght
// undefined
// > arr.length
// 3
// > Object.values(arr)
// [ 1, 2, 3 ]
// > Object.keys(arr)
// [ '0', '1', '2' ]
// > //dkdkkd
// undefined
// > for(i in arr){console.log(i));
// for(i in arr){console.log(i));
//                             ^

// Uncaught SyntaxError: Unexpected token ')'
// > for(i in arr){console.log(i);)
// for(i in arr){console.log(i);)
//                              ^

// Uncaught SyntaxError: Unexpected token ')'
// > for(i in arr){console.log(i);}
// 0
// 1
// 2
// undefined
// > for(i in arr){console.log(i,end="");}
// 0 
// 1 
// 2 
// undefined
// > app.push(1)
// Uncaught ReferenceError: app is not defined
// > arr.push(1)
// 4
// > arr.pop()
// 1
// > console.log(arr.push(4))
// 4
// undefined
// > console.log(arr.push(10))
// 5
// undefined
// > console.log(arr.pop()
// ... 
// ... )
// 10
// undefined
// > console.log(arr.pop(2))
// 4
// undefined
// > arr
// [ 1, 2, 3 ]
// > arr.pop(0)
// 3
// > arr
// [ 1, 2 ]
// > arr.push(10)
// 3
// > arr.push(10,11,12)
// 6
// > arr
// [ 1, 2, 10, 10, 11, 12 ]
// > arr.pop(2)
// 12
// > arr
// [ 1, 2, 10, 10, 11 ]
// > arr.shift();
// 1
// > arr
// [ 2, 10, 10, 11 ]
// > arr.unshift
// [Function: unshift]
// > arr.unshift("abc")
// 5
// > arrr
// Uncaught ReferenceError: arrr is not defined
// > arr
// [ 'abc', 2, 10, 10, 11 ]
// > arr.length
// 5
// > arr2=[4,55,5]
// [ 4, 55, 5 ]
// > arr2.concat(arr)
// [
//   4,     55, 5,
//   'abc', 2,  10,
//   10,    11
// ]
// > arr2
// [ 4, 55, 5 ]
// > arr
// [ 'abc', 2, 10, 10, 11 ]
// > arr2.concat("abc")
// [ 4, 55, 5, 'abc' ]
// > arr.slice(2)
// [ 10, 10, 11 ]
// > arr
// [ 'abc', 2, 10, 10, 11 ]
// > arr.toString
// [Function: toString]
// > arr.toString()
// 'abc,2,10,10,11'
// > arr+arr2
// 'abc,2,10,10,114,55,5'
// > arr.min()
// Uncaught TypeError: arr.min is not a function
// > arr.max()
// Uncaught TypeError: arr.max is not a function
// > arr.sort()
// [ 10, 10, 11, 2, 'abc' ]
// > arr
// [ 10, 10, 11, 2, 'abc' ]str
// > //sort() sort alphabeticaly
// undefined
// > arr.push(0)
// 6
// > arr
// [ 10, 10, 11, 2, 'abc', 0 ]
// > arr.sort()
// [ 0, 10, 10, 11, 2, 'abc' ]
// > arr.reverse()
// [ 'abc', 2, 11, 10, 10, 0 ]
// > arr.sort((a,b)=>{return a-b})
// [ 'abc', 0, 2, 10, 10, 11 ]
// > arr.sort((a,b)=>{return b-a})//in descendig order
// [ 'abc', 11, 10, 10, 2, 0 ]
// > math.max.apply(null,arr)
// Uncaught ReferenceError: math is not defined
// > import 'math'
// import 'math'
// ^^^^^^

// Uncaught:
// SyntaxError: Cannot use import statement inside the Node.js REPL, alternatively use dynamic import
// > Math.max.apply(null,arr)
// NaN
// > arr
// [ 'abc', 11, 10, 10, 2, 0 ]
// > arr.shift()
// 'abc'
// > Math.max.apply(null,arr)
// 11
// > c
// Uncaught ReferenceError: c is not defined
// > x
// Uncaught ReferenceError: x is not defined
// > let x = {x: 10}
// undefined
// > func
// Uncaught ReferenceError: func is not defined
// > let func = function(a, b, c) { return a + b + c + this.x; };
// undefined
// > func.apply(x [1, 2, 3])
// NaN
// > func.apply(x, [1, 2, 3])
// 16
// > func.apply(null, [1, 2, 3])
// NaN
// > func(...[1,2,3])
// NaN
// > let func = function(a, b, c) { return a + b + c + };
// let func = function(a, b, c) { return a + b + c + };
//                                                   ^

// Uncaught SyntaxError: Unexpected token '}'
// > 
// > let func = function(a, b, c) { return a + b + c };
// Uncaught SyntaxError: Identifier 'func' has already been declared
// > var func = function(a, b, c) { return a + b + c };
// Uncaught SyntaxError: Identifier 'func' has already been declared
// > var a=10
// undefined
// > var a=14
// undefined
// > a
// 14
// > var fun = function(a, b, c) { return a + b + c };
// undefined
// > fun(...[1,2,3])
// 6
// > fun(...arr)
// 31
// > arr
// [ 11, 10, 10, 2, 0 ]
// > Math.min(...arr)
// 0
// > Math.max(...arr)
// 11
// > arr.forEach((val,ind,arr)=>{
// ... console.log(val,ind,arr)}
// ... );
// 11 0 [ 11, 10, 10, 2, 0 ]
// 10 1 [ 11, 10, 10, 2, 0 ]
// 10 2 [ 11, 10, 10, 2, 0 ]
// 2 3 [ 11, 10, 10, 2, 0 ]
// 0 4 [ 11, 10, 10, 2, 0 ]
// undefined
// > arr.map((val,ind,arr)=>{})
// [ undefined, undefined, undefined, undefined, undefined ]
// > arr.map((val,ind,arr)=>{
// ... val=ind+arr.length;
// ... })
// [ undefined, undefined, undefined, undefined, undefined ]
// > arr
// [ 11, 10, 10, 2, 0 ]
// > arr.map((val,ind,arr)=>{
// ... return val+1})
// [ 12, 11, 11, 3, 1 ]
// > arr.filter((vall,ind,arr)=>{
// ... val>10
// ... })
// Uncaught ReferenceError: val is not defined
//     at REPL391:2:1
//     at Array.filter (<anonymous>)
// > arr.filter((vall,ind,arr)=>{
// ... val>10
// ... 
// ... d
// ... }
// ... )
// Uncaught ReferenceError: val is not defined
//     at REPL397:2:1
//     at Array.filter (<anonymous>)
// > arr.filter((val,ind,arr)=>{
// ... val>10})
// []
// > arr.filter((val,ind,arr)=>{
// ... val==10})
// []
// > arr.filter((val,ind,arr)=>
// ... val==10
// ... )
// [ 10, 10 ]
// > arr.reduce((total,value,index,array){
// arr.reduce((total,value,index,array){
//                                    ^

// Uncaught SyntaxError: missing ) after argument list
// > arr.reduce((total,value,index,array)=> total+value;)
// arr.reduce((total,value,index,array)=> total+value;)
//                                              ^^^^^

// Uncaught SyntaxError: missing ) after argument list
// > arr.reduce((total,value,index,array)=> total+value)
// 33
// > arr.reduceRight((total,value,index,array)=> total+value)
// 33
// > //from right to left
// undefined
// > arr.every((val,ind,arr)=>{
// ... return value>1;})
// Uncaught ReferenceError: value is not defined
//     at REPL424:2:1
//     at Array.every (<anonymous>)
// > arr.every((val,ind,arr)=>{
// ... return val>1;})
// false
// > arr.every((val,ind,arr)=>{
// ... return val===Number(val);})
// true
// > arr.push('abc')
// 6
// > arr
// [ 11, 10, 10, 2, 0, 'abc' ]
// > arr.every((val,ind,arr)=>{
// ... return val===Number(val);})
// false
// > arr.some((val,ind,arr)=>{
// ... return val==String(val);
// ... })
// true
// > arr.pop()
// 'abc'
// > arr.some((val,ind,arr)=>{
// ... return val==String(val);
// ... })
// true
// > arr
// [ 11, 10, 10, 2, 0 ]
// > Object.defineProperty(arr, "0", {enumerable: false})
// [ 11, 10, 10, 2, 0 ]
// > arr
// [ 11, 10, 10, 2, 0 ]
// > for (let x of arr) console.log(x)
// 11
// 10
// 10
// 2
// 0
// undefined
// > arr.keys()
// Object [Array Iterator] {}
// > Array.from(arr.keys()
// ... )
// [ 0, 1, 2, 3, 4 ]
// > Object.keys(arr)
// [ '1', '2', '3', '4' ]
// > arr
// [ 11, 10, 10, 2, 0 ]
// > Object.defineProperty(arr, "0", {enumerable: true})
// [ 11, 10, 10, 2, 0 ]
// > Object.keys(arr)
// [ '0', '1', '2', '3', '4' ]
// > x
// { x: 10 }
// > Object.defineProperty(x, "x", {enumerable: false, writable: false, configurable:false})
// {}
// > x
// {}
// > x.x
// 10
// > for(i of x) console.log(i);
// Uncaught TypeError: x is not iterable
// > x.y=20
// 20
// > s
// Uncaught ReferenceError: s is not defined
// > x
// { y: 20 }
// > x.z=30
// 30
// > for(i of x) console.log(i);
// Uncaught TypeError: x is not iterable
// > for(i in  x) console.log(i);
// y
// z
// undefined
// > y=x
// { y: 20, z: 30 }
// > y.x
// 10
// > y=new Object(a)
// [Number: 14]
// > a
// 14
// > y=new Object(x)
// { y: 20, z: 30 }
// > y=x
// { y: 20, z: 30 }
// > y.x=100
// 100
// > x.x
// 10
// > x.x=100
// 100
// > arr.indexof(x)
// Uncaught TypeError: arr.indexof is not a function
// > arr.indexof(1)
// Uncaught TypeError: arr.indexof is not a function
// > arr.indexof(10)
// Uncaught TypeError: arr.indexof is not a function
// > ar
// Uncaught ReferenceError: ar is not defined
// > arrr
// Uncaught ReferenceError: arrr is not defined
// > arr
// [ 11, 10, 10, 2, 0 ]
// > arr.indexOf(11)
// 0
// > Object.keys(arr))
// Object.keys(arr))
//                 ^

// Uncaught SyntaxError: Unexpected token ')'
// > Object.keys(arr)
// [ '0', '1', '2', '3', '4' ]
// > arr.indexOf(10)
// 1
// > arr.lastIndexOf(10)
// 2
// > arr.find((val,index,array)=>{
// ... return val>10;
// ... })
// 11
// > arr.find((val,index,array)=>{
// ... return val>1;
// ... })
// 11
// > Array.from('abcd')
// [ 'a', 'b', 'c', 'd' ]
// > arr.keys()
// Object [Array Iterator] {}
// > arr.entries(0
// ... )
// Object [Array Iterator] {}
// > arr.entries()
// Object [Array Iterator] {}
// > for i in arr.entris(){console.log(i))}
// for i in arr.entris(){console.log(i))}
//     ^

// Uncaught SyntaxError: Unexpected identifier
// > for i in arr.entris(){console.log(i)}
// for i in arr.entris(){console.log(i)}
//     ^

// Uncaught SyntaxError: Unexpected identifier
// > for(i in arr.entris()){console.log(i)}
// Uncaught TypeError: arr.entris is not a function
// > for(i in arr.entries()){console.log(i)}
// undefined
// > for(i of arr.entries()){console.log(i)}
// [ 0, 11 ]
// [ 1, 10 ]
// [ 2, 10 ]
// [ 3, 2 ]
// [ 4, 0 ]
// undefined
// > arr.includes(10)
// true
// > arr.includes(20)
// false
// > abcd[1]=0
// Uncaught ReferenceError: abcd is not defined
// > 
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// > 