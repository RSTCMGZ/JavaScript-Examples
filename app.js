//! Örnek 1: Kullanıcının girdiği sayının tek mi çift mi olduğunu bulan javascript örneği// 
//let sayi = prompt("Bir sayı giriniz :")

// if (sayi % 2 == 0) {
//     alert("Çift sayı girdiniz");
// } else {
//     alert("Tek sayı girdiniz");
// }

//! Örnek 2: Bilgisayar tarihine göre hafta sonu mu yoksa hafta içi mi olduğunu kontrol eden javascript örneği

// let suan = new Date()
// let haftaninGunu = suan.getDay()// 0-6 arası değer döndürür. 0-> pazar
// if (haftaninGunu == 5 || haftaninGunu == 6) {
//     alert("iyi tatiller!")
// } else {
//     alert("iyi çalışmalar")
// }
//! Örnek 3: if else kullanarak haftanın günlerini yazdıran javascript örneği

// let suan = new Date()
// let haftaninGunu = suan.getDay()
// console.log(haftaninGunu);
// if (haftaninGunu == 0) {
//     alert("Günlerden pazar")
// } else if (haftaninGunu == 1) {
//     alert("Günlerden pazartesi")
// } else if (haftaninGunu == 2) {
//     alert("Günlerden salı")
// } else if (haftaninGunu == 3) {
//     alert("Günlerden çarşamba")
// } else if (haftaninGunu == 4) {
//     alert("Günlerden perşembe")
// } else if (haftaninGunu == 5) {
//     alert("Günlerden cuma")
// } else if (haftaninGunu == 6) {
//     alert("Günlerden cumartesi")
// }

//! Örnek 4: Yaşı oy kullanmaya uygun olup olmadığını yazdıran javascript örneği

// yas = Number(prompt("Yasınızı giriniz :"));

// if (yas >= 18) {
//     alert("Oy kullanabilir")
// } else {
//     alert("Oy kullanamaz")
// }

//! Örnek 5: Kullanıcının girdiği 3 sayıdan büyük olanını bulup yazdıran javascript örneği

// let sayi1 = prompt("Sayi giriniz :")
// let sayi2 = prompt("Sayi giriniz :")
// let sayi3 = prompt("Sayi giriniz :")

// if (sayi1 > sayi2 && sayi1 > sayi3) {
//     alert("Büyük sayı" + sayi1)
// } else if (sayi2 > sayi3) {
//     alert("Büyük sayı" + sayi2)
// } else {
//     alert("Büyük sayı" + sayi3)
// }

//! Örnek 6: Kullanıcının girdiği şifre ve isim doğru ise giriş başarılıdır uyarısı veren javascript örneği

let isim = prompt("Kullanıcı adı giriniz")
let sifre = Number(prompt("Sifre  giriniz"));

k = "admin";
s = 12345;

if (isim == k && sifre == s) {
    alert("Giriş başarılı")
} else if (isim != k || sifre != s) {
    alert("giriş başarısız")
}