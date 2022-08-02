var models = [
    {
        name: "Bmw 418d",
        image: "images/bmw.jpg"
    },
    {
        name: "Mazda CX-3",
        image: "images/mazda.jpg"
    },

    {
        name: "Volvo S60",
        image: "images/volvo.jpg"
    },

    {
        name: "Skoda Superb",
        image: "images/skoda.jpg"
    },

    {
        name: "Honda Civic",
        image: "images/honda.jpg"
    },

];

// Html sayfamızdaki img içine yukarıda tanımladığımız models listesinin içindeki objeleri vermeliyiz


var index = 0;
var settings = {
    duration: '2000', // 2 saniyelik bekleme süresi
    random: false // random true olduğunda rastgele bir sayı üretsin  // false olunca artan index üretilecek (61.satır)
};



init(settings); // init'e settings'i gönderip işlemleri başlatıyoruz



function init(settings) {
    // Bir işi belirli bir sürede yaptırmak için 2 yöntemimiz var 
    // birisi setTimeout diğeri setInterval
    // timeout = X saniye sonra başlatılacak işlem X saniye sonra başlıyor 1 kere işleyip duruyor
    // Interval ise clearInterval ile durdurmadığımız sürece sürekli tekrar edecek
    // Burada bizim ihtiyacımız olan Interval

    var previous; // Aynı fotoğrafı üst üste 2 kere getirmemesi için önceki index değerini tutan bir değişken oluşturalım 



    // setInterval(function(){ }, settings.duration);
    setInterval(function () {
        // Buraya ise tekrarlayacağımz işlemi yazıyoruz

        if (settings.random) { // random true ise
            // random index üret
            do {
                index = Math.floor(Math.random() * models.length); // random bize 0 ile 1 arası sayı üretecek models.length ile çarpınca sayıyı models'in eleman sayısı seviyesine çıkarmış olacağız fakat son adımda math.floor ile models.length değerini almamış olacağız
            } while (index == previous); // index yani şu anki fotoğraf indexi ve önceki index eşit olduğu sürece yeni değer üret
            previous = index; // Önceki index'i üretilen son index'e eşitledim
        } else {
            // artan index üret 
            if (models.length == index + 1) {
                index = -1;
            }
            showSlide(index); // en sonki index değerini gönderdik
            index++;
        }
        showSlide(index); // en sonki index değerini gönderdik
    }, settings.duration); // yukarıda tanımladığımız settings objesinin duration değerini interval'ın 2. parametresine atadım
}





function showSlide(index) {
    document.querySelector(".card-img-top").setAttribute("src", models[index].image);
    // card-img-top'u query ile seçtik
    // Seçtiğimiz elemanın src attribute'una yukarıda oluşturudğumuz models'in index'inci indexinin image değerini atadık


    document.querySelector(".card-title").textContent = models[index].name; // models'in indexinci elemanının name değerini
    // card-title classına sahip elemanın texti olarak atadık
}





document.querySelector(".fa-arrow-left").addEventListener("click", left);

document.querySelector(".fa-arrow-right").addEventListener("click", right);



function right() {
    if (index == models.length) {
        index = 0;
        showSlide(index);
    }
    else {
        index++;
        showSlide(index);
    }
}



function left() {
    if (index == 0) {
        index = models.length;
        showSlide(index);
    }
    else {
        index--;
        showSlide(index);
    }
}