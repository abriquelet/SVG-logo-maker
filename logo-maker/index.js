import inquirer from 'inquirer';

const inquiry = function inquirerPrompts() {
    //inquirer prompts to get svg specs
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please choose up to 3 characters to be included in your logo:',
                name: 'textContent',
            },
            {
                type: 'input',
                message: 'What color should your text be (accepts a color keyword or hexadecimal number)?',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'Should your logo be a triangle, circle, or square?',
                name: 'shape',
                choices: ['triangle', 'circle', 'square'],
            },
            {
                type: 'input',
                message: 'What color should your chosen shape be (accepts a color keyword or hexadecimal number)?',
                name: 'shapeColor',
            },
        ])
        .then(function (answers) {
            if (answers.textContent.length > 3) {
                console.log('Text length cannot exceed 3 characters');
                // Sends user back to the start of the prompts.
                inquiry();
            } else {
                assembleSVG(answers);
            }
        });
};

//begin prompts
inquiry();

const fs = require("fs");
//connect shape classes to main doc
const { triangle, circle, square } = require("./lib/shapes");

//////////////////////////////
//ADD FUNCTION TO PROCESS USER INPUT. 
//////////////////////////////
//process through shapes and color selections//

//start with empty container//

function assembleSVG(answers) {
    let svgContainer = '';
    //dictates svg overall size 
    svgContainer += '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    //apply color to chosen text
    svgContainer += `<text x="10" y="20" fill="${answers.textColor}">${answers.textContent}</text>`;
    //switch and case to choose the correct shape 
    switch (answers.shape) {
        case 'triangle':
            svgContainer += `<polygon points="100,10 40,198 190,78" fill="${answers.shapeColor}"/>`;
            break;
        case 'circle':
            svgContainer += `<circle cx="100" cy="100" r="80" fill="${answers.shapeColor}"/>`;
            break;
        case 'square':
            svgContainer += `<rect x="30" y="50" width="150" height="150" fill="${answers.shapeColor}"/>`;
            break;
    }
    //closing tag
    svgContainer += '</svg>';
    //writing to a new file
    fs.writeFileSync('logo.svg', svgContainer);
}

