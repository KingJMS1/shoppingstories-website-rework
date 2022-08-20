# shoppingstories-v3 
Welcome to the Github for the new site.

The client folder contains the front end stuff and the server folder contains the backend stuff.   
### To run the website locally:
Clone the repo, then open a terminal in the client directory and type in "npm install" (or "yarn install" if you use yarn), to install all the dependancies.
When the intallation is done, type in "npm start" and the site will load in your web browser. 
### To run the server locally:
Follow the steps above, but instead opening the terminal in the server folder.

## What's Currently Done:
- The hompage
- The navigation bar
- Registering and Logging in
- MongoDB and Amzaon Cognitio are connected (these are test versions, not the actual database/server) 
- All the database schemas have been created

## What's Currently in Progress:
- The search page
- Protected routes for user/admin/moderators 
- The about page/section (need to add the rest of the pages)

## What Needs to Be Done:
- Writing all the APIs
- Connecting the APIs to the frontend
- The rest of the pages (User dashboard, edit account info, edit documents, glossary, etc)
- Creating roles on the backend 
- A trigger functions to move the edited parsed data from the parsed-entries database and into entries/documents database. 
- Updating the parser code to accomodate the new schemas. 
