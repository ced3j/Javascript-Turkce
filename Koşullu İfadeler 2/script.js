// Koşullu ifadeler ile uygulamalar yapalım


// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

let number1 = 15;

if (number1 >= 10 && number1 <= 50) {
    console.log("Bu sayı 10 ile 50 arasındadır");
}
else {
    console.log("Bu sayı 10 ile 50 arasında değildir");
}






// ----------------------------------------------------------------------------------------------


// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.


let number2 = 17;
if ((number2 > 0) && (number2 % 2 == 1)) {
    console.log("Bu sayı pozitiftir ve tektir");
}
else {
    console.log("Bu sayı pozif değil ya da tek değil");
}





// ----------------------------------------------------------------------------------------------

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)



x = 10;
y = 20;
z = 35;

let biggestNumber;

if ((x >= y) && (x >= z)) {
    biggestNumber = x;
}
else if ((y >= x) && (y >= z)) {
    biggestNumber = y;
}
else {
    biggestNumber = z;
}


console.log(biggestNumber);






// ----------------------------------------------------------------------------------------------


// 4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.


let vize1 = 35;
let vize2 = 55;
let final = 89;

let ortalama = (vize1 + vize2 + final) / 3;

alert(ortalama);

if ((ortalama >= 50) && (final >= 50)) {
    console.log("Geçti");
}
else if ((final >= 70) && (ortalama < 50)) {
    console.log("Final ile geçti");
}
else {
    console.log("Kaldı");
}