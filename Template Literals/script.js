let username = "John";
const domain = "google.com";

let email = username + "@" + domain;


console.log("Merhaba", username, "şirketime hoş geldin", "mail:", email);


// Yukarıdaki uzun uzun işlemleri yapmak yerine template literals kullanabiliriz

let info = `
Merhaba ${username} şirketime hoş geldin...
Mail adresin: ${email}

Mail adresinin uzunluğu: ${email.length}
Borcun: ${(10 + 6) * 4}
Saat bilgisi: ${new Date().getHours()}

İsim baş harfiniz: ${username[0]}
`

console.log(info);