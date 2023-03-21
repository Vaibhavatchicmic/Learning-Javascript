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


//Inheritance
    //use extends keyword
class CAR{
    constructor(brand){
        this.carname=brand;
    }
    present(){
        return 'I have a '+ this.carname
    }
}
class Model extends CAR{
    constructor(brand,mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return this.present()+", it is a "+this.model;
    }
}

let car2= new Model('Tesla','Model S');
console.log(car2.show())


//Getters and Setters
class Car3 {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }
  
  const myCar = new Car3("Ford");
  myCar.carname = "Volvo";
  console.log( myCar.carname);
//we can call get and set methods without parameters

//No Hoisting
//unlike functions and other declarations class declarations are not hoisted

//Static Methods
//can't call a static method on an object only on an object class
class Class1{
    constructor(no) {
        this.No=no;
        console.log("int Class1 constructor");
    }
    static hello(x){
        console.log("static hello from Class1 ", ((x!=null)?x.No:0));
    }
}
Class1.hello();
obj1=new Class1(5);
// obj1.hello() //error
//can use
Class1.hello(obj1);
