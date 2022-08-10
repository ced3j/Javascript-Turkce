// Fetch api nedir?


/*


Fetch API, kaynakları (ağ genelinde dahil) getirilmesine yönelik basit bir arayüzdür. 
Ajax yerine alternatif olarak asenkron veri alıp ve veri göndermemizi sağlar


Fetch API ile yapabildiğimiz şey bir veri sunucudan geldikten sonra işlem yapabilmektir. 
Peki bu ne demektir? Diyelim ki bir yere gittiniz ve sipariş veriyorsunuz. 
Kasadaki kişi siparişi aldıktan sonra kasada beklersek bir sonraki kişinin siparişinin vermesini engelleriz. 
Belki de bir sonraki kişinin siparişi çok daha hızlı hazırlanabilirdi. 
Bu durumda şunu da unutmamak lazım biz ne zaman sipariş ettiğimiz ürünleri gidip almak isteriz? 
Tabii ki siparişimiz hazırlandıktan sonra. Burada aslında yeni gelen kavramlardan bir tanesi olan Promise'i kullanırız.



 */



// JSON dosyasından veri çekmek

fetch("settings.json").then(response => { return response.json }).then(responseJson => {
    console.log(responseJson.user);
    console.log(responseJson.userName);
}
);



let userListDOM = document.querySelector("#userList");

// API üzerinden veri çekmek
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = item.title;
        userListDOM.append(liDOM);
    })
});
