//required packages to run application
import inquirer from 'inquirer';
import fs from 'fs';
//inquirer used below to collect inputs to place into the following function to assemble the custom svg.
function inquiry() {
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
                console.log('Text length cannot exceed 3 characters'); //ensures user can't bypass character limit and returns them to the beginning of the prompts.
                inquiry();
            } else {
                assembleSVG(answers);
            }
        });
}
//puts the answers together
function assembleSVG(answers) {
    let svgContainer = '';
    svgContainer += '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    
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
//ensures letters aren't floating into outerspace
    let textX = 0;
    let textY = 0;
    switch (answers.shape) {
        case 'triangle':
        case 'circle':
        case 'square':
            textX = 100;
            textY = 100;
            break;
    }


    svgContainer += `<text x="${textX}" y="${textY}" fill="${answers.textColor}" text-anchor="middle">${answers.textContent}</text>`;
    svgContainer += '</svg>';

    fs.writeFileSync('logo.svg', svgContainer);
}

inquiry();

