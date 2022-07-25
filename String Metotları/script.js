let url = "https://www.google.com/";
let okulAdi = "Massachusetts Institute of Technology";



// 1- url kaç karakterlidir?

console.log(`1: ${url.length}`);






// 2- okulAdi kaç kelimeden oluşmaktadır?
const myArray = okulAdi.split(" ");
console.log(`2: ${myArray.length}`);





// 3- url https ile mi başlıyor?

let httpsCheck;
if (url.startsWith("https")) {
    console.log("3: True");
}
else {
    console.log("3: False");
}




// 4- okulAdi içerisinde 'of' kelimesi var mı?

let wordCeck;
if (okulAdi.includes("of")) {
    console.log("4: True");
}
else {
    console.log("4: False");
}






// 5- url ve okulAdi değişkenleri ile aşağıdaki stringi oluşturunuz

// https://www.google.com/massachusetts-institute-of-technology

let newOkul = okulAdi.toLowerCase();
newOkul = newOkul.replaceAll(" ", "-");
let newUrl = url + newOkul;
console.log(`5: ${newUrl}`);