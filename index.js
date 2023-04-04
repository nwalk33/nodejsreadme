const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project.',
    },
    {
        type: 'input',
        name: 'table',
        message: 'Create a table of contents for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Why would one use your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses do you want for your application?',
        choices: ['MIT', 'GNU', 'BSD'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Are there any contributions would you like to give credit towards?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How would one test your application?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    }

];

function generateREADME(answers) {
    return `
        # Title 
        ${answers.title}

        ## Description
        ${answers.description}

        ## Table of Contents
        ${answers.table}

        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## License
        ${answers.license}

        ## Contributing
        ${answers.contributing}

        ## Tests
        ${answers.tests}

        ## Questions
        ${answers.github}  
        ${answers.email}
        `;
}

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const readmeContent = generateREADME(answers);
        await writeFileAsync('README.md', readmeContent);
        console.log('Your README.md has been created!');
    } catch (error) {
        console.error(error);
    }
}

init();
