let box = document.getElementById("box");
const height = document.documentElement.clientHeight; // Ekranın tamamının yüksekliği
const width = document.documentElement.clientWidth; // Ekranın tamamının genişliği


let x = Math.random();


console.log(x * height);
console.log((x * height) + 1);


box.addEventListener("click", move);

function move() {
    let randY = Math.floor((Math.random() * height) + 1);
    let randX = Math.floor((Math.random() * width) + 1);
    box.style.transform = `translate(${randX}px, ${randY}px)`;
}


/*

Math.floor ---> 1.6 ---> 1 
Math.random() ---> 0(dahil) ile 1(hariç) arasında değerler


*/