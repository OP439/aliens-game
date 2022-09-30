const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));
const socketio = require("socket.io");
const expressServer = app.listen(2308);
const io = socketio(expressServer);
console.log("Express and socktio are listening on port 2310");

module.exports = {
    app,
    io
};