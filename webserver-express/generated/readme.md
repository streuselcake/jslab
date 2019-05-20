
#Generating a Node/Express Webapp

This readme provides a walkthrough for generating a nicely structured webapp with Node and Express and then also looks at the anatomy of the generated app.

We will see how express composes,

    a ready to use webserver,
    some basic middlewares,
    some example routes,
    a template engine for rendering html, and
    some example templates.

Before we generate a webapp, we first check the installed versions of node and npm and install/update if needed.


        node -v
        npm -v



Install or update Node and NPM if needed. Next, navigate to the folder in which express should generate the webapp. We will create our webapp into this folder.


        cd /yourpath/examples/



We can install the generator globally (for use in other projects).


    #install express-generator globally (via -v)
    npm install express-generator -g



Next, generate the webapp (name it, e.g. express-gen). Note that the cli-command depends on the current path of the prompt.


        #create app with pug as template engine (cli current folder is parent folder)
        express express-gen --view="pug"

        ##from inside target folder use:
        #express ../generated --view="pug"

        #install dependencies
        cd express-gen
        npm install



While NPM installs the dependencies, it also checks for available updates. Depending on the output on the terminal it may be advisable to run npm audit and/or run npm audit fix to address security issues with old package versions.

We note the response from express on how to start the server:
DEBUG=nodeserver-express:* npm start.
Alternatively run the server without debugging via npm start (without setting the environment variable for debugging), using the start script in package.json,
or use the command from the script node ./bin/www denoted by the startscript in the package.json (entrypoint).

After starting the server, the webapp is available via: http://127.0.0.1:3000/
The webapp also has a route defined for: http://127.0.0.1:3000/users/
We may now continue exploring the generated structures. (...)

We can open the generated entrypoint (file) of the application nodeserver-express/bin/www and find out the follwoing about the generated webapp.


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




We here note that the app object is passed to the .createServer()-function. It will thus determine the webapps: handle requests, send responses... etc. We further note that the app-object is available via the exports variable in '../app.js'. This further means we can find out about the '/' and '/users/' paths in the file '../app.js'.


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




We here observe that routes that start with '/' and '/users' are handled by the route groups indexRouter and usersRouter respectively. Thus one next files to look into is routes/index.js.


        // ...

        /* GET home page. */
        router.get('/', function(req, res, next) {
          res.render('index', { title: 'Express' });
        });

        // ...



We here find how the server response is triggered. The webapp here calls the renderer to deliver the html page for the index.xxx-template in the view folder.

We are now ready to add middlewares, extend the routes create our own roues.

For reference, see the express docs https://expressjs.com/de/4x/api.html .

What's next? For a continued quickstart, check the following list of tutorials and blogs:

    Zell develops step-by-step a very basic CRUD application with the express generator and mongodb driver for javascript.
    Christopher Buecheler focusses on setting everything up and also explains how to connect a mongo-database with monk and mongodb.
    The mozilla mdn webdocs have chapter on the Express Web Framework. It contains an extensive tutorial and comprehensive background information, including a database connection using mongoose and the final steps for bringing a system to production.
