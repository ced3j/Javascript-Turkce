let zaman = new Date(); // şimdiki tarih - şimdiki saat



// Get methods
sonuc = zaman;
sonuc = zaman.getDate(); // Sadece gün kısmına denk gelir
sonuc = zaman.getDay(); // Hangi gün olduğunu söyler örn: 0: pazar, 1: pazartesi
sonuc = zaman.getFullYear(); // Yıl bilgisi
sonuc = zaman.getHours();
sonuc = zaman.getTime(); // Şu anki saati milisaniye cinsinden verir



// Set methods
zaman.setFullYear(2050); // Tarih kaç olursa olsun 2050 ile değiştirdim
zaman.setMonth(7); // Şu anki ayı 7 ( aslında 8. ay ) yapar
sonuc = zaman;



let dogum = new Date(1990, 5, 15); // 1990 yılının 5.( 6. ayı )nın  15. günü
console.log(dogum);


sonuc = zaman.getFullYear() - dogum.getFullYear(); // 2050 yılından 1990 yılı ( fakat bu kaba bir hesap olur çünkü işin içine ayları dahil etmedi)


let milisecond = simdi - dogum; // Bu bize milisaniye türü bir cevap verir biz bunu düzenleyelim
let saniye = milisecond / 1000; // Yaşımızı saniye cinsinden görebiliriz
let dakika = saniye / 60; // Yaşımızı dakika cinsinden

console.log(sonuc);
console.log(typeof sonuc);
