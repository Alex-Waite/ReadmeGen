// Node Module declarations
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Import tag for retrieveing README.md content after data is applied

// Function used to transfer the users data to the README.md file
const writeFileAsync = util.promisify(fs.writeFile);

// Inquirer questions to obtain content for the README.md file
const questions = [{
        type: "input",
        name: "title",
        message: "Enter a descriptive title for your project."
    },
    {
        type: "input",
        name: "description",
        message: "Write a description for your project."
    },
    {
        type: "input",
        name: "installation",
        message: "How is this application installed? (If inapplicable leave empty)"
    },
    {
        type: "input",
        name: "usage",
        message: "How is this application used?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Any notable contributions? If so who/how (If inapplicable leave empty)"
    },
    {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL. (If inapplicable leave empty)"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username. (If inapplicable leave empty)"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your GitHub Email. (If inapplicable leave empty)"
    },
];

// Function to prompt the questions and begin the readme generation
function init() {
    return inquirer.prompt(questions)
}

function generateMarkdown(questions) {
    return `
  # PROJECT TITLE: ${questions.title}
  ${questions.description}
  
  `;
}

// The workings to add data into a readme template and apply the template to the users README.md file
init()
    .then(function (questions) {
        const readMe = generateMarkdown(questions);
        return writeFileAsync("README.md", readMe);
    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    });





// !!!!STUFF I HAVE COMMENTED OUT IN CODE!!! //

// function writeToFile("README.md", data) {}