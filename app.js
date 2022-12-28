let colours = ["blue", "yellow", "green", "red", "black", "orange"];
let button = document.querySelector("#but");

button.addEventListener("click", () => {
    //picks a random num
    let random = colours[Math.floor(Math.random() * colours.length)]
    let container = document.querySelector("#container");
    container.style.background = random;
    console.log("cool");
})