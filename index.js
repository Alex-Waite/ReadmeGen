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
// Function to generate a title, if left blank nothing appears
function generateMarkdownTitle(questions) {
    return `
# PROJECT TITLE: ${questions.title}
${questions.description}

# TABLE OF CONTENTS
1. [INSTALLATION](#install)
2. [USAGE](#usage)
3. [CONTRIBUTIONS](#contributions)
4. [CONTACT](#contact)
  
<a name="install"></a>
# INSTALATION: 
${questions.installation}
  
<a name="usage"></a>
# USAGE:
${questions.usage}

![Screenshot of application](screeny.png)

<a name="contributions"></a>
# CONTRIBUTIONS:
${questions.contributions}

<a name="contact"></a>
# CONTACT
If you have any feedback or bugs to report please contact me via email at ${questions.email}.
  
[Find me on linkedIn!](${questions.linkedin}) 
  
[![Follow me on GitHub!](https://img.shields.io/github/followers/${questions.github}?label=Follow%20me%20on%20GitHub%21&style=social)](github.com/${questions.github})
  `
};



// The workings to add data into a readme template and apply the template to the users README.md file
init()
    .then(function (questions) {
        const titlePart = generateMarkdownTitle(questions);
        return writeFileAsync("editing/README.md", titlePart);
    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    });

// !!!!STUFF I HAVE COMMENTED OUT IN CODE!!! //
// 
// function writeToFile("README.md", data) {}