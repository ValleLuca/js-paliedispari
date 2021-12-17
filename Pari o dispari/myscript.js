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
    if(pariOdispari % 2 == 0){                               //Controrllo pari o dispari dividento per due la somma
        finale = "pari";                                     //vincitore pari
    }
    else
    {
        finale = "dispari";                                 //vincitore dispari
    }

    return finale;
}

function who(vincitorepc, vincitoreutente){                 //controllo chi ha indovinato tra pc e utente sul pari o dispari?

    let finalista = "Ha vinto il pc";                       //dichiarazione variabile per la vincita del pc
    
    if(vincitorepc == vincitoreutente){                     //dichiarazione variabile per la vincita dell'utente
        finalista = "Ha vinto l'utente"
    }

    return finalista;

} 

//variabili e console.log per input utente e generatore dati
let numeroUtente = parseInt(prompt("inserisci il numero da 1 a 5"));    //creare un prompt per inserire il numero
let datoUtenteFunction = generatoreRandom(numeroUtente);                //assegnazione dato utente alla function
console.log(datoUtenteFunction);                                        //Risultato somma in console

//variabili e console.log per controllo risultato pari o dispari
let check = checkPariDispari(datoUtenteFunction);                       //assegnazione somma alla function
console.log(check);                                                     //Risultato pari o dispari

//variabili e console.log per controllo se l'utente ha azzeccato il risultato pari o dispari
let pariodispariUtente = prompt("inserisci pari o dispari");            //creare un prompt per inserire pari o dispari
let chihavinto = who(check, pariodispariUtente);                        //assegnazione risultato pari o dispari alla function
console.log(chihavinto);                                                //Risultato pari o dispari
