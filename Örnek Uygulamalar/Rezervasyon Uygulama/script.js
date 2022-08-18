const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)"); // reserved classına sahip olanlar hariç koltukları seçtik


getFromLocalStorage();
calculateTotal();



container.addEventListener("click", function (e) { // buradaki e parametresi hangi elemana tıkladığımızı temsil eder
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) { // e.target ile tıkladığımız elemanın htmlini alıyoruz
        // classList'inde 'seat' ı içeren elemanları seçtik
        // &&'den sonraki kısımda da classList'inde 'reserved' olanları hariç tuttuk

        e.target.classList.toggle('selected');
        // toggle methodu ile class ekleme yapıyoruz. Eğer selected class'ı seçtiğimiz elemanda zaten mevcutsa bunu siler mevcut değilse ekler 

        calculateTotal();

    }
});


select.addEventListener('change', function (e) { // select kısmı her değiştirildiğnide (change eventi) tekrardan calculateTotal çalıştırılıyor 
    calculateTotal();
});


function calculateTotal() {

    const selectedSeats = container.querySelectorAll(".seat.selected"); // seçili olan koltuklar

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function (seat) { // selectedSeats (seçili koltuklar) içinde forEach ile dönüyoruz
        selectedSeatsArr.push(seat); // selectedSeats için oluşturduğumuz boş listeye push methodu yardımıyla seatleri ekliyoruz
    });

    seats.forEach(function (seat) { // dolu koltukların haricindeki tüm koltuklar
        seatsArr.push(seat);
    });

    // map methodu ile selectedSeatsArr içinde tek tek dolaşıyoruz her bir eleman seat parametresi oluyor
    let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);

    })

    // Seçili koltuk sayılarını bulalım
    let = selectedSeatCount = container.querySelectorAll('.seat.selected').length; // container içindeki elemanların seat ve selected classlarını aynı anda bulunduranların sayısını alıyoruz

    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;  // ücret olarak select elemanının value değeriyle seçili koltuk sayısını çarpıyoruz


    // Bu aşamada bilgileri localStorage'a kaydedelim

    saveToLocalStorage(selectedSeatIndexs);

}


function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    // Site içerisinde value değeri selectedSeats olacak ve JSON formatında göndereceğiz bilgilerimizi 

    localStorage.setItem("selectedMovieIndex", select.selectedIndex); // Hangi filmi seçtiğimiz bilgisini de LS'a atalım
}


function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')); // LocalStorage'a kaydettiğimiz bilgileri getItem ile tekrar alıyoruz 


    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function (seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex'); // Film numarasını alıyoruz

    if (selectedMovieIndex != null) { // Eğer boş değilse
        select.selectedIndex = selectedMovieIndex;
    }
}