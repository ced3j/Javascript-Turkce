const checkBUT = document.querySelector(".fa-circle-check");
const todo = document.querySelector(".form-control");
const todolist = document.querySelector("#todolist");
const text = document.querySelector("#text");


// text alanına klavyedeki tuşları takip edebileceğimiz bir event ekliyoruz ve 
// bu event sayesinde eğer kullanıcı Enter'a basarsa ekleme fonksiyonunun tetiklenmesini sağlıyoruz
text.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addTODO();
    }
})

// Kullanıcı yeşil butona tıkladıktan sonra addTODO çalışacak
checkBUT.addEventListener("click", () => {
    addTODO();
});




function addTODO() {
    // Bir li elemanı oluşturuyoruz ve yanına ekleyebilmek için bir i elemanı oluşturuyoruz 
    // Bu i elemanı silme butonunu temsil edecek
    let newLi = document.createElement("li");
    let deleteBut = document.createElement("i");

    // Classlarını giriyoruz
    deleteBut.classList = "fa-solid fa-circle-xmark fa-2x";
    newLi.classList = "d-flex justify-content-between align-items-center p-1 rounded";


    // Eğer text.value boş değilse yeni eleman ekleme işlemlerini gerçekleştiriyoruz ama boş ise bir uyarı çıkmasını sağlıyoruz
    if (text.value != "") {
        newLi.innerHTML = `<h6>${text.value}</h6>`
        newLi.appendChild(deleteBut);
        todolist.appendChild(newLi);
        text.value = ""; // Ekleme işlemleri bittikten sonra input kısmını tekrar boşaltıyoruz
    } else {
        alert("Hiçbir görev girmediniz.");
    }


    /*   Aşağıdaki silme fonksiyonunun alternatif kullanımı
    
        deleteBut.addEventListener("click", function () {
            const del = confirm("Silmek istediğinize emin misiniz?");
            if (del == true) {
                const parent = this.parentNode;
                parent.remove();
            }
        });
    */

    deleteBut.addEventListener("click", (e) => {
        const del = confirm("Silmek istediğinize emin misiniz?");
        if (del == true) {
            const parent = e.target.parentNode;
            parent.remove();
        }
    });


}


