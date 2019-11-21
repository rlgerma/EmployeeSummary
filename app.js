// vars const 
const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const intern = require('./lib/Intern');
const engineer = require('./lib/Engineer');
const manager = require('./lib/Manager');
const questions = require('./lib/ques');

const nameDb = [];

const summary = () =>{
   console.log("Welcome to Team Builder")
    
   inquirer
   .prompt(Ques.qs)
   .then(function(who){
      
   })
   inquirer
   .prompt(Ques.title)
   .then(function(what){

   })
   
}   
summary();
