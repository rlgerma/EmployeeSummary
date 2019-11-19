const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const intern = require('./lib/Intern').default;
const engineer = require('./lib/Engineer');
const manager = require('./lib/Manager');
const questions = require('./lib/ques');

const summary = () => prompt(questions);
