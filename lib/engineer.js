const Employee = require('./Employee');

class Engineer extends Employee {
 constructor(name, id, repo){
     super(name, id, email);

     this.repo = repo;
 }

 getRepo() {return this.repo;}
 getTitle() {return "Engineer"}
}
module.exports = Engineer;