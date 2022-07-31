

let sonuc;


sonuc = document.getElementsByClassName("task"); // class ismi task olan tüm elementleri seç
sonuc = document.getElementsByClassName("task")[0];
sonuc = document.getElementsByClassName("task")[1];

taskList = document.getElementsByClassName("task");




// for (let i = 0; i < taskList.length; i++) {
//     console.log(taskList[i]);
// }



for (let task of taskList) {
    task.style.color = "red";
    task.style.fontSize = "30px";
    task.innerText = "Item";
}




// elementleri taglerine göre de seçebiliriz

taskList = document.getElementsByTagName("li")[0]; // li tagına ait ilk elementi getir


// Ya da şöyle de yapılabilir
ul = document.getElementById("task-list"); // task-list id'ye sahip ul elemanına ulaştık
taskList2 = ul.getElementsByTagName("li"); // seçtiğimiz ul elemanının içinde döndürdük ve li tagli elemanları seçtik

for (let i = 0; i < taskList2.length; i++) {
    console.log(taskList2[i]);
}



console.log("-------------------------------------------"); // Boşluk bırakmak için




// Ya da querySelectorAll isimli bir method ile yapılabilir
taskList3 = document.querySelectorAll("#task-list li"); // task-list idsinin altındaki li elemanlarını topluca seç
for (task of taskList3) {
    console.log(task);
}