# Project: [automationexercise.com](https://github.com/rasme54/automationexercise.com/tree/master)

###  Main Goal:
The goal of the project is to create automated tests for the **automationexercise.com** application using **Cypress 9.5.1**. The main objective is to gain practical experience in end-to-end testing by implementing documented test cases. In the future, I plan to work on separate branches within the **Git** repository, which will allow me to experiment easily and potentially update the written Cypress tests to newer versions.

### Technologies: 
 - Javascript,
 - Cypress --v9.5.1
	 - "cypress-real-events" v1.14.0
	 - "cypress-file-upload" v5.0.8
 - Node.js -- v20.11.1

### Setup:
To run this project, make sure you have **Node.js installed**, and then: 

 1. Clone repository to your computer.
 2. Open your IDE and go to the main project folder by using the command in the terminal: 
	 <br>```cd automationexercise.com``` 
 3.  Install Cypress in the appropriate version by using the command in the terminal:
	 <br>```npm install cypress@9.5.1 --save-dev```
 4. Make sure that you have installed necessary libraries, your **package.json** file should contains:
	 <br><a><img src="https://i.ibb.co/VWRs4j0x/dependencies.jpg" alt="dependencies" border="0"></a><br>
 5. Make sure your **commands.js** file contains library references:
	 <br><a><img src="https://i.ibb.co/DfZSHXpf/dependencies2.jpg" alt="dependencies2" border="0"></a><br>
6. If you cannot find dependencies for any library, use the command:
	<br>```npm install --save-dev "cypress-file-upload"```
	<br>or
	<br>```npm install --save-dev "cypress-real-events"```
	<br>and **check package.json and commands.js again**
7. In project's main folder use:
	<br>```npx cypress open```
	
