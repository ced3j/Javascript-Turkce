let sayilar = [1, 5, 7, 15, 3, 25, 60, 70];

// 1- sayilar listesindeki her bir elemanın karesini yazdırın

for (let sayi in sayilar) {
    console.log(sayilar[sayi] ** 2);
}



console.log();

let toplam1 = 0;
for (let sayi of sayilar) {
    toplam1 += sayi ** 2;
}

console.log(toplam1);
console.log();






// 2- sayilar listesindeki hangi sayılar 5in katlarıdır?

for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] % 5 == 0) {
        console.log(sayilar[i]);
    }
}

console.log();






// 3- sayilar listesindeki çift sayıların toplamını bulunuz


for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] % 2 == 0) {
        console.log(sayilar[i]);
    }
}

console.log();







let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırın


for (let urun of urunler) {
    console.log(urun.toUpperCase());
}


console.log();

// 5- urunler listesinde içinde samsung geçen kaç ürün var?

let sayi = 0;
for (let urun of urunler) {
    if (urun.includes("samsung")) {
        sayi++;
    }
}

console.log(sayi);







let ogrenciler = [
    { "ad": "yigit", "soyad": "bilgi", "notlar": [60, 70, 80] },
    { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] },
    { "ad": "çınar", "soyad": "turan", "notlar": [10, 20, 60] }
];

console.log();




// ogrenciler listesindeki her ogrencinin not ortalaması ve başarı durumlarını yazdırınız

for (let ogrenci of ogrenciler) {
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for (let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;
    console.log(`${ogrenci.ad} ${ogrenci.soyad} - not ortalaması: ${ortalama.toFixed(1)}`);

    if (ortalama >= 50) {
        console.log("Başarılı");
    }
    else {
        console.log("Başarısız");
    }
}


