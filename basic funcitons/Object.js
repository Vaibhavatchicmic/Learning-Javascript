//all objects in js are instance of Object
// only object in core js that has immutable prototype

// objec constructor

obj1={
    property1: 2
}

//object properties has 4 descriptors:
console.log(Object.getOwnPropertyDescriptor(obj1, "property1"))
            //1 value : value of property
            //2 writable :true/false
            //3 enumerabl :true/false (not printed to console if obj is consoled)
            //3 configurable :true/false (can't delete if false)

new Object('abcd')
Object('abckd')

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);//copies all enumerable own prpoerties form oneor more souce obj o target objee=ct
console.log(target)
console.log(returnedTarget);

const obj = Object.create(target)//create new object usinng exisitng object
 
const a={};
Object.defineProperty(a,'property1', {
    value: 42,
    writable: false,
    enumerable: true
  })
  console.log(Object.getOwnPropertyDescriptor(a, "property1"));