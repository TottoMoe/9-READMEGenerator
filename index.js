// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({
  title,
  license,
  discription,
  installation,
  usage,
  contribution,
  github,
  email,
}) => 
  `# ${title}

  ### License
  <a href="https://img.shields.io/badge/license-${license}-blue.svg" target="_blank">${license}</a>
  ***
  
  ## Description
  ${discription}
  ***
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Test](#test)
  5. [Questions](#questions)
  ***
  
  <a name="installation"></a>
  ## Installation Instructions
  
  ${installation}
  ***
  
  <a name="usage"></a>
  ## Usage Information
  
  ${usage}
  ***
  
  <a name="contribution"></a>
  ## Contribution guidelines
  ${contribution}
  ***
  
  <a name="questions"></a>
  ## Questions
  
  ### GitHub Profile:
  https://github.com/${github}
  
  ### Contact Me:
  If you have any additional questions, please send me an email.
  ####${email} `



// TODO: Create an array of questions for user input
const questions = [{
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
    choices: ['Apache', 'MIT', 'MIT License', 'MIT/Apache-2.0'],
  },
  {
    type: 'input',
    name: 'github',
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
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
    });
}

// Function call to initialize app
init();