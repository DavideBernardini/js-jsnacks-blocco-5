/*Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.*/

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
        'lunghezza': 14
    }
];

var peso = 0;

for (var i = 0; i < zucchine.length; i++) {
    peso += zucchine[i]['peso'];
}

console.log(`Il peso di tutte le zucchine è di: ${peso} grammi.`);