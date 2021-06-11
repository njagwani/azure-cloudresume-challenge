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
In order to get started, I first had to create my own Resume. In order to create my Resume, I decide to use a Resume template which is based on a beautiful resume NuxtJs code developed by [Ivan Greve](https://github.com/ivangreve/nuxt-resume) and 
[StartBootstrap Theme](https://github.com/startbootstrap/startbootstrap-resume/)

Commands used to build Resume template based on NuxtJs code:
- Install NodeJS (Pre-requisite)
- $npm install - To install dependencies
- $npm run build - To Build application
- $npm run dev - To Run in Dev Mode
- $npm run generate - To generate static code, all generated code will appear in ./dist folder

Changes were made to locales/en with own Resume details like Name, Experience, Certifications, Skills, Linkedin links, Github links etc.

I made a few changes on the layout of my Resume template.

Frontend pretty much has all the contents from the ./dist folder & main.js (Created seperately which contains Java script code for visitor counter functionality).

Index.html contains the element for the counter <id="counter"> to display the counter info.

Once my frontend was ready, I then started to build my backend.
### Backend 

To get started with Backend, we first need to create an Azure Cosmos DB account, database, container and data.

When create an Azure Cosmos DB account, make sure to select the following:

- API -'Core SQL'
- Capacity - 'Serverless'

Once you have created Azure Cosmos DB, you wil then need to create your Database, Container and Items under "Data Explorer"

The Items inside your Database should contain the id and count.Since, we need counter for 1 website, we set the id to be 1 and count is set to 0 as we dont have any visitors. 

The Next step is to create an Azure Function, connect Azure DB bindings to the function and then view the counter data via the function. 

Azure Function is a Serverless solution that allows us to create pieces of code that are Event-driven and we don't have to worry about the infrastructure behind the pieces of code. Azure Functions also has this feature called bindings which allows us to connect other resources to our function.

#### Azure Function in Visual Code

You will need to sign in to your Azure Cloud Account under VS code and then create a new project select api (under backend folder), select C# for the language, select .NET 3 CORE for your runtime, Select Httptrigger as your template and I called it GetResumeCounterNitin and set the access rights to be Function.

Command used to run the Azure Function

- func host start

After you run this function, you should then obtain a http URL which can then be used to test your function with Azure Cosmos DB at a later stage.

I then followed [Azure Functions Cosmos DB bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2) to bind Azure Function with Cosmos DB. This part of the project was a major challenge. 

Later on, I was then able to get the code to work with Cosmos DB bindings by performing the following:
 - Added Azure Resume Connection String to local.settings.json 
 - Adding bindings to the code (GetResumeCounter.css). 
 - Added C# class to describe the counter object called Counter.css which is associated with id and count on Items under Azure Cosmos   DB account 

Now that I had the function running locally & was able to view the counter data on the browser, the next step was to merge frontend with the backend. 

#### Merge Frontend with Backend

Navigate to main.js (located in the frontend folder) and update the API url with the functions local URL. 

I then ran the function locally (func host start command) and then opened index.html file (located in the frontend folder) to make sure that I was able to view the counter data. I was able to view the counter data successfully and test the same on AZ Cosmos DB account where the count also changed. 