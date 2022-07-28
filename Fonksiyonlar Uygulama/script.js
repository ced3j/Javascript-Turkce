// 1- Kendisine gönderilen kelimeyi belirtilen sayıda ekrana yazan fonksiyon


let kelime = "Betel";
let tekrarSayisi = 10;

function yazdir(kelime, tekrar) {
    for (let i = 0; i < tekrar; i++) {
        console.log(kelime);
    }
}

yazdir(kelime, tekrarSayisi);
console.log();







// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız

// dikdörtgenin alanı: uzun kenar x kısa kenar 
// dikdörtgenin çevresi 2x(uzun kenar + kısa kenar)

function hesaplayan(uzun, kisa) {
    console.log(`
        Dikdörtgenin alanı: ${uzun * kisa}
        Dikdörtgenin çevresi: ${2 * (uzun + kisa)}
    `);
}

hesaplayan(10, 5);
console.log();






// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız


function yaziTura() {
    let random = Math.random(); // 0-1

    if (random < 0.5) {
        console.log("Yazı");
    }
    else {
        console.log("Tura");
    }
}

yaziTura();
yaziTura();
yaziTura();


console.log();






// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız





function tamBolenler(sayi) {
    let sayilar = [];

    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            sayilar.push(i);
        }
    }


    return sayilar;
}



console.log(tamBolenler(10));
console.log(tamBolenler(20));


console.log();



// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız



// Burada arguments isimli bir obje tanımlaması vardır ve 
// fonksiyon içerisine gönderdiğimiz parametrelere key ve value verir




function toplam() {
    let sonuc = 0;
    for (let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }

    return sonuc;
    console.log("------");
}

console.log(toplam(2, 4));
console.log(toplam(10, 20, 25, 4));






