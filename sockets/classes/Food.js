class Food{
    constructor(settings){
        this.color = this.getRandomColor();
        this.locX = this.getRandomLocX(settings.worldWidth);
        this.locY = this.getRandomLocY(settings.worldHeight);
        this.size = 5;
    }
    getRandomColor(){
        const r = Math.floor(Math.random()*200 + 50);
        const g = Math.floor(Math.random()*200 + 50);
        const b = Math.floor(Math.random()*200 + 50);
        return `rgb(${r},${g},${b})`
    }
    getRandomLocX(worldWidth){
        return Math.floor(Math.random()*worldWidth);
    }
    getRandomLocY(worldHeight){
        return Math.floor(Math.random()*worldHeight);
    }
}


module.exports = Food;