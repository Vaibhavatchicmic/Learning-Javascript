//use keyword class to creat a class, always add a methd named constructor()
class ClassName{
    constructor(){
        this.attr=10
        console.log("in constructor")
    }
    method_1(){
        console.log("mehtod 1 called")
        return this.attr;
    }
}

class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}
//JS class is not an object it is a template for js objects

const car1=new Car("car1",2019);

const obj= new ClassName();
console.log(obj)
console.log(obj.attr)
console.log(obj.method_1())