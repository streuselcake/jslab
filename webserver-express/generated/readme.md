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

Before generating the webapp, first check the installed versions of Node and NPM using the following commands:


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

Generate and name the webapp with the commands below. Note that the cli-command depends on the current path of the prompt.


        #create app with pug as template engine (cli current folder is parent folder)
        express express-gen --view="pug"

        ##from inside target folder use:
        #express ../generated --view="pug"

        #install dependencies
        cd express-gen
        npm install



While NPM installs the dependencies, it also checks for available updates. Depending on the output on the terminal it may be advisable to run `npm audit` and/or run `npm audit fix` to address security issues with old package versions.

Note the response from express, when the server is started:

    DEBUG=nodeserver-express:* npm start.
    
Alternatively run the server without debugging via `npm start` (without setting the environment variable for debugging), using the start script in package.json, or use the command from the script `node ./bin/www` denoted by the startscript in the package.json (entrypoint).

After starting the server, the webapp is available via: http://127.0.0.1:3000/ or http://127.0.0.1:3000/users/ .

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

You are now ready to expand on the scope of your webapp.

For reference, see the express docs https://expressjs.com/de/4x/api.html .

#### Additional Reading

https://zellwk.com/blog/crud-express-mongodb/
https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs

---

## Erzeugen einer Node/Express Webapp (Deutsch)

Diese Readme besteht aus einer Schritt für Schritt anleitung um eine Node/Express Webapp zu erzeugen, als auch eine kurze Einführung in die Struktur dieser Webapp.

#### 1. Schritt

Vor der erzeugung der Webapp, überprüfen sie die installierten Versionen von Node und npm mit folgenden Befehlen:


        node -v
        npm -v

Installieren oder updaten sie Node und npm falls nötig.

#### 2. Schritt

Navigiere die Befehlszeile in den Ordner wo Express die Webapp erzeugen soll:

    cd /Deinpfad/DeinOrdner

#### 3. Schritt

Den Express Generator können sie mit folgenden Befehlen installieren, beachten sie das der Generator sowohl Lokal als auch Global installiert werden kann:

    #Installiere express-generator Global (mit -v)
    npm install express-generator -g

#### 4. Schritt

Erzeuge und benenne die Webapp mit folgenden Befehlen, beachten sie das der cli-Befehl von dem momentanen Pfad abhängt:

        #Erzeuge App mit pug als template engine (cli momentaner Ordener is parent Ordner)
        express express-gen --view="pug"

        ##von innerhalb eines ausgesuchten Ordners:
        #express ../generated --view="pug"

        #Installiere die Abhängigkeiten
        cd express-gen
        npm install

Während NPM die Abhängigkeiten installiert wird automatisch nach Updates geprüft. In abhängigkeit von dem output im Terminal kann es empfelbar sein die Befehle `npm audit` und/oder `npm audit fix` auszuführen.

Beachten sie das output von Express, wenn sie den Server starten:

    DEBUG=nodeserver-express:* npm start.
    
Alternativ können sie den Server auch mit dem Befehl `npm start` starten (ohne die Umgebungseinstellung für Debugging), unter verwendung des start Skript in package.json, oder sie benutzen den Befehl von dem Skript `node ./bin/www`.

Nachdem sie den Server gestartet haben, können sie die Webapp unter http://127.0.0.1:3000/ oder http://127.0.0.1:3000/users/ .

#### Einführung in die erzeugten Strukturen

(Wird in nächstem update ergänzt)

#### Zusätzliches Lesematerial

https://zellwk.com/blog/crud-express-mongodb/
https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
