const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const email = document.getElementById("email");


function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling; // Bu inputtan sonra gelen ilk div'i seç
    div.innerText = message;
    div.className = "invalid-feedback";
}


function success(input) {
    input.className = "form-control is-valid";
}


function checkEmail(input) {  // Email'i kontrol ediyoruz
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, "Hatalı veya eksik mail adresi");
    }
};



function checkRequired(inputs) {

    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, "Bu alan boş bırakılamaz");
        }
        else {
            success(input);
        }
    });

}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `Parola en az ${min} karakter olmalıdır`);
    }
    else if (input.value.length > max) {
        error(input, `Parola en fazla ${max} karakter olabilir`);
    }
    else {
        success(input);
    }
}



function checkPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        error(input1, "Parolalar birbirinden farklı olamaz");
        error(input2, "Parolalar birbirinden farklı olamaz");
    } else {
        success(input1);
        success(input2);
    }
}



// Forma submit eventi ekliyoruz
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([username, password, repassword, email]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 25);
    checkLength(repassword, 7, 25);
    checkPasswords(password, repassword);
});
