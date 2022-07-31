let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", domClick);

function domClick() {
    console.log(this);
    this.innerHTML = "Tıklandı ve yazı değiştirildi.";
    this.style.backgroundColor = "black";
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red";
    // Bu elementin rengi kırmızı ise siyah olsun, siyah ise kırmızı olsun
}



let hello = document.querySelector("#hello");
hello.addEventListener("mouseover", mouse); // mouse üzerine geldiğinde ---> mouseover

function mouse() {
    console.log(this);
    this.style.color == "black" ? this.style.color = "red" : this.style.color = "black";
}


/////////--------------------------------------------------

// Basir bir Counter uygulaması


let counter = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");


counterDOM.innerHTML = counter;
increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
    if (this.id == "icrease") {
        counterDOM.innerHTML = counter += 1;
    }
    {
        counterDOM.innerHTML = counter -= 1;
    }
}