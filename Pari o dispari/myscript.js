/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

function generatoreRandom(dUtente){                     //creare una funzione per generare un numero random per il rivale "pc"

    let dPc = Math.floor(Math.random() * 5 + 1);        //creazione dato random da 1 a 5
    let somma = dUtente + dPc;                          //sommare i due numeri
    return somma;

}

function checkPariDispari(pariOdispari){                     //creare una funzione per controllare se il risultato è pari o dispari
let finale = "";
    if(pariOdispari % 2 == 0){
        finale = "pari";
    }
    else
    {
        finale = "dispari";
    }

    return finale;
}

function who(vincitore){

    let finalista = "Ha vinto il pc";
    
    if(vincitore == pariodispariUtente){
        finalista = "Ha vinto l'utente"
    }

    return finalista;

} 

let numeroUtente = parseInt(prompt("inserisci il numero da 1 a 5"));    //creare un prompt per inserire il numero
let datoUtenteFunction = generatoreRandom(numeroUtente);                //assegnazione dato utente alla function
console.log(datoUtenteFunction);                                        //Risultato somma in console

let check = checkPariDispari(datoUtenteFunction);                       //assegnazione somma alla function
console.log(check);                                                     //Risultato pari o dispari

let chihavinto = who(check);                                           //assegnazione risultato pari o dispari alla function
let pariodispariUtente = prompt("inserisci pari o dispari");            //creare un prompt per inserire pari o dispari
console.log(chihavinto);                                               //Risultato pari o dispari
