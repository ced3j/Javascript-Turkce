// let urun1 = "iphone 12";
// let urun2 = "iphone 13";
// let urun3 = "iphone 13 pro";

let urunler = ["iphone 12", "iphone 13", "iphone 13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold", "siyah", "beyaz"];

let urun1 = ["iphone 12", 9000, "gold"];

let urun2 = [];
urun2[0] = "iphone 13";
urun2[1] = 12000;
urun2[2] = "siyah";

let urun3 = [
    "iphone 13 pro",
    20000,
    ["siyah", "beyaz", "mavi"]
];

console.log(urun3[2]);
console.log(urun3[2][0]);
console.log(urun3[2][1]);
console.log(urun3[2][2]);
console.log(typeof urun3[2]);

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

let kursAdi = "Komple Web Geliştirme Eğitimi";
console.log(kursAdi[5]);
console.log(kursAdi.split(" ")[3]);
// Öncelikle kursAdi içindeki yazıyı split'i kullanarak boşluklardan ayırır 
// split(" ")[3] ise 'Eğitim' parçasına denk gelir





// --------------------------------------------------------------- // 

// Dizi Metotları 




let ogrenciler = ["çınar", "yiğit", "ada"];

sonuc = ogrenciler.length;



// array to string
sonuc = ogrenciler.toString(); // Arrayi stringe çevirir
sonuc = ogrenciler.join(" "); // Virgüllerin yerine join(" ") içinde ne varsa onu koyar


// eleman silme
// sonuc = ogrenciler.pop();       // son eleman silinir ve silinen eleman geri döndürülür.
// sonuc = ogrenciler.shift();     // ilk eleman silinir.


// eleman ekleme
// sonuc = ogrenciler.push("sena");    // dizinin sonuna eleman eklenir.
// sonuc = ogrenciler.unshift("sena"); // dizinin başına eleman eklenir

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes"];

// sonuc = markalar1.concat(markalar2, markalar3); // dizileri birleştirir ve birleşmiş bir dizi haline getirir
// sonuc = markalar1.splice(0, 1, "bmw","audi");
sonuc = markalar1.splice(0, 1);

console.log(sonuc);
console.log(markalar1);