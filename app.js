const inquirer = require('inquirer');
const employee = require('./lib/employee');
const intern = require('./lib/Intern');
const engineer = require('./lib/Engineer');
const manager = require('./lib/Manager');
const questions = require('./lib/ques');

const summary = () => prompt(questions);
summary();