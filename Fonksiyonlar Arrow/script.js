// Aynı iki işlemi hem normal function yoluyla hem arrow function yoluyla yapalım


function hello(name) {
    console.log(`Hello ${name}`);
}

hello("Telon Mutk");

// Şimdi bunu arrow function ile yapalım

const helloA = (name) => {
    console.log(`Hello ${name}`);
}

helloA("Elon Mutk");



////--------------------------------------/// 

// Başka bir kullanım türü

const helloB = (name, lastname) => {
    let info = `Merhaba ${lastname} ${name}`;
    console.log(info);
    return info
}

helloB("Tesla", "Nicola");