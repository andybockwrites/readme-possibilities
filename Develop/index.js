// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project Title?',
        validate: (value) => { if (value) { return true } else { return `Please name you project.` } },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your product description?',
        validate: (value) => { if (value) { return true } else { return `Please describe your project.` } },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What did you do to install your project? What steps did you take?',
        validate: (value) => { if (value) { return true } else { return `Please explain your installation process.` } },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would you describe the usage? Provide instructions.',
        validate: (value) => { if (value) { return true } else { return `Please instructions for how to use your project.` } },
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators and/or source code. If none, type N/A.',
        validate: (value) => { if (value) { return true } else { return `Please provide a list, or type N/A.` } },
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Have you developed any tests for your application? Can you provide any examples? If none, type N/A',
        validate: (value) => { if (value) { return true } else { return `Please provide any tests for your application, or type N/A.` } },
    },
];

function generateReadMe() {
    const inputData =
    `
        # Title
        # ${questions.title}

        ## Description

        ${questions.description}

        ## Table of Contents

        1. [Installation] (#installation)
        2. [Usage] (#usage)
        3. [Credits] (#credits)
        4. [Tests] (#tests)

        ## Installation

        ${questions.installation}

        ## Usage

        ${questions.usage}

        ## Screenshot

        N/A

        ## Credits

        ${questions.credits}

        ## License

        N/A

        ## Badges

        N/A

        ## Features

        N/A

        ## Contribution

        N/A

        ## Tests

        ${questions.tests};
    `
    return inputData;
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let answers = generateReadMe(data)
    fs.writeFile(fileName, answers, (err) =>
    err ? console.log(err) : console.log("Success!"),)
}

// TODO: Create a function to initialize app
function init() {
    fileName = 'README.md',
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data, 'answers'),
        writeToFile(fileName, data)
    }
    )
};

// Function call to initialize app
init();
