const Employee = require('./Employee');

class Engineer extends Employee {
 constructor(name, id, email, repo){
     super(name, id, email, "Engineer");

     this.repo = repo;
 }

 getRepo() {return this.repo;}
 getTitle() {return "Engineer";}
}
module.exports = Engineer;