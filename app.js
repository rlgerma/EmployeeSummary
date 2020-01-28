var inquirer = require("inquirer");

var fs = require("fs");

var path = require("path");

var Employee = require("./lib/Employee");

var Intern = require("./lib/Intern");

var Engineer = require("./lib/Engineer");

var Manager = require("./lib/Manager");

var company = [];

function summary() {
  console.log("Welcome to Team Builder!");
  inquirer
    .prompt([
      {
        name: "managerName",
        message: "Enter Manager's name"
      },
      {
        name: "id",
        message: "Enter Manager ID #"
      },
      {
        name: "email",
        message: "Enter Manager's email"
      },
      {
        name: "staplers",
        message: "Enter number of staplers stolen from employees by Manager"
      }
    ])
    .then(function(answers) {
      var manager = new Manager(
        answers.managerName,
        answers.id,
        answers.email,
        answers.staplers
      );
      console.log(manager);
      company.push(manager);
      teamBuilder();
    });
}

function engineerAsk() {
  inquirer
    .prompt([
      {
        name: "engineerName",
        message: "Enter Engineer's name"
      },
      {
        name: "id",
        message: "Enter Engineer ID #"
      },
      {
        name: "email",
        message: "Enter Engineer's email"
      },
      {
        name: "gitHub",
        message: "Enter Engineer's GitHub Username"
      }
    ])
    .then(function(answers) {
      var engineer = new Engineer(
        answers.engineerName,
        answers.id,
        answers.email,
        answers.gitHub
      );
      company.push(engineer);
      console.log(company);
      teamBuilder();
    });
}

function internAsk() {
  inquirer
    .prompt([
      {
        name: "internName",
        message: "Enter Intern's name"
      },
      {
        name: "id",
        message: "Enter Intern's ID #"
      },
      {
        name: "email",
        message: "Enter Intern's email?"
      },
      {
        name: "bootCamp",
        message: "Enter Intern's boot camp attended"
      }
    ])
    .then(function(answers) {
      var intern = new Intern(
        answers.internName,
        answers.id,
        answers.email,
        answers.bootCamp
      );
      company.push(intern);
      console.log(company);
      teamBuilder();
    });
}

function teamBuilder() {
  inquirer
    .prompt([
      {
        name: "employee",
        type: "list",
        message: "Add additional Employees or press continue",
        choices: ["Engineer", "Intern", "Continue"]
      }
    ])
    .then(function(answer) {
      if (answer.employee == "Engineer") {
        engineerAsk();
      } else if (answer.employee == "Intern") {
        internAsk();
      } else {
        fs.writeFile("company.html", generateHTML(company), function(err) {
          if (err) throw err;
          console.log("Your team is saved to team.html");
          console.log("Thanks for using Team Builder!");
        });
      }
    });
}

