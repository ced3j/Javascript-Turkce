// JavaScript'te yazılımcı kişinin bazı yaptığı hatalar görmezden gelinir
// Kullanılmayan noktalı virgüller ya da tırnak işaretleri gibi ufak tefek hatalar olmasına rağmen
// Yazılımımız çalışmaya devam eder fakat bu profesyönel bir iş olmaktan uzak olur
// Bu gibi en ufak hatada bize uyarı vermesi ve sorun çıkarması için "use strict" yazarız

"use strict";

let sonuc;


let gorevListesi = [
    { "id": 1, "gorevAdi": "Görev 1" },
    { "id": 2, "gorevAdi": "Görev 2" },
    { "id": 3, "gorevAdi": "Görev 3" },
    { "id": 4, "gorevAdi": "Görev 4" },
];

let ul = document.getElementById("task-list");

// let count = ul.children.length;

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
