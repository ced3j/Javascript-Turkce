let toplam1 = 0;

for (let i = 1; i <= 10; i++) {
    toplam1 += i;
}

console.log(toplam1);




// --------------------------------------------




let sayilar = [1, 4, 5, 6, 7, 3, 7, 8, 22, 66, 11];
let toplam2 = 0;

// for (let i = 0; i < sayilar.length; i++) {
//     toplam2 += sayilar[i];
// }


for (let i in sayilar) {
    toplam2 += sayilar[i];
}

console.log(toplam2);



// --------------------------------------------

let toplam3 = 0;
for (let sayi of sayilar) {
    toplam3 += sayi;
}

console.log(toplam3);



// --------------------------------------------


let user = {
    "name": "Nicola Tesla",
    "username": "ntesla",
    "password": "333",
    "email": "info@electrica.com"
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

