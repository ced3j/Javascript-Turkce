let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");

sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10a");



let sayi = 15.124385;
sonuc = sayi.toPrecision(5); // 5 basamak kadar alacaktır


sonuc = Math.round(2.4); // 2ye yuvarlar
sonuc = Math.round(2.6); // 3e yuvarlar

sonuc = Math.ceil(2.6); // ceil her zaman yukarıya yuvarlar 3 
sonuc = Math.floor(2.2); // floor her zaman aşağıya yuvarlar 2


sonuc = Math.random(); // 0 ile 1 arası bir sayı üretir 

sonuc = Math.floor(Math.random() * 10); // 0 ile 9 arası sayı üretmiş olduk



console.log(typeof sonuc);
console.log(sonuc);