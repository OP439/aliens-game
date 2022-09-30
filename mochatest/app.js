module.exports = {
    sayHello: function(){
        return "hello";
    },
    addNumbers: function(value1, value2){
        return value1 + value2;
    },
    getRandomColor: function(){
        const r = Math.floor(Math.random()*200 + 50);
        const g = Math.floor(Math.random()*200 + 50);
        const b = Math.floor(Math.random()*200 + 50);
        return `rgb(${r},${g},${b})`
    },
    getRandomLocX: function(number){
        return Math.floor(Math.random()*number);
    }
}