# Readme

## Node.js/Express-Webapp with Mongodb connection (general usage Instructions; detailed step by step instructions below)

#### Step 1

Install and run the mongod service.

#### Step 2

Navigate the commandline into the database-mongodb folder:

    cd /yourpath/webserver-express/database-mongodb

#### Step 3

You will find some mongodb-code has already been copied to the index.js file. Use these commands to initialize a new module for it and install the dependencies:

    npm init  
    npm install express --save
    npm install mongodb --save

#### Step 4

Start your server, by using the following command:

    node .

#### Step 5

Open the webapp by using the following link:

http://localhost:3000/

You can now make POST, PUT, DELETE or GET requests via the browsers webdeveloper tools, using a http tool, or create your websites with forms sending the requests. Read the source code to find the routes or continue with the exercise.

# Exercise

To get started with the example, try the following commands.

Open a new shell and navigate to project folder (in which the data folder should be created):

    cd /Data/workspace-javascript/jslab/webserver-express/database-mongodb

Create the data folder:

    mkdir data

Start mongod (later stop via ctrl+c):

    mongod --dbpath=./data

Open a new shell, start mongo, connect (later use ctrl+ to stop):

    mongo --host 127.0.0.1:27017
    show databases

Operate on / create item-database "itemdb".

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


Open new shell, and navigate to the project folder:

    cd /Data/workspace-javascript/jslab/webserver-express/

Install the server-module and dependencies:

    npm init
    npm install --save express mongodb

Run web server:

    node .

Open a new shell and run the CRUD-http-requests using the tool "httpie":

    http get localhost:3000/
    http post localhost:3000/item name=foo description=bar
    http put localhost:3000/item _id=5cf29e1911ed24467ee2f119 name=foo description="changed description"
    http delete localhost:3000/item _id=5cf29783fdb12e0b4391b1c2

Also try these requests in the webbrowser while monitoring the webserver outputs, and changes in mongo using the find() command.


#### Additional Reading

https://expressjs.com/de/starter/installing.html

https://expressjs.com/de/guide/database-integration.html

https://docs.mongodb.com/manual/administration/install-community/ (follow up, e.g. for MacOS: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

https://www.w3schools.com/nodejs/nodejs_mongodb.asp

http://mongodb.github.io/node-mongodb-native/3.1/tutorials/crud/

https://zellwk.com/blog/crud-express-mongodb/

https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb
