let sonuc;

ul = document.getElementById("task-list");


// children, firstElementChild, lastElementChild
// Ulaştığımız elementin childlarına ulaşma yöntemlerinden bazıları


sonuc = ul.children;
sonuc = ul.children[0];
sonuc = ul.firstElementChild;
sonuc = ul.lastElementChild;

// ya da ulaştığımız elementin parent elementlerine de gidebiliriz


sonuc = document.getElementById("title").parentElement;
// id'si "title" olan elementi seçtim ve parent elementine gittim


sonuc = document.querySelector(".task"); // görev1
sonuc = document.querySelector(".task").nextElementSibling; // görev2
sonuc = document.querySelector(".task").nextElementSibling.nextElementSibling; // görev3
sonuc = document.querySelector(".task").nextElementSibling.nextElementSibling.previousElementSibling; // görev2



console.log(sonuc);