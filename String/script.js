let email = "ced3j@github.com";
let firstName = "John";
let lastName = "Kafka";



// string karakter sayısı: 
console.log(email.length);



// ilk karakteri bulmak
console.log(firstName[0]);
console.log(firstName.charAt(0));




// Büyük harf - Küçük harf
firstName = firstName.toUpperCase();
console.log(firstName);

lastName = lastName.toLowerCase();
console.log(lastName);




// String içerisinden istediğimiz bilgiyi bulmak
console.log(email.search("@")); // kaçıncı indexten başladığını gösterir
console.log(email[5]);
// eğer aradığımız şey verdiğimiz stringin içinde yoksa -1 sonucu döner
// eğer varsa 0 sonucu döner




// Belirli bir yere kadar al
console.log(email.slice(0, 10)); // 0. indexten 10. indexe kadar al
console.log(email.slice(5)); // sadece 5. indexten sonrasını aldı

let domain = email.slice(email.search("@"));
console.log(domain);

let newDomain = domain.slice(1, domain.indexOf('.'));
console.log(`Yeni domain: ${newDomain}`);




// Bilgiyi değiştirelim

email = email.replace("github.com", "yahoo.com");
console.log(email);



// Aradığım bilgi mevcut mu?

console.log(email.includes("adgsşgkds")); // false
console.log(email.includes("@")); // true


// Başlangıç bitiş kontrolü

console.log(email.endsWith("com")); // true
console.log(email.startsWith("c")); // true




