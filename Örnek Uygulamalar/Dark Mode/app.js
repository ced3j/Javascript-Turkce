"use strict"

const button = document.getElementById("button");
const circle = document.getElementById("circle");
const body = document.getElementsByTagName("body")[0];
const day = document.getElementsByClassName("fa-solid")[0];
const night = document.getElementsByClassName("fa-solid")[1];
let currentState = true;


button.addEventListener("click", () => {
    body.classList.toggle("night");
    circle.classList.toggle("move");
    currentState ? currentState = false : currentState = true;
    update(currentState);
});


function update(a) {
    if (a) {
        day.classList.add("none");
        night.classList.remove("none");
        circle.style.backgroundColor = "white";

    } else {
        night.classList.add("none");
        day.classList.remove("none");
        circle.style.backgroundColor = "black";
    }
}

