// what are possible ways to create objects in js
//*object Literal syntax
var object={
    name:"sudheer",
    age:34
}
//*object constructor
var object=Object();
//*objects create method
var object=Object.create(null)
//*function constrouctor
function Person(name){
    this.name=name;
    this.age=21;
}
var object=new Person("swetha");
//*function constrouctor with prototype
function Person(){}
    Person.prototype.name="swetha";
    var object=new Person();
//*es6 class syntax
class Person{
    constructor(name){
        this.name=name;
    }
}
var object=new Person("swetha")
//difference between call,apply,bind
//*call
var employee1={firstName:"jhon",lastName:"radson"};
var employee2={firstName:"jimmy",lastName:"baily"};
function invite(greeting1,greeting2){
    console.log(greeting1+" "+this.firstName+" "+this.lastName+", "+greeting2);
}
invite.call(employee1,"hello","how are you?");
invite.call(employee2,"hello","how are you?");
//*apply
var employee1={firstName:"jhon",lastName:"radson"};
var employee2={firstName:"jimmy",lastName:"baily"};
function invite(greeting1,greeting2){
    console.log(greeting1+" "+this.firstName+" "+this.lastName+", "+greeting2);
}
invite.apply(employee1,["hello","how are you?"]);
invite.apply(employee2,["hello","how are you?"]);
//*bind
var employee1={firstName:"jhon",lastName:"radson"};
var employee2={firstName:"jimmy",lastName:"baily"};
function invite(greeting1,greeting2){
    console.log(greeting1+" "+this.firstName+" "+this.lastName+", "+greeting2);
}
var inviteEmployee1=invite.bind(employee1);
var inviteEmployee2=invite.bind(employee2);
inviteEmployee1("hello","how are you?");
inviteEmployee1("hello","how are you?");