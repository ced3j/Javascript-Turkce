// Array - Liste - Dizi

// Array oluşturmak

let domain = "google";
let isActive = false;
let items = [20, 30, 70, isActive, domain];


// Boş bir liste oluşturmak
let emptyArray = [];


// Array içerisindeki eleman sayısı
console.log(items.length); // 5 sonucu çıkacaktır

// Array'in ilk elemanına ulaşmak
console.log(items[0]);

// Array'in son elamnına ulaşmak
console.log(items[items.length - 1]);

// Array'in tam ortasındaki elemana ulaşmak
console.log(items[Math.floor(items.length / 2)]);


// Değişken içindeki bilginin Array olup olmadığını kontrol edelim
Array.isArray(items);


