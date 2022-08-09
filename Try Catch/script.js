// try -> kodları çalışma zamanında test etmek için kullanılır
// catch -> çalışma zamanında hata çıkması durumunda kullanılır



/* 


try {
  //Çalıştırılacak kodlar
}catch(hata) {
  //Hata yakalandığında çalışacak kodlar
}finally {
  //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}





try {
  hello();
}catch (err) {
  console.error(err);
  // beklenen çıktı: ReferenceError: hello is not defined
  // hata mesajları tarayıcıya göre değişiklik gösterecektir
}



*/


(function () {
    var a = b = 5;
})();

console.log(b);
