// FORM : 
/*

Form içinde bulundurduğu form elementlerinin 
name'leri sayesinde değerlerini alıp bu değerlerle 
işlem yapmanıza olanak sağlayan bir yapıdır.




Genellikle backend'e istek yapılacağı zaman kullanılır.(Veri göndermek gibi)

En önemli parametresi method parametresidir. 
Method, "post" veya "get" olmak üzere iki türlü değer alabilir.

GET Methodu: Form verilerini URL üzerinden gönderir. 
    Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi 
    bulunsun. Kullanıcı yaşını girip gönder butonuna bastığı zaman 
    mail alanına girdiği veri URL üzerinden gönderilir.


POST Methodu: Verileri arka planda gönderir. 
    Örneğin; kullanıcı mail adresini girip gönder butonuna bastığı 
    zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir.



onSubmit ve onChange Eventleri

onSubmit: 
    Form submit olduğu anda ne yapacağını söyleyeceğimiz event'tir.

onChange: 
    Form'un içindeki form elementlerinin(input) value'su 
    her değiştiğinde bu değişen value'yu bizim her defasında 
    elde etmemize olanak sağlayan eventtir.




*/

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener('submit', formSubmit);


function formSubmit(event) {
    event.preventDefault(); // Default işlemini yapmasını engelledik böylelikle sayfamız Gönder butonuna basıldığında yenilenmeyecek
    console.log("İşlem gerçekleştirildi");

    let scoreInputDOM = document.querySelector("#score"); // input içerisine yazılan bilgiyi aldık

    // Aldığımız bilgiyi local storage içerisine eklemek istiyorum
    localStorage.setItem("score", scoreInputDOM.value);
}