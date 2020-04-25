const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [{
        type: "input",
        name: "title",
        message: "What is your project called?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description for your project"
    },
    {
        type: "input",
        name: "installation",
        message: "How is this application installed? (If inapplicable leave blank)"
    },
    {
        type: "input",
        name: "usage",
        message: "How is this application used?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Any notable contributions? If so who/how"
    },
    {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your GitHub Email"
    },
];

// function writeToFile(fileName, data) {}

function init() {
    return inquirer.prompt(questions)
}

init();