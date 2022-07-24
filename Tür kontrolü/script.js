console.log(typeof 42);
// beklenen output: "number"

console.log(typeof 'kodluyoruz');
//beklenen output: "string"

console.log(typeof true);
// beklenen output: "boolean"

console.log(typeof Variable);
// beklenen output: "undefined"




// Diğer yöntemlere bakalım

// isInteger() yöntemi sayıların tam sayı olup olmadığını belirler

console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(-123)); // true
console.log(Number.isInteger(0.5)); // false

// isFinite() bir değerin sonlu bir sayı olup olmadığını belirler

console.log(Number.isFinite(0)) // true
console.log(Number.isFinite(-123)) // false 
console.log(Number.isFinite("Hello")) // false 
console.log(Number.isFinite(-Infinity)) // false 
console.log(Number.isFinite(0 / 7)) // false 



// isNan() yöntemi bir değerin NaN olup olmadığını belirler 
// NaN : Not a number 

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true










// Değişken Türünü Değiştirmek (Type Coercion)

String(123); // "123"
console.log(parseInt("123")) // 123


String(123) // “123” explicit
123 + '' // “123”    implicit



// Her primitif değer stringe dönüştürülebilir

String(123); // "123"
String(-12.3) // "-12.3"
String(null); // "null"


Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false


Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function () { }) // true


