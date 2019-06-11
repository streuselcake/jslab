# Readme

## Node.js/Express-Webapp with Mongodb connection (with detailed step by step instructions)

This example shows how to start and use the provided nodejs-webserver with mongodb-connection.

#### Step 1

Install the mongod service (community edition) and mongo client.

MacOS:
For example, use homebrew as described in the documentation:
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

For the next steps, open three shell instances for the (1.) database-service, (2.) webserver, and (3.) database operations respectiviely. Alternatively open them when needed.

#### Step 2. The database-service (mongod, in Shell 1.) 

Open a new shell-window and navigate to project folder (in which the data folder should be created):

    cd /<yourpath>/jslab/webserver-express/database-mongodb

Create the data folder:

    mkdir data

Start mongod (later stop via ctrl+c):

    mongod --dbpath=./data


#### Step 3. The database-client (mongo, in Shell 2.)

Start mongo and connect to the mongod service (later use ctrl+ to stop mongo):

    mongo --host 127.0.0.1:27017

To show all databases that contain data use:

    show databases

To operate on or create an item-database "itemdb" if not already created use:

    use itemdb
    show collections

Inspect the item-collection content (empty if the database was just created):

    db.item.find().pretty()

You can also use the item name or other parameters to search for specific items. For example:

    db.item.find({"name": "mongoitem"}).pretty()

The next commands are the crud-operations via mongo.

    db.item.insert({ "name" : "mongoitem", "description" : "testitem via mongo" })


Note that you will need the correct document id for the following commands. You may copy the id from the create-output for the following steps. You can later always use the find-command to retrieve the correct id (curser arrow up).

    db.item.updateOne({_id: ObjectId("5cf29783fdb12e0b4391b1c2")}, {$set: {description: "Changed testitem via mongo"}})
    db.item.find({"name": "mongoitem"}).pretty()

    db.item.deleteOne( { "_id" : ObjectId("5cf29783fdb12e0b4391b1c2") } )
    db.item.find({"name": "mongoitem"}).pretty()

#### Step 4. The mongodb-connected webserver (npm and node in Shell 3.)

Navigate to the project folder:

    cd /<yourpath>/jslab/webserver-express/

You will find some mongodb-code has already been copied to the index.js file. Use these commands to initialize a new module for it and install the dependencies:

    npm init
    npm install --save express mongodb

Run the web server, by using the following command:

    node .
    
Perhaps now rad the server's source code to find the routes or continue with Step 4. of this exercise.

#### Step 4. Different ways of calling the webserver (Browser and Shell 2.)

Open the webapp by using the following link:

http://localhost:3000/

Note that this is currently a route that responds JSON-Data (this is visible in the HTTP-Response-Headers).
Also try to access the the other specified url-routes via the webbrowser by opening the url-routes. To get the browser to request the specified routes use the developer tools and find the "edit and resend" button available for a selected request header.

Using the tool "httpie", try the http-requests for the CRUD operations by using the following commands:

    http get localhost:3000/
    http post localhost:3000/item name=foo description=bar
    http put localhost:3000/item _id=5cf29e1911ed24467ee2f119 name=foo description="changed description"
    http delete localhost:3000/item _id=5cf29783fdb12e0b4391b1c2

While testing the different options, also monitor the webserver outputs, and changes in mongo using the find() command.

You can now make POST, PUT, DELETE or GET requests via the browsers webdeveloper tools, using a http tool. You can use this example as a basis for creating your websites with ajax-requests and/or forms sending requests. 


#### How to continue:

This example demonstrated how to connect a webserver to a database, how the javascript-server can access it and make it available via http using url-routes. To follow up with forms that call the server see:

https://github.com/streuselcake/jslab/tree/master/webserver-express/database-mongodb-createform

https://github.com/streuselcake/jslab/tree/master/webserver-express/request-form


From a different perspective, this example demonstrated how to create a basic api. It responded with json data ready to use by a client-Skript. To follow up with connecting a webpage to the api using ajax see:

https://github.com/streuselcake/jslab/tree/master/webserver-express/database-mongodb-ajax



#### Additional Reading

https://expressjs.com/de/starter/installing.html

https://expressjs.com/de/guide/database-integration.html

https://docs.mongodb.com/manual/administration/install-community/ (follow up, e.g. for MacOS: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

https://www.w3schools.com/nodejs/nodejs_mongodb.asp

http://mongodb.github.io/node-mongodb-native/3.1/tutorials/crud/

https://zellwk.com/blog/crud-express-mongodb/

https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb
