/*
console.log("Hello World");
document.write("Hello World");
alert("Hello World");
*/


/*

Global Scope --- Function Scope

*/

var degisken = "globalde var ile tanimlanan degisken"
if (true) {
    degisken = "var ile tanimlanan degiskenlere blocklardan erisilebilir";
}
console.log(degisken)



function scope() {
    var functionScopeDegisken = "Bu degisken function scope da tanimlidir";
    if (true) {
        var blocktaTanimliDegisken = "Bu degisken blockta tanimlidir"
        functionScopeDegisken = "Function scope'daki tanımlı degişkenlere o fonksiyonun blocklarından erişilebilir."
    }
    console.log(blocktaTanimliDegisken);
}
scope();
console.log(functionScopeDegisken);
console.log(blocktaTanimliDegisken);







/* var - let - const */

var serverName = "localhost";

/*
    -VAR-
    Değişken değerleri değiştirilebilir.
    Aynı isimle tekrardan tanımlanabilirler.
    var ile tanımlanan değişkenler global scope 
    veya function scope'tur. 
    Global scope'ta tanımlanan değişkenlere her yerden ulaşılabilir. 
    Function içerisinde tanımlanan değişkenlere ise tanımlı olduğu fonksiyonda ulaşılabilir. 

*/



let serverName2 = "localhost2";
serverName2 += " new info";
console.log(serverName2);

/*
    -LET-
    Değişkenleri block scope'ta tanımlayan deklarasyondur. 
    let ile tanımlanan değişkenlerin özellikleri şunlardır.

    Değişken değerleri değiştirilebilir.
    Aynı isimle tekrardan aynı blokta tanımlanamaz. 
    Farklı block'larda aynı isimle tanımlanabilir.
*/





const password = "777";
console.log(password);

/*
    -CONST-
    Block scope da tanımlı, değeri sonradan değiştirilemez değişkenleri 
    deklare etmek için kullanılan keyword'dür.

    Const ile tanımlanan objelerin özellikleri (properties) 
    değiştirilebilir fakat objenin kendisi değiştirilemez. 
    Diziler içinde aynısı geçerlidir. Dizi değerleri 
    değiştirilebilir fakat dizinin kendisi değiştirilemez.
*/