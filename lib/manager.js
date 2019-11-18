const Employee = require('./Employee');

class Manager extends Employee {
 constructor(name, id, staplers){
     super(name, id, email);

     this.staplers = staplers;
 }

 getStaplers() {return this.staplers;}
 getTitle() {return "Manager/Stapler Thief"}
}
module.exports = Manager;