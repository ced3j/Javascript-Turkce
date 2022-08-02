let pieces = "0123456789abcdef"; // hex kodumuz için gerekli harf ve rakamlar
let hexText = document.querySelector(".m-3");
let colorBox = document.getElementById("colorBox");


function hexer() { // renk oluşturan bir fonksiyon 
    let hex = "#";
    for (let i = 0; i < 6; i++) { // 6 adet harf veya rakama ihtiyacımız olduğu için bir döngü oluşturuyoruz
        hex += pieces.charAt(Math.floor(Math.random() * pieces.length));
        // hex değişkenine önceden yazdığımız # işaretine rastgele rakam ve harfler ekliyoruz
        // charAt --> içine girilen indexteki rakam veya harfi seçecek
        // Math.random 0 ile 1 arasında rastgele ve küsüratlı bir sayı oluşturacak 
        // oluşan bu sayıyı pieces.length ile çarptığımızda sayı bizim için daha indexlenebilir hale gelmiş olacak
        // math.floor ile ise sayıyı hem küsürattan kurtarmış olacağız hem yuvarlamış olacağız
    }
    return hex;
}

let colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", changeColor);


function changeColor() {
    colorBox.style.backgroundColor = hexer();
    hexText.innerHTML = hexer();
}


