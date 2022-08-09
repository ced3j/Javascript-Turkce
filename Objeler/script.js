// dict, json

let userA = {
    "ad": "Nicola",
    "soyad": "Tesla",
    "yas": 23,
    "adres": {
        "sehir": "Bartın",
        "ilce": "Amasra"
    },
    "hobiler": ["elektrik", "elektronik"]
}
let userB = {
    "ad": "James Clerk",
    "soyad": "Maxwell",
    "yas": 51,
    "adres": {
        "sehir": "Bartın",
        "ilce": "Amasra"
    },
    "hobiler": ["optik", "fizik"]
}

let sonuc;

sonuc = userA.ad;
sonuc = userA.soyad;
sonuc = userA["yas"];
sonuc = userA.adres.sehir;
sonuc = userA.adres.ilce;
sonuc = userA.hobiler[0];
sonuc = userA.hobiler[1];

console.log(`UserB yaş: ${userB["yas"]}`);
console.log(`UserB yaş: ${userB.yas}`);

let kullanicilar = [
    userA,
    userB
];


sonuc = kullanicilar[1].ad;
console.log(sonuc);


let urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc);






// Boş bir obje oluşturup içine key atayalım

let animal = {};           // set
let key = "flies";        // key atama
animal[key] = true;       // value atama


// Sonuç olarak oluşan obje şu şekilde olacaktır ->
/*

animal = {
   "flies" : true	      // yeni eklediğimiz key value çifti
};

*/



// Obje methodları -->

/*

Object.keys(obj) – Key’lerden oluşan bir array döner(return).
Object.values(obj) – Value’lardan oluşan bir array döner.
Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 


*/




// Nesneye method eklemek


var person = {
    name: 'Nicola',
    surname: 'Tesla',
    age: 90,
    city: 'NYC',
    introduce: function () {
        console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
    },
};

// Şimdi de person nesnemize mycity adında bir methodu sonradan dahil edelim

person.myCity = function () {
    console.log(`I live in ${this.city}`);
};
person.myCity();

console.log(person.introduce());



// Bir de arrow functionlu versiyonu -> 


/*

var person = {
    name: 'Nicola',
    surname: 'Tesla',
    age: 90,
    introduce: () => {
        return `My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`;
    },
};
console.log(person.introduce());

*/


