const Employee = require('./Employee');

class Intern extends Employee {
 constructor(name, id, email, bootcamp) {
     super(name, id, email, "Intern");

     this.bootcamp = bootcamp;
 }

 getBootcamp() {return this.bootcamp;}
 getTitle() {return "coffee runner/Intern"}
}
module.exports = Intern;