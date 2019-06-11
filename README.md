# KamSafer

KamSafer is a web app that enables you to log your trip's information. The purpose, total kilometers travelled by your vehicle, and notes to include your destination.

# Brief summary of key requierments/features
 - Create logs that enables you to log your trip's information using modern technologies:React.js.
 - Allows the users used app to download his logs in excel version.
 
# Features 
# Main functionality
 - Can log in using the general user and password of the Mercy Corps organization 
 - Select the car I’ll be using
 - Confirm your trips and keep track of my kilometers travelled
 - Show the report of all logged trips
 - View trips by date
 - Download an excel version of my reports
 - Leave the account
 # Key Technologies   
 - React.js : https://reactjs.org/docs/getting-started.html
 - Sequalize : http://docs.sequelizejs.com/
 - Express JS : https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
 - Material UI : https://material-ui.com/
 
# Architecture
# Code structure
- The client folder contains the front end code
- The src folder contains the backend and DB code
- The editor begins at client/components/login/index.js
- config.js contains the dummy data for the app
- The entry point is an app.js file which manages all components, get and send data to the src/app.js file which contains all app  endpoints


# User Guide
# Development Setup
- Make sure you have Node 8 and and NPM>5 installed
- Run npm i to install npm deps
- Run npm run dev:build to build the project

# Demo
https://kamsafer.herokuapp.com/

# How to use KamSafer website
- you should have a general username and password related to Mercy Core employees to login
- select the car model you want to use 
- click add trip button to add trip, then add information about your trip
- click show report button to see all trips related to this car model
- click on Download report to get a excel version 
- click logout to leave account 

# Team Member
- Sama Amro
- Shaima Ihdoosh
- Orjwan Rajaby
    
