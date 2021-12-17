/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function checkPalidroma(valore){ //creare un funzione

    let l = valore.length; //lunghezza parola inserita dall'utente
    let risultato = true; // variabile per risultato settata su true

    for(let i = 0; i < l / 2; i++) { //ciclo per ogni singola lettera
        
        if(valore[i] != valore[l - 1 - i]){ //controllo a specchio della parola
            risultato = false; //riscontro negativo
        }

    }

    return risultato;
}

let parolaUtente = prompt("Inserire la parola palidroma"); //chiedere la parola
let parola = checkPalidroma(parolaUtente); //Dati utenti inseriti nella funzione
console.log(parola); //stampare un risultato



