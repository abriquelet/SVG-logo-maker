//import inquirer and fs, newer version of inquirer forces me into this syntax or it breaks. 
import('inquirer').then(function(inquirer){
    //prompt code????
    inquirer
    .prompt([
        
    ])
}).catch(function(err){
    console.error(error);
});
//fs seems to work though, keeps tabs in case this breaks too (doesn't need installed so it might not)
const fs = require("fs");
//connect shape classes to main doc
const {triangle, circle, square} = require("./lib/shapes");

//////////////////////////////
//ADD FUNCTION TO PROCESS USER INPUT. 
//////////////////////////////