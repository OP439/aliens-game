let player = {};

player.startLife = 500;

player.fireLocX = 2500;
player.fireLocY = 2500;
player.fireLife = player.startLife;

player.waterLocX = 2200;
player.waterLocY = 2500;
player.waterLife = player.startLife;

player.grassLocX = 2800;
player.grassLocY = 2500;
player.grassLife = player.startLife;

player.size = 200;
player.distance = 300;

//reduce life
function reduceLife(){
    setInterval(function(){
        player.fireLife -= 10;
        player.waterLife -= 10;
        player.grassLife -= 10;
    },1000);
}




moveDist = 32;

//fire lock
const moveFire = (event)=>{
    switch(event.keyCode){
        case 65:
            player.fireLocX -= moveDist;
            break;
        case 87:
            player.fireLocY -= moveDist;
            break;
        case 68:
            console.log(event.keyCode);
            player.fireLocX += moveDist;
            break;
        case 83:
            player.fireLocY += moveDist;
            break;
    }
};

const moveWater = (event)=>{
    switch(event.keyCode){
        case 65:
            player.waterLocX -= moveDist;
            break;
        case 87:
            player.waterLocY -= moveDist;
            break;
        case 68:
            console.log(event.keyCode);
            player.waterLocX += moveDist;
            break;
        case 83:
            player.waterLocY += moveDist;
            break;
    }
};

const moveGrass = (event)=>{
    switch(event.keyCode){
        case 65:
            player.grassLocX -= moveDist;
            break;
        case 87:
            player.grassLocY -= moveDist;
            break;
        case 68:
            console.log(event.keyCode);
            player.grassLocX += moveDist;
            break;
        case 83:
            player.grassLocY += moveDist;
            break;
    }
};

document.addEventListener("click", (e)=>{
    console.log(e.clientX, e.clientY);
    canvas.removeEventListener("keydown", moveFire);
    canvas.removeEventListener("keydown", moveWater);
    canvas.removeEventListener("keydown", moveGrass);
    if(e.clientX > player.fireLocX + canvas.width/2 - player.fireLocX 
        && e.clientX  < player.fireLocX + player.size + canvas.width/2 - player.fireLocX
        && e.clientY > player.fireLocY + canvas.height/2 - player.fireLocY
        && e.clientY  < player.fireLocY + player.size + canvas.height/2 - player.fireLocY
        ){
        console.log("red and mouse collide");
        canvas.addEventListener("keydown", moveFire);
    } else if(e.clientX > (player.fireLocX + canvas.width/2 - player.fireLocX) + (player.waterLocX - player.fireLocX)
            && e.clientX  < player.fireLocX + player.size + canvas.width/2 - player.fireLocX + (player.waterLocX + player.size - (player.fireLocX + player.size))
            && e.clientY > player.fireLocY + canvas.height/2 - player.fireLocY + (player.waterLocY - player.fireLocY)
            && e.clientY < player.fireLocY + player.size + canvas.height/2 - player.fireLocY + ((player.waterLocY +player.size) - (player.fireLocY + player.size))
        ){
        console.log("blue and mouse colied.");
        canvas.addEventListener("keydown", moveWater);
    } else if(e.clientX > (player.fireLocX + canvas.width/2 - player.fireLocX) + (player.grassLocX - player.fireLocX)
        && e.clientX  < player.fireLocX + player.size + canvas.width/2 - player.fireLocX + (player.grassLocX + player.size - (player.fireLocX + player.size))
        && e.clientY > player.fireLocY + canvas.height/2 - player.fireLocY + (player.grassLocY - player.fireLocY)
        && e.clientY < player.fireLocY + player.size + canvas.height/2 - player.fireLocY + ((player.grassLocY +player.size) - (player.fireLocY + player.size))
        ){
        console.log("green and mouse collided");
        canvas.addEventListener("keydown", moveGrass);
    }
});