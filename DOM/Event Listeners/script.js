"use strict";

let sonuc;

let gorevListesi = [
    { "id": 1, "gorevAdi": "Görev 1" },
    { "id": 2, "gorevAdi": "Görev 2" },
    { "id": 3, "gorevAdi": "Görev 3" },
    { "id": 4, "gorevAdi": "Görev 4" },
];

let ul = document.getElementById("task-list");

for (let gorev of gorevListesi) {

    let li = `
                <li class="task list-group-item">
                    <div class="form-check">
                        <input type="checkbox" id="${gorev.id}" class="form-check-input">
                        <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
                    </div>
                </li>
            `;

    ul.insertAdjacentHTML("beforeend", li);

}

// Yeni görev ekleme butonunu seçtik
// butona tıklanıldığında çalışacak fonksiyonu ve işleri yazıyourz

document.querySelector("#btnAddNewTask").addEventListener("click", function (event) {
    console.log("Click Event");
    event.preventDefault(); // butona tıklanınca sayfa tekrar yenilenmesin
});

document.querySelector("#btnClear").addEventListener("click", function (event) {
    console.log("Clear event");
});