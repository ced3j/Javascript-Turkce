/* Number veri türü */

let price = 100;
let tax = 0.18;
let priceTax = price * tax;
console.log(
    "Fiyat: ", price,
    "KDV :", tax,
    "KDV Tutarı: ", priceTax
);



/* Arttırma azaltma */

let counter = 320;
counter += 1;
counter++;
counter--;
console.log(counter);

counter *= 10;
console.log(counter);




/* Mod alma */

console.log(15 % 2);/* 15'i 2'ye böl kalanı göster */
console.log(14 % 2); /* 14'ü 2'ye böl kalanı göster */




/* Üs almak */

console.log(2 * 2 * 2 * 2); /* 2 üzeri 4 */
console.log(2 ** 4); /* 2 üzeri 4 */



/* Aşağı yuvarlama işlemi */

console.log(Math.floor(1.6)); /* Sonuç 1 olacaktır */


/* Yukarı yuvarlama işlemi */

console.log(Math.ceil(1.1)); /* Sonuç 2 olacaktır */




/* String halinde gelen sayıyı number haline çevirmek */

let stringNumber = "11";
let newNumber = Number(stringNumber);
console.log("Sayıya çevrilmiş string :", newNumber * 5);