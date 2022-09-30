const io = require("../servers").io;
const Food = require("./classes/Food");

let foods = [];
settings = {
    worldWidth: 5000,
    worldHeight: 5000,
    defaultFood: 500
}

initGame();

io.sockets.on("connect", (socket)=>{
    socket.emit("init", {
        foods
    });
});


function initGame(){
    for(let i = 0; i < settings.defaultFood; i++){
        foods.push(new Food(settings))
    }
}


module.exports = io;