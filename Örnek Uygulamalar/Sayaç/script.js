let number = document.getElementById("number");
let baslangicSayi = document.getElementById("baslangicSayi");




const art = document.getElementById("arttir");
art.addEventListener("click", arttir);


const azal = document.getElementById("azalt");
azal.addEventListener("click", azalt);


const resetle = document.getElementById("resetle");
resetle.addEventListener("click", reset);


function arttir() {
    number.textContent++;
}


function azalt() {
    if (number.textContent == 0) {
        number.textContent = 0;
    }
    else {
        number.textContent--;
    }

}


function reset() {
    number.textContent = 0;
}

