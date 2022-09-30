window.addEventListener("load", ()=>{
    document.querySelector("#loginModal").style.display = "block";
    document.querySelector("#score-wrapper").style.display = "none";
});

document.querySelector(".name-form").addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("Submitted!");
    player.name = document.querySelector("#name-input").value;
    document.querySelector("#loginModal").style.display = "none";
    document.querySelector(".player-name").innerHTML = player.name;
    document.querySelector("#score-wrapper").style.display = "block";
    init();
    reduceLife();
});
