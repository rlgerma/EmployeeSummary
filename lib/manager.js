const Employee = require('./Employee');

class Manager extends Employee {
 constructor(name, id, email, staplers){
    super(name, id, email);
    this.title = "Manager"
    this.staplers = staplers;
 }

 getStaplers() {
    return this.staplers;
 }
}
module.exports = Manager;