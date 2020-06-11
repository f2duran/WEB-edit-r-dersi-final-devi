
function Euler(sınır) {
    var i = 0;
    var toplam = 0;
    for(i = 3; i < sınır; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
           toplam += i; 
        }
    }
    return toplam;
}
console.log(Euler(1000));
