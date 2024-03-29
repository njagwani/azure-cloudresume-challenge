
# Azure-CloudResume-Challenge

Hello!!!🥳

This is the repository of my first [A Cloud Guru Resume Challenge](https://acloudguru.com/blog/engineering/cloudguruchallenge-your-resume-in-azure) 

Here is the finished product [My Azure Resume](https://www.nitinjagwani.me)

I started off the project by building the frontend which contains the Website 

Before starting this project, I created my own github repository for Azure Cloud Resume Challenge. 
### Pre-requisites for this project
- An Azure Account to deploy the Website and Azure Functions
- .NET Core 3.1 SDK - Cross platform, opensource, framework to develop the Azure Function
- Visual Studio Code - Code Editor for frontend and backend programming
- C# Extension on Visual Studio Code
- Azure Functions Core Tools - Required to develop Azure Functions locally on own machine.
- Azure Cli - Azure Command line interface to manage Azure resources.
### Frontend 
#### Resume Template 🌍
In order to get started, I first created my own Resume. Here, I decided to use a Resume template which is based on a beautiful resume NuxtJs code developed by [Ivan Greve](https://github.com/ivangreve/nuxt-resume) and 
[StartBootstrap Theme](https://github.com/startbootstrap/startbootstrap-resume/)

Commands used to build Resume template based on NuxtJs code:
- Install NodeJS (Pre-requisite)
- $npm install - To install dependencies
- $npm run build - To Build application
- $npm run dev - To Run in Dev Mode
- $npm run generate - To generate static code, all generated code will appear in ./dist folder

I then made changes to locales/en y adding my own Resume details like Name, Experience, Certifications, Skills, Linkedin links, Github links etc.

I also made a few changes on the layout of my Resume template.

My Frontend folder contains contents from ./dist folder (Created from Resume template using NuxtJs code) & main.js (created seperately which contains Java script code for visitor counter functionality).

Index.html contains the element for the counter <id="counter"> to display the counter info.
### Backend 

To get started with Backend, I first created an Azure Cosmos DB account, database, container and data.

Following parameters were selected when creating an Azure DB Commos Account:

- API -'Core SQL'
- Capacity - 'Serverless'

I then created my Database, Container and Items under "Data Explorer" of Azure Cosmos DB Account.

The Items inside in my Database included the id and count. Since, we need counter for 1 website, the id was set to 1 and count was set to 0 as we dont have any visitors. 

![](images/AzureCounterIDCountonCosmosDB.PNG)

The Next step was to create an Azure Function, connect Azure DB bindings to the function and then view the counter data via the function.



Azure Function is a Serverless solution that allows us to create pieces of code that are Event-driven and we don't have to worry about the infrastructure behind the pieces of code. Azure Functions also has this feature called bindings which allows us to connect other resources to our function.

#### Azure Function in Visual Code 🔧

I signed in to my Azure Cloud Account under VS code and then created a new project under Azure Functions Extension by selecting the following:
- Selected the api directory (under backend folder)
- Selected C# for the language
- Selected .NET 3 CORE for your runtime
- Selected Httptrigger as your template and I called it GetResumeCounterNitin 
- Set the access rights to be Function.

Command used to run the Azure Function

- func host start

After you run the above Azure function, you should then obtain a http URL which can then be used to test your function with Azure Cosmos DB at a later stage.

I then followed [Azure Functions Cosmos DB bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2) to bind Azure Function with Cosmos DB. This part of the project was a major challenge. 

Later on, I was then able to get the code to work with Cosmos DB bindings by performing the following:
 - Added Azure Resume Connection String to local.settings.json 
 - Added bindings to the code (GetResumeCounter.css). 
 - Added C# class to describe the counter object called Counter.css which is associated with id and count on Items under Azure Cosmos   DB account 

Now that I had the function running locally & was able to view the counter data on the browser, the next step was to merge frontend with the backend. 

![](images/LocalURLdisplayingthecount.PNG)

#### Merge Frontend with Backend 🚀

I then navigated to main.js (located in the frontend folder) and updated the API URL with the functions local URL. 

I then ran the function locally (func host start command) and then opened index.html file (located in the frontend folder) to make sure that I was able to view the counter data. I was able to view the counter data successfully and was able to test the same on AZ Cosmos DB account where the count also changed. 

![](images/IntegrateCounterFunctionrunningthecounterfunctiongenerateslocalURL.PNG)



![](images/CountmatchingoncosmosDBsameasLocalURL.PNG)


![](images/ResumePageDisplayingtheCounterforPageViews.PNG)

#### Deploying Azure Function 🥇
This was the most challenging part of my project because I was unable to get the donet version '.NET core 3.1' to reflect on my visual studio code when I deployed the Azure function using Azure Functions extension. [DOTNETCORE3.1](https://dotnet.microsoft.com/download/dotnet/3.1) and [Microsoft.Azure.WebJobs](https://www.nuget.org/packages/Microsoft.Azure.WebJobs/) came to my rescue. I then added a new application setting (copied the AzureResume Connection String) under GetResumeCounter Function on Microsoft Azure Portal so that function can be deployed in Production. I then fetched the Azure Function URL using the option "Get Function URL" and used that URL to update the java script code (main.js located in the frontend). In order for the counter function to display the counter value, I enabled CORS (Located under Function App - GetResumeCounterNitin). 
#### Deploying Static Webiste to Storage Account & Migrate custom domain to Azure CDN 🏹
The next step was to deploy Static Website via Azure Storage. This was the easiest part of this project. Just be sure to add the URL of static website under CORS. The next step was to configure a custom domain and SSL certificates with the help of Azure CDN. Under my storage accoount, I was able to migrate my custom domain to Azure CDN by creating a new CDN profile. 

#### Build CI/CD pipeline 💉
I then created a Github workflow which is responsible for deploying the frontend of my project. I used this [Article](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions) to Set up a GitHub Actions workflow to deploy your static website in Azure Storage.



Few Important Resources:

 - [Azure Functions HTTP trigger](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=csharp)

- [How To Use the JavaScript Fetch API to Get Data](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
- [Create a C# function in Azure using Visual Studio Code](https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-csharp)
- [Manage your Function App](https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors)

Cheers!

Nitin Jagwani 
