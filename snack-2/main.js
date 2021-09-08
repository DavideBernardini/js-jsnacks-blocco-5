/*Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.*/

var zucchine = [
    {
        'varietà': 'zucchino1',
        'peso': 50,
        'lunghezza': 10
    },
    {
        'varietà': 'zucchino2',
        'peso': 90,
        'lunghezza': 16
    },
    {
        'varietà': 'zucchino3',
        'peso': 150,
        'lunghezza': 20
    },
    {
        'varietà': 'zucchino4',
        'peso': 30,
        'lunghezza': 12
    },
    {
        'varietà': 'zucchino5',
        'peso': 200,
        'lunghezza': 30
    },
    {
        'varietà': 'zucchino6',
        'peso': 70,
        'lunghezza': 25
    },
    {
        'varietà': 'zucchino7',
        'peso': 90,
        'lunghezza': 11
    },
    {
        'varietà': 'zucchino8',
        'peso': 170,
        'lunghezza': 19
    },
    {
        'varietà': 'zucchino9',
        'peso': 230,
        'lunghezza': 26
    },
    {
        'varietà': 'zucchino10',
        'peso': 85,
        'lunghezza': 13
    }
];

var zucchineS = [];
var zucchineL = [];
var pesoS = 0;
var pesoL = 0;

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i]['lunghezza'] < 15) {
        zucchineS.push(zucchine[i]);
        pesoS += zucchine[i]['peso'];
    } else {
        zucchineL.push(zucchine[i]);
        pesoL += zucchine[i]['peso'];
    }
}

console.log(`Il peso delle zucchine di lunghezza inferiore a 15cm è di: ${pesoS} grammi.`);
console.log(`Il peso delle zucchine di lunghezza superiore a 15cm è di: ${pesoL} grammi.`);