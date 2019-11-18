ques = {
    qs: [ {
        type: "input",
        name: "first",
        message: "Employee first name?"
    },
    {
        type: "input",
        name: "last",
        message: "Employee last name?"
    },
    {
        type: "list",
        name: "title",
        message: "What title does the employee hold?",
        choices: ["Manager", "Engineer", "Intern"]
    }],

    intern:[
        {
            type:"input",
            name: "repo",
            message: "what coding boot camp did they come from?"
        }],
    manager:[

        {
            type: "input",
            name: "stapler",
            message: "how many staplers have they collected?"
        }],
    engineer:[
        {
            type: "input",
            name: "repo",
            message: "what is their gitlab/github link?"
        }],
    
};
export default ques;