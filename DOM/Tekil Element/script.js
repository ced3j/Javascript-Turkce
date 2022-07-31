var x;

x = document.getElementById("title"); // title id'li elementin direkt kendisi
x = document.getElementById("title").id; // elementin id adı
x = document.getElementById("title").className; // elementin class ismi ( isimleri )
x = document.getElementById("title").classList; // classların isimleri liste halinde 


document.getElementById("title").style.fontSize = "150px"; // stillendirme olarak font özelliği verdik
document.getElementById("title").style.color = "blue"; // renk değiştirdik
// document.getElementById("title").style.display = "none"; // görünürlüğünü değiştirdik ( görünmez oldu... )


document.getElementById("title").innerText = "innerText using";
document.getElementById("title").innetHTML = "<p>innerHTML using</p>";


x = document.querySelector("#title");
// QuerySelector'da ise bir şeyin sadece adını yazmıyoruz aynı zamanda class id vs türünü de belirtiyoruz

x = document.querySelector(".card-title");
x = document.querySelector("div"); // Etiket ismine göre seçiyoruz, sayfada bulduğu ilk div elemanını alır

x = document.querySelector("li:first-child"); // Bulduğu ilk li elemanını getirir ( css selectorları kullanılabiliyor)
x = document.querySelector("li:nth-child(2)");


console.log(x);