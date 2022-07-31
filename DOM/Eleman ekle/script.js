"use strict";


let gorevListesi = [
    { "id": 1, "gorevAdi": "Görev 1" },
    { "id": 2, "gorevAdi": "Görev 2" },
    { "id": 3, "gorevAdi": "Görev 3" },
    { "id": 4, "gorevAdi": "Görev 4" },
];

displayTask();


function displayTask() {
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";

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

}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document.querySelector("#btnAddNewTask").addEventListener("onkeypress", function () { // Klavyede basılan tuşu seçiyoruz
    if (KeyboardEvent.key == "Enter") { // Eğer basılan tuş Enter ise
        document.getElementById("btnAddNewTask").click(); // Button'a tıklamışız gibi etki etmesini istiyorum 
        // böylelikle 35. satır tekrar çağrılıyor ve newTask fonksiyonu aktif oluyor

    }
});


function newTask(event) {

    let taskInput = document.querySelector("#txtTaskName"); // inputumuza id querySelector ile eriştik ve atadık

    if (taskInput.value == "") {
        alert("Boş bir değer kaydedemezsiniz!");
    }
    else {
        gorevListesi.push({ "id": gorevListesi.length + 1, "gorevAdi": taskInput.value });
        taskInput.value = "";
        displayTask();

    }



    event.preventDefault(event);
}