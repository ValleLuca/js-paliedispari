/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function reverseFunction(valore){ //creare un funzione
    let confrontoArr = [];
    for(let i = 0; i < valore.length; i++) { //controllare con un'array se la parola al contrairo è uguale
        
        confrontoArr.push(valore[i]);

        
    }
    console.log(confrontoArr);
}

let parolaUtente = prompt("Inserire la parola palidroma"); //chiedere la parola
let parola = reverseFunction(parolaUtente);




//stampare un risultato