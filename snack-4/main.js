/* Scrivi una funzione che fonda due array (aventi lo stesso numero di
elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/

function arraysAlternMerge(array1, array2) {
    var arrMerged = [];
    for (var i = 0; i < array1.length; i++) {
        arrMerged.push(array1[i]);
        arrMerged.push(array2[i]);
    }
    return arrMerged;
}

var colori = ['rosso', 'verde', 'giallo', 'blu'];
var frutta = ['fragole', 'mele', 'banane', 'mirtilli']
var coloriFrutta = arraysAlternMerge(colori, frutta);
console.log(colori);
console.log(frutta);
console.log(coloriFrutta);