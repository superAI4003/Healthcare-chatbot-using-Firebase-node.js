## Installation
### create-react-app
`npx create-react-app YOUR_PROJECT_NAME`

### Serve
`npm start`

### Material-UI
`npm install --save @material-ui/core @material-ui/icons @material-ui/system`

### Modifying index.html
1. Delete unnecessary comment rows
2. Modify title and description for your site
3. Add stylesheet for Material-UI  
`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />`  
`<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />`

## Create Firebase project

### Install firebase-tools globally 
`npm install -g firebase-tools`

### Login your google account (which created a Firebase project)
`firebase login`

### Init local environment to connect Firebase project
`firebase init`

### Install firebase package in your work directory
`npm install --save firebase`

### Deploy your React App to the site hosted by Firebase
`firebase deploy` 

## Firebase
### Create Cloud Functions API
Import these packages and initialize Firebase app
`import * as functions from 'firebase-functions';
 import * as admin from "firebase-admin";
 admin.initializeApp();
 const db = admin.firestore();` 

### Execute Cloud Functions API
`curl -X POST https://YOUR_REGION-YOUR_PROJECT_NAME.cloudfunctions.net/addDataset -H "Content-Type:application/json" -d @dataset.json`