function generateHTML(data) {
  console.log(data);
  return '<!DOCTYPE html>\n    <html>\n    <head>\n        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\n        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>\n        <meta name="theme-color" content="#2196C3">\n        <title>Your Team</title>\n\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n        <style>\n        /* Custom Stylesheet */\n\n    .default_color{background-color: #2196C3 !important}\n\n    .default_color_text{color: #2196C3 !important}\n\n    .icon-block {\n        padding: 0 15px;\n    }\n\n    #intro, #work, #team {padding-top: 4rem;}\n\n\n    #index-banner {\n        min-height: 632px;\n        max-height: 864px;\n        position: relative;\n        background-color: #2196C3;\n    }\n\n    #nav_f{\n        box-shadow: none !important; \n        -webkit-box-shadow:none !important;\n    }\n\n    .text_h {\n        padding: 15% 0;\n        font-size: 6.0em;\n        font-weight: 100;\n        color:white;\n    }\n\n    .brand-logo{\n        position: absolute;\n        color: #fff;\n        display: inline-block;\n        font-size: 2.1rem;\n        font-style: normal;\n        font-weight: 100;\n        padding: 0;\n        letter-spacing: 7px;\n    }\n\n    .text_h2 {font-weight: 100;margin-bottom: 4%; line-height: 4.5rem;}\n\n    .span_h2 {font-weight: 300;color: #2196C3;}\n\n    .text_b{color: #2196C3;}\n\n    .in{font-weight: 400 !important; font-style: normal !important;}\n\n    .promo i {\n        color: #2196C3;\n        font-size: 7rem;\n        display: block;\n    }\n    .card-content a {color: #2196C3;}\n\n    .card-content a:hover {color: #2196C3;}\n\n    #work, #team{background: rgb(247, 247, 247);}\n\n    .text_pink{color:#EF9A9A;}\n\n    nav ul a {\n        font-size: 1.2rem;\n        color: #FFF;\n        letter-spacing: 2px;\n        display: block;\n        font-weight: 300;\n        padding: 0px 15px;\n    }\n\n    .cd-headline.type .cd-words-wrapper {\n        vertical-align: top;\n        overflow: hidden;\n    }\n\n    .cd-headline.type .cd-words-wrapper::after {\n        /* vertical bar */\n        content: \'\';\n        position: absolute;\n        right: 0;\n        top: 50%;\n        bottom: auto;\n        -webkit-transform: translateY(-50%);\n        -moz-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n        -o-transform: translateY(-50%);\n        transform: translateY(-50%);\n        height: 90%;\n        width: 1px;\n        background-color: #aebcb9;\n    }\n\n    .cd-headline.type .cd-words-wrapper.waiting::after {\n        -webkit-animation: cd-pulse 1s infinite;\n        -moz-animation: cd-pulse 1s infinite;\n        animation: cd-pulse 1s infinite;\n    }\n    .cd-headline.type .cd-words-wrapper.selected {\n        background-color: #FFF;\n    }\n\n    .cd-headline.type .cd-words-wrapper.selected::after {\n        visibility: hidden;\n    }\n\n    .cd-headline.type .cd-words-wrapper.selected b {\n        color: #2196C3;\n    }\n\n    .cd-headline.type b {\n        visibility: hidden;\n    }\n\n    .cd-headline.type b.is-visible {\n        visibility: visible;\n    }\n\n    .cd-headline.type i {\n        position: absolute;\n        visibility: hidden;\n    }\n    .cd-headline.type i.in {\n        position: relative;\n        visibility: visible;\n    }\n\n    @-webkit-keyframes cd-pulse {\n        0% {\n            -webkit-transform: translateY(-50%) scale(1);\n            opacity: 1;\n        }\n        40% {\n            -webkit-transform: translateY(-50%) scale(0.9);\n            opacity: 0;\n        }\n        100% {\n            -webkit-transform: translateY(-50%) scale(0);\n            opacity: 0;\n        }\n    }\n    @-moz-keyframes cd-pulse {\n        0% {\n            -moz-transform: translateY(-50%) scale(1);\n            opacity: 1;\n        }\n        40% {\n            -moz-transform: translateY(-50%) scale(0.9);\n            opacity: 0;\n        }\n        100% {\n            -moz-transform: translateY(-50%) scale(0);\n            opacity: 0;\n        }\n    }\n\n    @keyframes cd-pulse {\n        0% {\n            -webkit-transform: translateY(-50%) scale(1);\n            -moz-transform: translateY(-50%) scale(1);\n            -ms-transform: translateY(-50%) scale(1);\n            -o-transform: translateY(-50%) scale(1);\n            transform: translateY(-50%) scale(1);\n            opacity: 1;\n        }\n        40% {\n            -webkit-transform: translateY(-50%) scale(0.9);\n            -moz-transform: translateY(-50%) scale(0.9);\n            -ms-transform: translateY(-50%) scale(0.9);\n            -o-transform: translateY(-50%) scale(0.9);\n            transform: translateY(-50%) scale(0.9);\n            opacity: 0;\n        }\n        100% {\n            -webkit-transform: translateY(-50%) scale(0);\n            -moz-transform: translateY(-50%) scale(0);\n            -ms-transform: translateY(-50%) scale(0);\n            -o-transform: translateY(-50%) scale(0);\n            transform: translateY(-50%) scale(0);\n            opacity: 0;\n        }\n    }\n\n    #status {\n        width:200px;\n        height:200px;\n        position:absolute;\n        left:50%; /* centers the loading animation horizontally one the screen */\n        top:50%; /* centers the loading animation vertically one the screen */\n        background-image:url(../img/status.gif); /* path to your loading animation */\n        background-repeat:no-repeat;\n        background-position:center;\n        margin:-100px 0 0 -100px; /* is width and height divided by two */\n    }\n\n    @media only screen and (max-width: 480px) {\n        .text_h {\n            padding: 4% 0;\n            font-size: 5em;\n            font-weight: 100;\n            color: white;\n        }\n    }\n\n    input, textarea {\n        border-bottom: 1px solid #fff;\n    }\n\n    nav a.button-collapse {\n        left: -25px;\n    }\n\n    .card-avatar .waves-effect {\n        text-align: center;\n        margin-top: 20px;\n    }\n\n    .card-avatar img {\n        height: 150px;\n        width: 150px;\n        border-radius: 75px;\n    }\n\n    .card-avatar .card-content {\n        text-align: center;\n    }\n\n    .card .card-content p {\n        margin: 15px 0px;\n    }\n\n    .card-avatar .card-content i {\n    font-size: 1.5rem;\n    }\n\n    .card-avatar .card-content .card-title {\n        line-height: 30px !important;\n    }\n\n    footer.page-footer {\n        margin-top: 0px !important;\n    }\n        </style>\n    </head>\n<body>\n    <div class="navbar-fixed">\n        <nav id="nav_f" class="default_color" role="navigation">\n            <div class="container">\n                <div class="nav-wrapper">\n                    <a href="#" id="logo-container" class="brand-logo center">Your Company</a>\n                </div>\n            </div>\n        </nav>\n    </div>\n        <div class="container">\n            <div class="row">\n                <div  class="col s12">\n                    <h2 class="center header text_h2">Meet your<span class="span_h2"> Team  </span></h2>\n                </div>\n            </div>\n        </div> \n\n        <div class="container">\n            <div class="row" id="buildTeam">\n                    \n            </div>\n            </div>\n        </div>\n    \n\n        <footer class="page-footer">\n        <div class="container">\n            <div class="row">\n                <div class="col l3 s12">\n                  <h5 class="white-text">Made by</h5>\n                  <ul>\n                     <li><a class="grey-text text-lighten-3" href="https://richardgermaine.herokuapp.com/">Richard Germaine</a></li>\n                  </ul>\n                </div>\n            </div>\n        </div>\n        <div class="footer-copyright">\n            <div class="container">\n        \t    \xA9 2020 Your Company\n            </div>\n        </div>\n    </footer>\n\n        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> \n        <script type="text/javascript"> \n\n                let company = '.concat(
    JSON.stringify(data),
    ';\n                company.forEach(function(res){\n                    if (res.title == \'Manager\') {\n                        $("#buildTeam").append(\'<div class="col s12 m3"><div class="card card-avatar"><div class="waves-effect waves-block waves-light"> </div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">\'+res.name+\'<br /> <small><em><a class="red-text text-darken-1" href="#">\'+res.title+\'</a></em></small></span><p><div class="blue-text text-lighten-2"> <i class="material-icons">face</i></div><ul><li> Email: \'+res.email+\'</li><li> ID#: \'+res.id+\'</li><li> Staplers Taken: \'+res.staplers+\'</li></ul></p></div></div>\'); }\n                    else if(res.title == \'Engineer\') {\n                        $("#buildTeam").append(\'<div class="col s12 m3"><div class="card card-avatar"><div class="waves-effect waves-block waves-light"> </div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">\'+res.name+\'<br /> <small><em><a class="red-text text-darken-1" href="#">\'+res.title+\'</a></em></small></span><p><div class="blue-text text-lighten-2"> <i class="material-icons">developer_mode</i></div><ul><li> Email: \'+res.email+\'</li><li> ID#: \'+res.id+\'</li><li> GitHub: \'+res.gitHub+\'</li></ul></p></div></div>\'); }\n                    else if(res.title == \'Intern\') {\n                        $("#buildTeam").append(\'<div class="col s12 m3"><div class="card card-avatar"><div class="waves-effect waves-block waves-light"> </div><div class="card-content"> <span class="card-title activator grey-text text-darken-4">\'+res.name+\'<br /> <small><em><a class="red-text text-darken-1" href="#">\'+res.title+\'</a></em></small></span><p><div class="blue-text text-lighten-2"> <i class="material-icons">child_care</i></div><ul><li> Email: \'+res.email+\'</li><li> ID#: \'+res.id+\'</li><li> Bootcamp: \'+res.bootCamp+\'</li></ul></p></div></div>\'); }\n                });\n            </script>\n        \n</body>\n</html>'
  );
}

summary();
