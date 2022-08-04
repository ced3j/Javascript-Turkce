const sesli = ["a", "e", "i", "o", "u", "ı", "ö", "ü"];
const sessiz = ["b", "c", "ç", "d", "f", "g", "ğ", "h", "l", "k", "m", "n", "p", "r", "s", "ş", "t", "v", "y", "z"];


let textAREA = document.getElementById("textArea");
let countBUTTON = document.getElementById("countButton");
countBUTTON.addEventListener("click", count);

let sesliSonuc = document.getElementById("sesliSonuc");
let sessizSonuc = document.getElementById("sessizSonuc");


function count() {
    var firstString = textAREA.value.replace(/[.,\/#!$%\]£^&\*+;:{}=\-_`~()0123456789]/g, "");
    var finalString = firstString.replace(/ /g, '');



    function sesliHarfler(str) {
        let count = 0;

        for (let letter of str.toLowerCase()) {
            if (sesli.includes(letter)) {
                count++;
            }
        }

        return count;
    }



    function sessizHarfler(str) {
        let count = 0;

        for (let letter of str.toLowerCase()) {
            if (sessiz.includes(letter)) {
                count++;
            }
        }

        return count;
    }


    sesliSonuc.innerHTML = sesliHarfler(finalString);
    sessizSonuc.innerHTML = sessizHarfler(finalString);

}
