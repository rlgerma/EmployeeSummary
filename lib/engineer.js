const Employee = require('./Employee');

class Engineer extends Employee {
 constructor(name, id, email, gitHub){
    super(name, id, email);
    this.title = "Engineer";
    this.gitHub = gitHub;
  }

  getRepo() {
    return this.github;
  }
}
module.exports = Engineer;