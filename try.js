// arr=[{b:1},{b:2},{b:3},{b:4}]
// sol=arr.reduce((acc,val)=>{
//     if(val.b>2){
//         acc.push(val);
//     }
//     return acc;
// },[]);
// console.log(arr);
// console.log(sol)

// const x=1;
// {
//     console.log(x);
//     const x=2;
// }
// var y=1;
// {
//     setTimeout(()=>console.log(y),0);
//     var y=3;
// }

// var funcs = [];
// // let's create 3 functions
// for (var i = 0; i < 3; i++) {
//   // and store them in funcs
//   var y=i;
//   funcs[i] = function() {
//     // each should log its value.
//     console.log("My value:", y);
//   };
// }
// for (var j = 0; j < 3; j++) {
//   // and now let's run each one to see
//   funcs[j]();
// }
// console.log(i)

a=[1,2,3,4,5,6];
b=a.reduce((acc,ele,index)=>{
  if(index==0){
  acc={'a':ele}}else{
  acc[String.fromCodePoint(97+index)]=ele+acc[String.fromCodePoint(97+index-1)];}
  return acc;},{})  
console.log(b)
  