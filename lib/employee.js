var inquirer = require("inquirer");
var path = require("path");
var app = require("../app.js");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.title = "Employee";
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    };
    getTitle() {
        return this.title
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };
}
module.exports = Employee;