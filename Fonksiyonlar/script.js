function selamlama(message) {
    console.log(message);
}

selamlama("Hello");
selamlama("World");




console.log();



function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasAhmet = yasHesapla(1985);
let yasAyse = yasHesapla(1998);

console.log(yasAhmet, yasAyse);

function emeklilik(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;

    if (kalan_sene > 0) {
        console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı.`);
    } else {
        console.log("Zaten emekliymişsin sen");
    }
}


emeklilik(1990, "Ali");
emeklilik(1590, "Ayşe");



console.log();
console.log("//////////////////////////////////////////////////////////////");
console.log();


// Asenkron yani farklı zamanlarda çalışan fonksiyonlar 


function printScreen1() {
    console.log("İlk ekran çıktısı");
}

function printScreen2() {
    setTimeout(function () { // setTimeOut ile çalışması için bekleme süresi koyuyoruz
        console.log("İkinci ekran çıktısı");
    }, 3000); // 3000 = 3000 milisaniye == 3 saniye sonra çalışacak
}

function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
}



printScreen1();
printScreen2();
printScreen3();
// printScreen1 fonksiyonu çalıştıktan sonra printScreen2 
// fonksiyonun çalışması için beklemeden printScreen3 fonksiyonumuz çalışır


console.log();

// Fonksiyon İfadeleri (Function Expressions)
// Bir değişkene fonksiyon atamak

var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc1 = ekle(10, 20);
// var sonuc2 = topla(10, 20); // geçersiz



console.log();


// ---------- Arrow Functions


/*

// Aşağıdaki iki ifade aynı işi yapmaktadır

let func = (param1, param2, param3) => expression;

let func = function (param1, param2, param3) {
    return expression;
  };


*/



const carpim = (sayi1, sayi2) => sayi1 * sayi2;

console.log(carpim(3, 5));


/*
    // Daha uzun hali ise;
    const carpim = function(sayi1,sayi2){
      return sayi1 * sayi2;
    }
  */




// Başka diğer örnekler:

const karesiniAl = (sayi) => sayi * sayi;
//Hiç parametre olmadığı zaman ise
const helloWorld = () => console.log('Hello World');



console.log();


// 




// user = 29;

// var userType;
// if (userIsYoungerThan18) {
//     userType = "Minor";
// } else {
//     userType = "Adult";
// }

// if (userIsYoungerThan21) {
//     serveDrink("Grape Juice");
// } else {
//     serveDrink("Wine");
// }






/*
var userType = userIsYoungerThan18 ? "Minor" : "Adult";

serveDrink(userIsYoungerThan21 ? "Grape Juice" : "Wine");

*/


console.log();



// Return mantığı

const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama(r) // Fonksiyonumuz, r parametresini alıyor.
{
    var islemSonucu = PI * r * r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.




console.log();



function daireAlaniHesaplama(r, PI = 3.14) {
    return PI * r * r;
}

function carpma(a1, a2) {
    return a1 * a2;
}

var alan1 = daireAlaniHesaplama(5); // 5 ve 6 argümanları için dairelerin alanları hesaplandı.
var alan2 = daireAlaniHesaplama(6);
var donenSonuc = carpma(alan1, alan2); // Hesaplanan alanlar argüman olarak verildi.
console.log(donenSonuc);  			  // 354.9456 olarak hesaplandı.



////////////////////////

console.log();

function factorialize(num) {
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
        /* 
                        num      var i = num - 1       num *= i         i--       i >= 1?
        1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
        2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
        3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
        4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
        5th iteration: 120               0                120
        End of the FOR loop 
        */
    }

    return num;
}


console.log(factorialize(5));
