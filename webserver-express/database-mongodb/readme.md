# Readme

## Node.js/Express-Webapp with Mongodb connection (usage Instructions)

#### Step 1

Install the mongod service.

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

open a shell and navigate to project folder (in which the data folder should be created)

    cd /Data/workspace-javascript/jslab/webserver-express/database-mongodb

create the data folder

    mkdir data

start mongod (later stop via ctrl+c)

    mongod --dbpath=./data

open new shell, start mongo, connect (later use ctrl+ to stop)

    mongo --host 127.0.0.1:27017
    show databases

operate on / create collection

    use itemdb
    show collections

inspect collection content

    db.item.find().pretty()

you can also use the item name or other parameters to search for specific items.

    db.item.find({"name": "mongoitem"}).pretty()

The next commands are the crud-operations via mongo

    db.item.insert({ "name" : "mongoitem", "description" : "testitem via mongo" })

You may copy the id for the following steps

Note that you will need to retrieve the correct id via the find-command for the following commands. You can use the find-command to retrieve the correct id if you have not copied it already (curser arrow up).

    db.item.updateOne({\_id: ObjectId("5cf29783fdb12e0b4391b1c2")}, {$set: {description: "Changed testitem via mongo"}})
    db.item.find({"name": "mongoitem"}).pretty()

    db.item.deleteOne( { "\_id" : ObjectId("5cf29783fdb12e0b4391b1c2") } )
    db.item.find({"name": "mongoitem"}).pretty()


open new shell, start web server

    cd /Data/workspace-javascript/jslab/webserver-express/

install server-code and dependencies

    npm init
    npm install --save express mongodb

run web server

    node .

open new shell run the CRUD http-requests using the tool "httpie"

    http get localhost:3000/
    http post localhost:3000/item name=foo description=bar
    http put localhost:3000/item \_id=5cf29e1911ed24467ee2f119 name=foo description="changed description"
    http delete localhost:3000/item \_id=5cf29783fdb12e0b4391b1c2

also try the requests in the webbrowser
also monitor the webserver output and changes in mongo


#### Additional Reading

https://expressjs.com/de/starter/installing.html


https://www.w3schools.com/nodejs/nodejs_mongodb.asp


https://expressjs.com/de/guide/database-integration.html


https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/


http://mongodb.github.io/node-mongodb-native/3.1/tutorials/crud/

