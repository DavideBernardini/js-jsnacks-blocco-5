/*Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC)*/

function reverse(word) {
    var reverseWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return reverseWord;
}

var userWord = prompt("Inserisci una parola.");
var userWordReverse = reverse(userWord);

alert('La parola girata è: ' + userWordReverse);

