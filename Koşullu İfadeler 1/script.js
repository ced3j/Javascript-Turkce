let name = "ced3j";

let isLoggedIn = (name == "ced3j");

if (isLoggedIn) {
    console.log(`
    Uygulamaya giriş yapıldı
    Hoş geldiniz Mr. ${name}`);
}
else {
    console.log("Giriş yapılamadı.");
}



// ---------------------------------------- // 


let mezuniyet = "üniversite";
let yas = 24;

if ((yas >= 18) && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
    console.log("Ehliyet alabilir");
}
else {
    console.log("Ehliyet şartları gerçekleşmiyor.");
}



// Yukarıdaki işlemlerin açıklaması:
// Üniversite mezunu olan ve aynı zamanda 24 yaşında olan bir insan var
// Biz bu insanı bir if else yapısından geçiriyoruz
// Eğer yaşı 18e eşit veya büyükse VE
// Mezuniyet Lise || ( ya da ) Üniversiteye eşitse bu kişi ehliyet alabilir
// Değilse alamaz 




switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}











