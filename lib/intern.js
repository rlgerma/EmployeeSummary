const Employee = require('./Employee');

class Intern extends Employee {
 constructor(name, id, email, bootCamp) {
   super(name, id, email);
   this.title = "Intern";
   this.bootCamp = bootCamp;
  }

 getBootCamp() {
   return this.bootCamp;
  }
}
module.exports = Intern;