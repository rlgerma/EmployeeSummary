const Employee = require('/Employee');

class Intern extends Employee {
 constructor(name, id, bootcamp){
     super(name, id, email);

     this.bootcamp = bootcamp;
 }

 getBootcamp() {return this.bootcamp;}
 getTitle() {return "coffee runner/Intern"}
}
module.exports = Intern;