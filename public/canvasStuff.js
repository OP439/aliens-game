let wHeight = window.innerHeight - 50;
let wWidth = window.innerWidth - 50;

let canvas = document.querySelector("#the-canvas");
let context = canvas.getContext("2d");
canvas.width = wWidth;
canvas.height = wHeight;

function draw(){

    context.setTransform(1,0,0,1,0,0);
    context.clearRect(0,0,canvas.width,canvas.height);

    const camX = -player.fireLocX + canvas.width/2;
    const camY = -player.fireLocY + canvas.height/2;
    context.translate(camX,camY);

    context.beginPath();
    context.fillStyle = "rgb(0,255,0)";
    context.rect(player.grassLocX, player.grassLocY, player.size, player.size);
    context.fill();

    context.beginPath();
    context.fillStyle = "rgb(0,0,255)";
    context.rect(player.waterLocX, player.waterLocY, player.size, player.size);
    context.fill();

    context.beginPath();
    context.fillStyle = "rgb(255,0,0)";
    context.rect(player.fireLocX, player.fireLocY, player.size, player.size);
    context.fill();

    foods.forEach((food, i)=>{
        if(food.locX > player.fireLocX && food.locX < player.fireLocX + player.size
            && food.locY > player.fireLocY && food.locY < player.fireLocY + player.size ){
            foods.splice(i,1);
            player.fireLife += 20;
        } else if (food.locX > player.waterLocX && food.locX < player.waterLocX + player.size
            && food.locY > player.waterLocY && food.locY < player.waterLocY + player.size ) {
            foods.splice(i,1);
            player.waterLife += 20;
        } else if (food.locX > player.grassLocX && food.locX < player.grassLocX + player.size
            && food.locY > player.grassLocY && food.locY < player.grassLocY + player.size ) {
            foods.splice(i,1);
            player.grassLife += 20;
        } else if(foods.length === 0) {
            context.fillRect(0,0,5000,5000);
            document.querySelector("#score-wrapper").innerHTML = "YOU WON!";
        }
        document.querySelector("#score-wrapper").innerHTML = "LIFE LEFT: Water Alien: " + player.waterLife + " | Fire Alien: " + player.fireLife + " | Grass Alien: " + player.grassLife;
        context.fillStyle = food.color;
        context.fillRect(food.locX,food.locY,32,32);
    });

    if(player.fireLife <= 0 || player.waterLife <= 0 || player.grassLife <= 0){
        context.fillRect(0,0,5000,5000);
        document.querySelector("#score-wrapper").innerHTML = "GAME OVER!";
    }

    requestAnimationFrame(draw);
}

let foods =[];


