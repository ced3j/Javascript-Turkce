// Diziye/Listeye/Arraye yeni eleman eklemek, çıkarmak, güncellemek

let items = [10, 20, 30, 40];
console.log(`items'ın ilk durumu ${items}`);

// Liste sonuna eleman eklemek 
items.push(90);
console.log(`push ---> ${items}`);


// Liste başına eleman eklemek
items.unshift(110);
console.log(`unshift ---> ${items}`);


// Listenin en sondaki elemanını çıkartmak
items.pop();
console.log(`pop ---> ${items}`);


// Listenin başındaki elemanı çıkarmak
items.shift();
console.log(`shift ---> ${items}`);


// Listenin herhangi bir elemanını güncellemek
items[2] = 200;
console.log(`Güncel liste ---> ${items}`);


// splice methodu ( tanımlayamadım )
items.splice(1, 1); // 1. indexten itibaren 1 adet index'i sil yani 1 eleman silme işlemi yapmış olduk
console.log(`splice ---> ${items}`);



items = [100, 200, 300, 400, 500];
console.log(`items: ${items}`);
// slice method 
// 1. indexten başla 3. index'e kadar aralıktakileri al --- 1 dahil, 3 hariç
console.log(items.slice(1, 3)); // yani 1. ve 2. indexteki değerleri alacak



// Bir elemanın dizi içerisinde bulunup bulunmadığını kontrol edelim
console.log(`500 var mı? ${items.includes(400)}`);


// İki farklı diziyi birleştirelim
const mmeyveler = ["elma", "armut", "kavun", "muz"];
const gezegenler = ["jüpiter", "satürn", "neptün", "dünya"];

const birlestir = mmeyveler.concat(gezegenler);
console.log(birlestir);


// Bir dizideki sayıların 2 katından oluşan başka bir dizi oluşturalım

let sayilarin2kati = items.map(function (sayi) {
    return sayi * 2;
});

console.log(sayilarin2kati);



// filter metodu ile dizi içerisindeki elemanların belirli bir koşula uyanlarını seçiyoruz
const sayilar = [1, 2, 3, 4, 5];

const filtrelenmisSayilar = sayilar.filter(function (sayi) {
    return sayi > 3;
});

console.log(filtrelenmisSayilar); // 4 ve 5



const products = ["Mikrofon", "Kablo", "Telefon", "Bilgisayar", "Mouse", "Klavye", "Ekran"];
const newProducts = products.filter(eleman => eleman.length > 5);
console.log(newProducts); //["Mikrofon", "Telefon", "Bilgisayar", "Klavye"]





// Belirtilen bir koşula uygun elemanı bulmak için 
let numbers = [4, 5, 6, 7];

const bulunacak = numbers.find(function (sayi) {
    return sayi === 5;
});
console.log(bulunacak); // 5 

// Eğer vereceğimiz koşula uyan birden fazla eleman olursa
// sonuç olarak bulduğu ilk elemanı verecektir





// Dizi içerisinde bir dizi daha oluşturmak
const users = [
    ["ahmet", 10],
    ["ayşe", 20],
    ["tesla", 88]
];

console.log(users[0][1]); // 10 



// 