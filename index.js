// pull in Manager, Engineer, Intern, inquirer, and fs to use.
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const fs = require('fs');

// create array to save team data
const teamArray = [];

// start function
function start(){
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?",
    },
    {
      type: 'input',
      message: "Please enter the manager's employee ID.",
      name: 'id',
    },
    {
      type: 'input',
      message: "Please enter the manager's email address.",
      name: 'email',
    },
    {
        type: 'input',
        message: "Please enter the manager's office number.",
        name: 'officeNumber',
    },
  ])
  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    teamArray.push(manager);
    console.table(teamArray);
    addTeamMember();
  });
}

// add team member function
function addTeamMember(){
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'addToTeam',
      message: "Do you want to add a team member? Please enter yes or no",
    },
  ])
  .then((data) => {
    const answer = data.addToTeam.toLowerCase();
    if (answer === "yes"){
        addTeamType();
    } else if (answer === "no"){
        console.log(teamArray);
        createFile();
    }else{
        console.error("You must enter yes or no.");
        addTeamMember();
    }
  });
}

// select type of team member to add function
function addTeamType(){
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'teamMemberType',
      message: "Do you want to add an intern or engineer? Please enter intern or engineer.",
    },
  ])
  .then((data) => {
    const answer = data.teamMemberType.toLowerCase();
    if (answer === "intern"){
        addIntern();
    } else if (answer === "engineer"){
        addEngineer();
    }else{
        console.error("You must enter intern or engineer.");
        addTeamType();
    }
  });
}

// add intern function
function addIntern(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
      },
      {
        type: 'input',
        message: "Please enter the intern's employee ID.",
        name: 'id',
      },
      {
        type: 'input',
        message: "Please enter the intern's email address.",
        name: 'email',
      },
      {
          type: 'input',
          message: "Please enter the intern's school.",
          name: 'school',
      },
    ])
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email,data.school);
      teamArray.push(intern);
      console.table(teamArray);
      addTeamMember();
    });
}

// add engineer function
function addEngineer(){
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
      },
      {
        type: 'input',
        message: "Please enter the engineer's employee ID.",
        name: 'id',
      },
      {
        type: 'input',
        message: "Please enter the engineer's email address.",
        name: 'email',
      },
      {
          type: 'input',
          message: "Please enter the engineer's GitHub user name.",
          name: 'gitHubUserName',
      },
    ])
    .then((data) => {
      const engineer = new Engineer(data.name, data.id, data.email, data.gitHubUserName);
      teamArray.push(engineer);
      console.table(teamArray);
      addTeamMember();
    });
}

// function to create the file
function createFile(){

        forLoop ="";
// for loop to create the HTML for each employee instance based on the assigned role
        for (var i = 0; i< teamArray.length; i++){
            if (teamArray[i].getRole() === "Manager"){
                forLoop +=
                `<section class="card">
        <header>${teamArray[i].getName()}<br>${teamArray[i].getRole()}</header>
        <p>ID:${teamArray[i].getId()}</p>
        <p>Email: <a href = "mailto: ${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></p>
        <p>Office Number: ${teamArray[i].officeNumber}</p>
      </section>`
            } else if (teamArray[i].getRole() === "Engineer"){
                forLoop +=
                `<section class="card">
        <header>${teamArray[i].getName()}<br>${teamArray[i].getRole()}</header>
        <p>ID:${teamArray[i].getId()}</p>
        <p>Email: <a href = "mailto: ${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></p>
        <p>GitHub: <a href = "https://github.com/${teamArray[i].gitHubUserName}" target="_blank">${teamArray[i].gitHubUserName}</a></p>
      </section>`
            } else {
                forLoop +=
                `<section class="card">
        <header>${teamArray[i].getName()}<br>${teamArray[i].getRole()}</header>
        <p>ID:${teamArray[i].getId()}</p>
        <p>Email: <a href = "mailto: ${teamArray[i].getEmail()}">${teamArray[i].getEmail()}</a></p>
        <p>School: ${teamArray[i].school}</p>
      </section>`
            }
        }

    const filename = `index.html`;

// write the file
    fs.writeFile(filename, 
        `<!DOCTYPE html>
        <html>
          <head>
            <title>My Team</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" type="text/css" href="./style.css" />
          </head>
          <body>
            <!-- Header -->
            <header>
              <h1>My Team</h1>
            </header>
        
            <!-- Body -->
            <main>
              <!-- Product Cards -->
              <div class="team">
                ${forLoop}
              </div>
            </main>
          </body>
        </html>`
        , (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// calling the start function
start();