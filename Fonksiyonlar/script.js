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