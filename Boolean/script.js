/*

Boolean: 
    evet - hayır
    var - yok
    0 - 1

 */

console.log(Boolean(10 > 9)); /* True olarak dönecektir */

/* İçinde değer barındıran tüm ifadeler true'tur. */

const b1 = Boolean(10);
const b2 = Boolean(1.5);
const b3 = Boolean("Hello World");
const b4 = Boolean(-15);

/*

Yukarıdaki tüm değerler true olacaktır 
Aynı şekilde içinde değer barındırmayan ifadeler ise false olacaktır

*/


const a1 = Boolean(undefined);
const a2 = Boolean(null);
const a3 = Boolean("");
const a4 = Boolean(false);
const a5 = Boolean(NaN);
const a6 = Boolean(0);
const a7 = Boolean(-0);



var x = 1;
console.log(Boolean(x)); // returns true


var y = 0;
console.log(Boolean(y)); // returns false


var z = "0";
console.log(Boolean(z)); // returns true


var a = true;
console.log("A:", Boolean(a)); // returns true