class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }

    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getTitle() {return this.title};
}
module.export = Employee;