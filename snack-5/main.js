/*Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b”*/

function numbersBetween(arr, num1, num2) {
    var newArr = [];
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] > num1 && arr[i] < num2 ) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var arrNumeri = [];
var lunghezzaArrNumeri = Math.floor(Math.random() * (100 - 10)) + 10;

while ( arrNumeri.length < lunghezzaArrNumeri) {
    var numRandom = Math.floor(Math.random() * lunghezzaArrNumeri) + 1;
    if (arrNumeri.includes(numRandom) == false) {
        arrNumeri.push(numRandom);
    }
    
}

var numeroB = Math.floor(Math.random() * arrNumeri.length) + 1;
var numeroA = Math.floor(Math.random() * (numeroB - 2)) + 1;
var arrNumeriCompresi = numbersBetween(arrNumeri, numeroA, numeroB);

console.log(arrNumeri);
console.log(numeroA);
console.log(numeroB);
console.log(arrNumeriCompresi);