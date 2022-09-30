let socket = io.connect();

function init(){
    draw();
    //console.log(foods);
}

socket.on("init",(data)=>{
    foods = data.foods;
    // for(i = 0; i < foods.length; i++){
    //     console.log(foods[i].locX);
    //}
});

