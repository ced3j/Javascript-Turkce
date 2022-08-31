// Regex --- Regular Expressions yani düzenli ifadeler

// Regex'e neden ihtiyacımız var?
/*

Basitçe şöyle bir örnek verebiliriz. Elimizde bir veri grubu vardır ve bu grup tamamen telefon numaralarından oluşuyordur 05xxxxxxxxx şeklinde 11 haneli telefon numalararının aralarında bazıları 9 hane bazıları 10 hane olabilir (yani diyelim ki bahsettiğimiz veri grubunun içinde bize yanlış veriler de gönderilmiş olsun) biz bu grubun içinden sadece geçerli olan yani 11 haneli olan numaraları almak isteriz bu durumda regex kullanabiliriz.
Ya da aynı şekilde elimizde birçok e-mail adresi olabilir ve bu adreslerin geçerli olanlarını geçersizlerinden ayırmak istiyor olabiliriz yine aynı şekilde regex ile bu sorunu çözebiliriz. 
Tabii bu verdiğim 2 örnek aslında belki de basit birkaç if else sorgusu ile de halledilebilir türden örnekler fakat bazen işler çok daha karmaşıklaşabiliyor ve ayırt etmeye çalıştığımız verileri birden fazla özelliğe göre ayırmamız gerekebiliyor genelde zaten regex bu gibi durumlarda kullanılır.
Basitçe böyle örnekleyebiliriz. 

--- Bir regex cümlesi '/' ile başlar ve yine '/' ile biter ---> //g
--- İkinci /'ı koyduktan sonra flagleri yazarız yani g harfinin olduğu yere flagler yazılır


Temel bir örnekle başlayalım: 

--- Örneğin elimizde şöyle bir cümle olsun: Ben regex öğreniyorum
--- Bu cümle üzerinde regex ile bir seçim yapmak istersek
/e/  mesela bu şekilde bir kullanım uygulayabiliyoruz ve bunun bize sağladığı şey 
"Ben regex öğreniyorum" cümlesinin 'Ben' kelimesi içerisindeki 'e' harfini seçmek oluyor
Çünkü kullandığım regexte herhangi bir flag belirtmedim
Eğer /e/g yazıp global flag'i kullanırsak cümle içindeki tüm e harflerini seçecektir


            + notasyonu

Bu sefer örnek cümlemiz 'Merhabaaaa' olsun 
Bu kelime üzerinde şöyle bir regex uygulayalım
/a+/g
Burada yine kelime içerisindeki tüm 'a' harflerini seçecektir (global flag sebebiyle)
Fakat şöyle bir fark var, eğer yan yana 'a' harfleri denk gelmişse bu harfleri birbirleriyle bir grup halinde seçecektir
Örnek kelimenin üzerinden anlatacak olursam 
Merhabaaaa kelimesindeki a harflerini şu şekilde seçecek
Merh a b aaaa
Yani diğer harfleri çıkararak daha da sadeleştirirsem => a aaaa 
Gördüğünüz gibi baştaki a tek başına ama sonda üst üste 4 kez gelen a harfleri bir grup halinde seçildi
Bunu sağlayan + işareti oldu



             ? OPSİYONEL KARAKTER        

Şimdi biraz daha günlük hayatın içinden bir uygulama yapalım

Mesela elimizde bir cümle var ve bu cümlenin içinde hem 'burada' kelimesi var hem de 'burda' kelimesi var 
Konuşma dilinde burada ve burda kelimelerini birbirinden farklı tutmuyor olabiliriz fakat regex kullanırken de bu ikisini birbirinden ayırmak istemiyorsak
Yani bir cümle içerisindeki burada kelimesi gördüğü zaman bunu seçsin ama aynı zamanda 'burda' kelimesi gördüğü zamanda da seçim yapabilsin istiyorsak ne yapmamız gerekir

/bura?da/g

Bu şekilde bir kullanımla bu sorunun da üstesinden gelmiş oluyoruz. Peki buradaki olay ne? Şöyle anlatayım oraya koyduğum soru işareti kendisinin hemen solundaki harf ya da karakter orada artın ne varsa 
Onun olup olmamasını opsiyonel hale getirecektir
Yani yazdığımız bu regex kodu elimizdeki örnek cümlede öncelikle 'bura' kısmını arıyor ve hem 'burada' hem de 'burda'
Yazan kelimelerin başlarında 'bura' ifadesini buluyor daha sonra burada ile burda arasındaki fark olan a harfi ile ikisi ayrışmış oluyor fakat bu bizim için artık sorun olmaktan çıkmış durumda çünkü biz oradaki a harfi için soru işareti kullanarak onun opsiyonel olduğunu belirttik yani olsa da olur olmasa da olur dedik.



            * Yıldız notasyonu

    /e*/g          /*

Bu örnek için de kullanacağımız cümle: Heeey ben regex öğreniyorum
Olsun diyelim ki

e* yaptığımız zaman opsiyonel olarak e harflerini seçiyoruz 
eğer bir arada duran e harfleri varsa da bunları grup olarak seçiyoruz
Mesela bu cümle için 


H eee y b e n r e g e x öğr e niyorum
Görüldüğü gibi ilk kelimenin içindeki e harfleri yan yana olduğu için bir grup olarak seçtik diğerlerini ise ayrı ayrı seçtik





                . Nokta notasyonu

                /./g


Noktanın özelliği ise tek bir karakter seçiyor oluşudur. Burada karakterin ne olduğu önemsiz. Rakam olabilir, harf olabilir, semboller olabilir >#${[}]} veya boşluk olabilir
Her şeyi teker teker seçer


Bunu şu şekilde kullanırsak  /.+/g
Seçebileceği bütün karakterleri seçip bir grup halinde bize verecektir


Nokta ile başka bir kullanım görelim: 

Ahmet Mehmet Hakan Ayşe ---> örnek cümlemiz olsun

/A./g  ---> bu şekilde bir ifade şu anlama gelir 
Büyük bir A harfi seç ve ondan sonra 1 karakteri daha birlikte seç
Yani bu durumda bize sonuç olarak örnek cümlemizden şu dönecektir

AHmet AYşe

Şöyle yaparsak:  /.A./g 
Bu durumda sadece AYşe dönecektir çünkü A'dan sonra kullandığımız nokta A harfinden sonra bir hane daha seçer
Önce kullandığımız yani soldaki nokta ise sol taraftan bir hane daha seçer
Eğer sol hanede ya da sağ hanede seçim yapabileceği bir şey yoksa onu tamamen bırakır yani almaz
Mesela en baştaki Ahmet kelimesinin içindeki A harfinin sadece sağında karakter var solunda ise yok bu durumda bunu almaz. 

Nokta sayısı arttıkça da seçtiği hane artacaktır



Yine farklı bir kullanım ve aynı zamanda farklı bir flag görelim

Bu sefer örnek cümlemiz 

Max Mex Mox Mix mux olsun

/M.x/g yazdığımız zaman 
Max'i seçer
Mex'i seçer
Mox'u seçer
Mix'i seçer
mux'u seçmez 
Buradaki nokta notasyonumuz noktayı koyduğumuz yere ne gelirse gelsin fark etmez dediğimiz anlamına gelir
Bizim için önemli olan baştaki büyük M harfi ve sondaki x harfidir ortasına ne geldiği bizi ilgilendirmez
Fakat yine dikkat edersenix mux'u seçmediğini söyledim çünkü büyük küçük harf duyarlılığı burada geçerlidir

mux'u da seçmesini isteseydik yapacağımız şey şu olmalıydı

/M.x/gi 

Burada g den sonra yazdığımız i'nin tam açılımı şudur "case insensitive" yani direkt olarak "büyük/küçük harfe duyarsız" olarak çevirebiliriz





            Şimdi bir özel seçiciye bakalım

                /\w/g

                w == Word kelimesinin kısa halidir
                Bunun amacı ise verdiğimiz cümle, yazı, değer vs. artık siz nasıl tabir etmek isterseniz. Verdiğimiz bu değerdeki herhangi bir karakteri bize seçer

        Örnek cümlemiz şu olsun 

        Ben bugün javascript ile regex kullanmayı öğrendim!
        /\w/g yazdığınız zaman burada sadece 
        bugün kelimesinin içindeki ü harfi hariç ve
        bütün cümlenin içindeki ı harfi yani aslında kısacası Türkçe harfler dışında tüm harfleri tek tek seçecektir
        Ve tabii ki cümlenin sonundaki ünlem işaretiyle birlikte kelimeler arasındaki boşlukları da almayacaktır

        Türkçe harfleri de seçsin istersek

        /\w/gu yazmamız gerekir oradaki u ise unicode'u temsil eder



        w harfini büyük yazarsak bu da yukarıdaki işlemin tam tersini yapacaktır
        Yukarıda seçtiği ne varsa seçmeyecek seçmediği ne varsa seçecektir kısacası tam tersi.

        /\W/g




        /\s/g ---> sadece space yani boşlukları alır

        /\S/g ---> space olmayan yani boşluk olmayan her şeyi alır





        /\d/g   d ---> Digit kelimesini temsil eder

        43298489324932 ifadesindeki tüm rakamları tek tek seçebileceğimiz bir ifade 


        /\d+/g          olarak yazarsak da hepsini grup halinde seçecektir


        Fakat örneğin /\d+/g ifadesi 
        19.07.1992 gibi bir değerde tüm rakamları seçecektir fakat sadece yan yana olanları gruplayacaktır
        Çünkü aralardaki nokta işaretleri grupları bozuyor




        Yine yukarıdaki örneklerde olduğu gibi büyük harf işleri tersine çeviriyor.

        /\D/g ----> digit olmayan her şeyi seçecektir





        Şimdi karakter gruplama yaparak seçim yapalım mesela

        Nokta notasyonu bizim için teker teker bütün her şeyi türü fark etmeksizin seçiyordu

        /./g

        Bununla birlikte şöyle bir kullanım yaparsak

        /.{2}/g ---> her şeyi ikili gruplar halinde seçecektir
        
        Örnek ---> Bu bir örnek cümledir 1232456709

        Yani köşeli parantezler bu durumda bize aralık belirleme şansı veriyor


        Şu şekilde de bir kullanım yapılabilir
        /.{3,5}/g ----> en az 3lü olacak şekilde 5li alır

        Yani şöyle bir örnek cümlemiz olsun

        1-Bu örnek cümlenin ta kendisidir
        Burada rakam ve boşluklar dahil her şeyi 5li gruplayarak ilerler fakat en sondaki "dir" kısmını 3lü alacaktır





        Yine gruplama üzerine farklı bir örnek yapalım

        mon hon non yon ton ---> ifadesindeki kelimeleri bir arada toplayabileceğimiz bir yapı kuralım
        Bunu şu şekilde yapabiliriz
        /[mhnyt]on/g  ---> yani baş harfe m gelebilir h gelebilir n,y ve t gelebilir devamında ise "on" ile biten ifadeleri seçmiş oluyoruz


        Pekii bu [mhnyt] yazdığımız kısıma yazmamız gereken karakter sayısı çok daha fazla olsaydı mesela örnek
        [abcfkldoşleçxğüvçi.]... gibi upuzun bir ifade yazmamızı gerektiren bir durum olsaydı ne yapmamız gerekirdi? Bunun da bir kolayı var
        Buradaki köşeli parantezler sayesinde biz bir aralık belirleme imkanına sahip oluyoruz

        /[a-z]on/g  ---> baştaki değer için a'dan z'ye bütün harfleri kabul et ve son kısımda da 'on' aramasını söylüyoruz

        Peki baş harf büyük olsaydı?
        bu durumda da 
        /[a-zA-Z]on/g  ---> Bu durumda baştaki harf hem büyük hem küçük olabilir

        İşleri bir tık daha ileriye götürüp rakamları da seçmek istersek

        /[a-zA-Z0-9]on/g
    




        Şimdi diyelim ki renklerle ilgili bir çalışma yapıyoruz
        iki kelimemiz var aslında ikisi de aynı renk olmasına rağmen farklı yazılışları var
        grey ve gray
        "grey gray" bu cümle içerisinde biz ikisini de seçebilmek istiyoruz bunu nasıl yaparız

        1. yöntem a ve e'yi aynı anda opsiyonel hale getirmek

        /gra?e?y/g 


        2. yöntem

        /gr[ae]y/g ---> a olabilir e olabilir 



        3. yöntem

        /gr(a|e)y/g  ---> a ya da e 






        Şimdi farklı bir şey deneyelim

        Şöyle bir yazımız olsun
        xyxyxy

        Diyelim ki bu xy çiftlerini gruplamak istiyoruz
        /(xy){2}/g ---> bu yazdığımız yukarıdaki 3lü xy grubundan sadece ilk ikisini seçecektir




        Şimdi multiline (m) kullanımına hem de satırbaşlarında seçim yapabilmemizi sağlayan ^ sembolünün kullanımına bir bakalım

        Sokakta yalnız yürüyorum Sokak
        Sokak bunun farkında bile değil

        Şeklinde bir ifademiz olsun

        /^S/g ----> yazarsak baştaki ^ işaretinden dolayı ilk satırdaki "Sokakta" kelimesinin S sini seçecektir
        Fakat aynı satırın sonundaki Sokak kelimesinin S harfini seçmeyecek çünkü satır başlarından bahsediyoruz ^ 

        Peki alttaki satırın satır başındaki S harfini neden seçmedi 
        Çünkü multiline kullanmadık


        /^S/gm ---> m harfi ile multiline'ı da aktifleştiridk böylece iki satırın başındaki Sokak kelimelerinin S harflerini seçecek


        $ Dolar sembolü ile de tam tersi satır sonundaki değeri kontrol seçeriz





        






*/