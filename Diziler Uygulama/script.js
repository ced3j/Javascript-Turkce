// 1- "Elma, Armut, Muz, Çilek" dizisi oluşturun

let meyveler = ["Elma", "Armut", "Muz", "Çilek"];










// 2- Dizi kaç elemanlıdır?

console.log(`Eleman sayısı: ${meyveler.length}`);









// 3- İlk ve son elemanı nedir?

console.log(`İlk elemanı: ${meyveler[0]}, son elemanı: ${meyveler[meyveler.length - 1]}`);








// 4- Elma, dizinin bir elemanı mıdır?

console.log(`Elma dizinin bir elemanı mıdır? ${meyveler.includes("Elma")}`);








// 5- Kiraz meyvesini listenin sonuna ekleyiniz

meyveler.push("Kiraz");
console.log(meyveler);







// 6- Dizinin son 2 elemanını siliniz

meyveler.splice(meyveler[meyveler.length - 2], 2);
console.log(meyveler);








// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını, not ortalamasını hesaplayınız

/*

öğr1 : Elon Musk 2010 (70-60-80)
öğr2 : Max Planck 2012 (80-80-90)
öğr3 : Nicola Tesla 2009 (60-60-70)

 */


let ogr1 = [
    "Elon",
    "Musk",
    2010,
    [70, 60, 80]
];


let ogr2 = [
    "Max",
    "Planck",
    2012,
    [80, 80, 30]
];

let ogr3 = [
    "Nicola",
    "Tesla",
    2009,
    [60, 60, 70]
];

let ogrenciler = [ogr1, ogr2, ogr3];

let elon_yas = new Date().getFullYear() - ogrenciler[0][2];
let max_yas = new Date().getFullYear() - ogrenciler[1][2];
let nicola_yas = new Date().getFullYear() - ogrenciler[2][2];



let elon_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let max_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let nicola_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;


console.log(elon_not.toFixed(1), max_not.toFixed(1), nicola_not.toFixed(1));