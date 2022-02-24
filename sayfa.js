//elementleri html dosyasından çektik

let isim = document.getElementById("isim")
let soyad = document.getElementById("soyad")
let neden = document.getElementById("neden")
let neler = document.getElementById("neler")
let calisma = document.getElementById("calisma")
let buton = document.getElementById("btn")
let form = document.getElementById("MyForm")


buton.addEventListener("click", domclick)

function domclick(){
    if(isim.value.length == 0 || soyad.value.length == 0 || neden.value.length == 0 || neler.value.length == 0 || calisma.value.length == 0 ){
        //kimlik bilgilerinin bos olmamasının kontrolünü yaptık
        alert("Eksik Bilgi Giremezsiniz!")
    }else{
        alert("Formunuz Başarıyla Kaydedildi")
        document.getElementById("MyForm").submit();
        
    }         
}
