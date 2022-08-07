let randomBUT = document.getElementById("randomButton");
randomBUT.addEventListener("click", createRandomNumber);



let NUMBER = document.getElementById("number");
let firstNUM = document.getElementById("firstNumber");
let secondNUM = document.getElementById("secondNumber");



function createRandomNumber() {
    if (firstNUM.value == "" || secondNUM.value == "") {
        alert("Inputlar boş bırakılamaz!");
    }
    else {
        NUMBER.innerHTML = getRandomInt(firstNUM.value, secondNUM.value);
    }
}


// Buradaki iki değer arası sayı oluşturma fonksiyonunu şu kaynaktan aldım
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
// Maalesef kendim yazamadım 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if ( (min == max ) || Math.abs(min-max) == 1){
      alert("Girilen iki sayı birbirine eşit veya aralarındaki fark 1 olamaz.");
      return 0;
    }
    else{
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}