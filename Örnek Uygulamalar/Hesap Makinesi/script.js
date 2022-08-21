const display = document.querySelector(".calculator-input"); // input'u seçtik
const keys = document.querySelector(".calculator-keys"); // Bütün tuşların parent classını seçtik

let displayValue = "0"; // Başlangıçtaki input değeri
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay(); // Uygulama başladığında çalışır

function updateDisplay() {
    display.value = displayValue; // input'un value attribute'una displayValue'yu atıyoruz
}


keys.addEventListener('click', function (e) {
    const element = e.target; // e parametresi keys ebeveyni altında nereye tıkladığımızın bilgisini verir

    if (!element.matches('button')) { // Tıklamış olduğumuz elementin buton olup olmadığını kontrol edelim
        return; // Eğer element buton değilse return et yani buradan sonraki kodları çalıştırma
    }

    if (element.classList.contains('operator')) { // Eğer elementin classları arasında operator classı varsa öyleyse bir rakama tıklamamışız demekti
        handleOperator(element.value); // tıklanılan operatörlerin hangi işlemi ifade ettiğini ayrıştıracağımız fonksiyon
        updateDisplay();
        return;
    }

    if (element.classList.contains('decimal')) {
        // Eğer ondalık sayı hesabı yapmayı tercih etmişse kullanıcı
        inputDecimal(element.value);
        updateDisplay();
        return;
    }

    if (element.classList.contains('clear')) {
        clear();
        updateDisplay();
        return;
    }


    // Eğer yukarıda yaptığımız filtrelemelerin tamamını atlattıysak öyleyse bir rakam butonuna tıklamışızdır
    // Bu durumda da inputNumber fonksiyonuna elementin value değerini göndeririz

    inputNumber(element.value);
    updateDisplay(); // inputNumber fonksiyonu işini yaptıktan sonra input kısmını tekrar güncelliyoruz
});


function inputNumber(num) {
    if (waitingForSecondValue == true) {
        displayValue = num;
        waitingForSecondValue = false;
    } else {
        displayValue = displayValue === '0' ? num : displayValue + num;
        // displayValue eğer 0'a eşit ise input kısmına parametreden gelen num değerini yazsın
        // eğer 0 a eşit değilse inputta yazan sayının yanına num parametresini eklesin
        // örneğin bir rakama tıkladığımızda input kısmında hali hazırda 1 yazıyorsa 1'in sağına da yeni tıkladığımız rakam eklensin
    }
}


function inputDecimal() {
    if (!displayValue.includes('.')) { // displayValue yani hesap makinesinin input kısmı nokta elemanını içermiyorsa bu scope'a girilsin
        displayValue += '.';
    }

}


function clear() {
    displayValue = '0';
}


function handleOperator(nextOperator) {
    const value = parseFloat(displayValue); // Hesap makinesine girilmiş olan yani görünen değeri alıyoruz


    if (operator && waitingForSecondValue) {
        operator = nextOperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;
    } else if (operator) {
        const result = calculate(firstValue, value, operator);
        displayValue = `${parseFloat(result.toFixed(7))}`; // 7 basamak sayısı ile sınırlandırıyoruz
        firstValue = result;
    }

    waitingForSecondValue = true; // ikinci bir değeri beklediğimizin göstergesi
    operator = nextOperator;
}

function calculate(first, second, op) {
    if (op === "+") {
        return first + second;
    }
    else if (op === '-') {
        return first - second;
    }
    else if (op === '*') {
        return first * second;
    }
    else if (op === '/') {
        return first / second;
    }
    else {
        return second;
    }
}