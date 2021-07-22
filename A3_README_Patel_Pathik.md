# Assignment 3

* Date Created: 18 07 2021
* Last Modification Date: 21 07 2021
* Feature Developed : User Management

## Authors

Name: Pathik Kumar Patel (pt999986@dal.ca)

User Management Feature Branch URL: https://github.com/smanraj54/Dal_Web_Group10/tree/A3_User_Management_Pathik

Main Branch URL: https://github.com/smanraj54/Dal_Web_Group10/tree/main - Contains Front-End Code (React Code)

Backend Branch URL: https://github.com/smanraj54/Dal_Web_Group10/tree/projectBackend - Contains Back-End Code(Node & Express)

Heroku Project Link: https://group10proposalweb.herokuapp.com/

## Feature - User Management

* Tasks
- login
- signUp
- forgot password / reset password
- delete user
- logout
- mainaing user session after login

## Getting Started

The project is developed using frontend and backend technologies. The feature developed here is User Profile Management. The technologies used for developing frontend framework is React js and for backend development Express js which is based on Node js is used.

### Prerequisites

To have a local copy of this assignment up and running on your local machine , you need to install following software / libraries / pulg-ins :
- node js [library]
- (optional) Visual Studio Code [editor]

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

To run this project on the local machine follow the steps below:
- Download the zip file of the project from github.
- Open the project in code editor.
- Open the terminal at the project folder.
- Run npm install to install the node modules required for the project.
- After installing the node modules, run "npm start" command to start the application.
- You will see "started server" message in the terminal.
- Open "http://localhost:3000/" in the browser.
- You will be able to see the homepage.

## Deployment

Steps to deploy this on a live system:

- Upload your code to github.
- Create an account on Heroku.
- After creating the account, select create app.
- Choose region and app name.
- Connect the github repo of your code with heroku.
- Select the branch you want to deploy.
- After successfull deployment, select open app.
- Your applicationw is successfully deployed to heroku and will be running.

## Built With

* [Node.js] (https://nodejs.org/en/download/)- The backend framework used.
* [Express.js] (https://expressjs.com/) - Node.js web application framework.
* [React.js] (https://reactjs.org/docs/create-a-new-react-app.html) – The frontend Framework used.
* [Github] (https://github.com/)- The online Code Repository
* [Heroku](https://www.heroku.com) – the Deployment server used

## File Created
* Frontend Files
- ForgotPassword.js
- Homepage.js
- Login.js
- Question.js
- SignUp.js
- UpdatePassword.js
- UserHomepage.js
- Header.js
- UserHeader.js
- Footer.js

* Backend Files
- forgotPassword.js
- login.js
- deleteUser.js
- signup.js

## Sources Used

### login.js
Lines 17 - 21
---------------

```
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

```

The code above was created by adapting the code in [codegrepper](https://www.codegrepper.com/code-examples/javascript/frameworks/dist/cors+issue+node+js) as shown below: 

```
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

```

- The code in [codegrepper](https://www.codegrepper.com/code-examples/javascript/frameworks/dist/cors+issue+node+js) was implemented by user on codegrepper forum
- [codegrepper](https://www.codegrepper.com/code-examples/javascript/frameworks/dist/cors+issue+node+js) 's Code was used because i was not able to call my api from the frontend due to the security restrictions. 
- [codegrepper](https://www.codegrepper.com/code-examples/javascript/frameworks/dist/cors+issue+node+js)'s Code was modified by Pathik Patel.

## Acknowledgments

* https://www.codegrepper.com/code-examples/javascript/frameworks/dist/cors+issue+node+js
* https://react-bootstrap.github.io/
* https://expressjs.com/
* https://reactjs.org/
* https://stackoverflow.com/