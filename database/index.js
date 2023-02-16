const mongoose = require("mongoose");
// const{dbHost, dbPass, dbName, dbPort, dbUser} = require("../app/config");

mongoose.connect(`mongodb://coffeshop2:coffeshop123@ac-tnlexuc-shard-00-00.2q3tlmi.mongodb.net:27017,ac-tnlexuc-shard-00-01.2q3tlmi.mongodb.net:27017,ac-tnlexuc-shard-00-02.2q3tlmi.mongodb.net:27017/?ssl=true&replicaSet=atlas-bqd67c-shard-0&authSource=admin&retryWrites=true&w=majority`);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server database terhubung"));

module.exports = db;