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