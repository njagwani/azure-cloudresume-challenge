# Azure-CloudResume-Challenge

Hello!!!🥳

This is the repository of my first [A Cloud Guru Resume Challenge](https://acloudguru.com/blog/engineering/cloudguruchallenge-your-resume-in-azure) 

I started off the project by building the frontend which will contain your Website. 

Before starting this project, I created my own github repository for Azure Cloud Resume Challenge. 
### Pre-requisites for this Project
- An Azure Account to deploy the Website and Azure Functions
- .NET Core 3.1 SDK - Cross platform, opensource, framework to develop the Azure Function
- Visual Studio Code - Code Editor for frontend and backend programming
- C# Extension on Visual Studio Code
- Azure Functions Core Tools - Required to develop Azure Functions locally on own machine.
- Azure Cli - Azure Command line interface to manage Azure resources.
### Frontend 
#### Resume Template
In order to get started, I first had to create my own Resume. In order to create my Resume, I decide to use a Resume template which is based on n beautiful resume NuxtJs code developed by [Ivan Greve](https://github.com/ivangreve/nuxt-resume) and 
[StartBootstrap Theme](https://github.com/startbootstrap/startbootstrap-resume/)

Commands used to build Resume template based on NuxtJs code:
- Install NodeJS (Pre-requisite)
- $npm install - To install dependencies
- $npm run build - To Build application
- $npm run dev - To Run in Dev Mode
- $npm run generate - To generate static code, all generated code will appear in ./dist folder

Changes made to locales/en with own Resume details like Name, Experience, Certifications, Skills, Linkedin links, Github links etc.

I made a few changes on the layout of my Resume template.

Frontend pretty much has all the contents from the ./dist folder & main.js (Created seperately which contains Java script code for visitor counter functionality).

Index.html contains the element for the counter <id="counter"> to display the counter info.

Once my frontend was ready, I then started to build my backend.
### Backend 

To get started with Backend, we first need to create an Azure Cosmos DB account, database, container and data.

When create an Azure Cosmos DB account, make sure to select the following:

- API -'Core SQL'
- Capacity - 'Serverless'

Once you have created Azure Cosmos DB, create your Database, Container and Items under "Data Explorer"