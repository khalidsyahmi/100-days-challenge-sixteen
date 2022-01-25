// MongoDB connection

const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient; //yes this is the syntax

let database;
//will be the connection pool
async function connect() {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017"); // localhost ===> 127.0.0.1
  database = client.db("blog"); // can talk to db in mongodb shell here //this var carries the connection
}

function getDb() {
  // if falsy // let allows usage of variables inside other functions
  if (!database) {
    throw { message: "Connection to Mongo database is not established!!" };
  }

  return database;
}

module.exports = {
  connectKey: connect,
  getDbKey: getDb,
};
