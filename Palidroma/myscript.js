/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function reverseFunction(valore){
    for(let i = 0; i < valore.lenght; i++) {
        console.log(valore);
    }
}

let parolaUtente = prompt("Inserire la parola palidroma");
console.log(parolaUtente[1]);
console.log(parolaUtente[2]);
console.log(parolaUtente[3]);
console.log(parolaUtente[4]);
console.log(parolaUtente.lenght);

let parola = reverseFunction(parolaUtente);

//chiedere la parola
//creare un funzione
//controllare con un'array se la parola al contrairo è uguale
//stampare un risultato