# Readme

## Generating a Node/Express Webapp (English) (Deutsch weiter unten)

This readme provides a step-by-step walkthrough for generating a nicely structured webapp with Node and Express. In addition there will also be a short examination of the structure of the generated app.

You will be shown how express composes:

* a ready to use webserver
* basic middleware
* example routes
* a template engine for rendering html
* example templates

#### Step 1

Before we generate a webapp, first check the installed versions of node and npm using the following commands:


        node -v
        npm -v



Install or update Node and NPM if needed.

#### Step 2

Navigate the commandline to the folder in which express should generate the webapp:


        cd /yourpath/yourfolder/

#### Step 3

The express generator can be installed using the commands below (Note: this installation can be made locally or globally):


    #install express-generator globally (via -v)
    npm install express-generator -g

#### Step 4

Generate the webapp (name it, e.g. express-gen). Note that the cli-command depends on the current path of the prompt.


        #create app with pug as template engine (cli current folder is parent folder)
        express express-gen --view="pug"

        ##from inside target folder use:
        #express ../generated --view="pug"

        #install dependencies
        cd express-gen
        npm install



While NPM installs the dependencies, it also checks for available updates. Depending on the output on the terminal it may be advisable to run npm audit and/or run npm audit fix to address security issues with old package versions.

Note the response from express, when it starts the server:

    DEBUG=nodeserver-express:* npm start.
    
Alternatively run the server without debugging via `npm start` (without setting the environment variable for debugging), using the start script in package.json, or use the command from the script `node ./bin/www denoted` by the startscript in the package.json (entrypoint).

After starting the server, the webapp is available via: http://127.0.0.1:3000/
The webapp also has a route defined for: http://127.0.0.1:3000/users/

#### Exploration of the generated Structures

The generated entrypoint (file) of the application nodeserver-express/bin/www can be opened to find out the following about the generated webapp:


        /**
        * Module dependencies.
        */

        var app = require('../app');

        // ...

        /**
        * Create HTTP server.
        */

        var server = http.createServer(app);

        // ...




Note here, that the app object is passed to the .createServer()-function. It will thus determine the webapp's handle requests, send responses... etc. The app-object is available via the exports variable in '../app.js'. This also means you can find out about the '/' and '/users/' paths in the file '../app.js'.


        // ...
        var express = require('express');

        // ...

        var indexRouter = require('./routes/index');
        var usersRouter = require('./routes/users');

        // ...

        var app = express();


        // ...

        app.use('/', indexRouter);
        app.use('/users', usersRouter);

        // ...

        module.exports = app;




Here you can observe that routes that start with '/' and '/users' are handled by the route groups indexRouter and usersRouter respectively. Thus the next files to look into is routes/index.js.


        // ...

        /* GET home page. */
        router.get('/', function(req, res, next) {
          res.render('index', { title: 'Express' });
        });

        // ...



This shows how the server response is triggered. Here the webapp calls the renderer to deliver the html page for the index.xxx-template in the view folder.

You are now ready to add middleware, extend the routes and create your own routes.

For reference, see the express docs https://expressjs.com/de/4x/api.html .

#### Additional Reading

https://zellwk.com/blog/crud-express-mongodb/
https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
