// jshint esversion: 8
// jshint node: true
"use strict";

// This server exposes some database functions to a web interface
//          it translates and forwards get, post, put, and delete items
//          it also delivers a form for creating an item
//
// To run this example in docker:
//        0. navigate cli to project folder
//        1. create a data folder and share it with docker-containers via the docker-gui
//            $ mkdir data
//            open gui and go to -> preferences -> file sharing
//        2. prepare project using the following commands
//            $ npm init
//            $ npm install --save express mongodb
//        3. create an account on dockerhub (copy <username> for the following steps!)
//            https://hub.docker.com
//        4. Build image and run container (the blueprint)
//        4.1. Use a local image
//            Configure docker-compose.yml as follows:
//                #image: <username>/<imagename>
//                build .
//            $ docker-compose up
//        4.1. Use dockerhub-registry:
//            Configure docker-compose.yml as follows:
//                image: <username>/<imagename>
//                #build .
//            $ docker build -t <username/imagename> .
//            $ docker login
//            $ docker push <username/imagename>
//            $ docker-compose up
//
// Check out what is going on locally (containers running, webapp started?):
// $ docker ps
// $ docker logs <container id>
//
// Check out what is going on in your dockerhub repositories
// https://cloud.docker.com/u/<username>/repository/list
//
//
// Usage (requires httpie):
// ->
// HTTP GET localhost/
// HTTP POST localhost/item name=foo description=bar
// HTTP PUT localhost/item _id=<itemid> name=foo description=bar
// HTTP DELETE localhost/item _id=<itemid>
//
// Usage (borwser)
// -> open in browser: http://localhost/
// -> open in browser: http://localhost/form
//
// When getting started with docker for the first time, sometimes one wants to clean up everything:
// -> Delete creataed repositories on dockerhub (click on repository -> settings -> delete)
// -> Stop and remove all comtainers and images:
// $ docker stop $(docker ps -aq)
// $ docker kill $(docker ps -aq)
// $ docker rm $(docker ps -aq)
// $ docker rmi $(docker images -q)
//


const express = require("express");

const app = express();
const port = 3000;


// middleware for handling json request data
// https://expressjs.com/en/4x/api.html#express.json
app.use(express.json());

// middleware for handling urlencoded request data
// https://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({ extended: false }));



// references:
// https://www.w3schools.com/nodejs/nodejs_mongodb.asp
// http://mongodb.github.io/node-mongodb-native/3.1/tutorials/crud/
//

// integrating the database connection in the app using the mongo-driver
//                                        (higher level libraries exist such as "monk" or "mongoose")
// MongoClient provides us with a db connection and database object...
const mongodb = require('mongodb');

function connectMongoDb() {
  // finish this block before the server starts,
  // there are some async tasks inside we need to wait for => declare async so we can use await
  (async () => {

    try {
      // Use connect method to the mongo-client with the mongod-service
      //                      and attach connection and db reference to the app

      // using a local service on the same machine
      //app.locals.dbConnection = await mongodb.MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true});

      // using a named service (e.g. a docker container "mongodbservice")
      app.locals.dbConnection = await mongodb.MongoClient.connect("mongodb://mongodbservice:27017", {useNewUrlParser: true});

      app.locals.db = await app.locals.dbConnection.db("itemdb");
      console.log("Using db: " + app.locals.db.databaseName);
    } catch (error) {
      console.dir(error);
      setTimeout(connectMongoDb, 3000); // retry until db-server is up
    }

  })();
}

connectMongoDb();




// db is now available and we can continue with the webapp

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/item/create", (req, res) => {
  // insert item
  console.log("insert item ");
  app.locals.db.collection('item').insertOne(req.body, (error, result) => {
    if(error){
      console.dir(error);
    }
    res.redirect("/");
  });
});

// routes for get, post, put, and delete

app.get("/", (req, res) => {
  // find all
  app.locals.db.collection('item').find({}).toArray((error, result) => {
    if(error){
      console.dir(error);
    }
    res.send("res: " + JSON.stringify(result));
  });
});

app.get("/item", (req, res) => {
  // find item
  console.log("get item " + req.query._id);
  app.locals.db.collection('item').find({_id:new mongodb.ObjectID(req.query._id)}).toArray((error, result) => {
    if(error){
      console.dir(error);
    }
    res.json(result);
  });
});

app.post("/item", (req, res) => {
  // insert item
  console.log("insert item ");
  app.locals.db.collection('item').insertOne(req.body, (error, result) => {
    if(error){
      console.dir(error);
    }
    res.json(result);
  });
});

app.put("/item", (req, res) => {
  // update item
  console.log("update item " + req.body._id);
  let id = req.body._id;
  delete req.body._id;
  console.log(req.body); // => { name:req.body.name, description:req.body.description }
  app.locals.db.collection('item').updateOne({_id:new mongodb.ObjectID(id)}, {$set: req.body}, (error, result) => {
    if(error){
      console.dir(error);
    }
    res.json(result);
  });
});

app.delete("/item", (req, res) => {
  // delete item
  console.log("delete item " + req.body._id);
  let objectId = "ObjectId(" + req.body._id + ")";
  app.locals.db.collection('item').deleteOne({_id:new mongodb.ObjectID(req.body._id)}, (error, result) => {
    if(error){
      console.dir(error);
    }
    res.json(result);
  });
});



var server = app.listen(port, () => {
  console.log("Webapp listening on port:" + port);
  console.dir(server.address());
});


// make sure connections close before stopping process

process.on("SIGTERM", () => {
  server.close();
  app.locals.dbConnection.close();
  console.log("SIGTERM");
  process.exit(0);
});

process.on("SIGINT", () => {
  server.close();
  app.locals.dbConnection.close();
  console.log("SIGINT");
  process.exit(0);
});
