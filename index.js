// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter your project title. ',
  },
  {
    type: 'input',
    name: 'discription',
    message: 'Please enter the project discription. ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter the project installation instructions. ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter the project usage information. ',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter the project contribution guidelines. ',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter the project test instructions. ',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your application. ',
    choices: ['Apache','MIT','MIT License','MIT/Apache-2.0'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username. ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address. ',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmePageContent = generateREADME(answers);
  
      fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    });
}

// Function call to initialize app
init();
