let answer = document.getElementById("answer");
let input = document.getElementById("input");
let button = document.getElementById("checkButton");
button.addEventListener("click", clicked);


answer.innerHTML = "-";



const isPalindrome = (val) => {
    const reverse = val.split("").reverse().join("");
    return reverse === val;

}


function clicked() {
    if (input.value === "") {
        alert("Bir değer girmediniz.");
    } else {
        if (isPalindrome(input.value) === true) {
            answer.innerHTML = "Evet";
        }
        else {
            answer.innerHTML = "Hayır";
        }
    }
}

