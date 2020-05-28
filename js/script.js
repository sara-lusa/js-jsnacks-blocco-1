// // JSNACKS-1
// //// L'utente inserisce due numeri in successione, con due prompt.
// //// Il software stampa il maggiore.
//
// // Utente inserisce primo numero
// var primoNumero = parseInt(prompt('Inserisci un numero.'));
//
// while ( isNaN(primoNumero) || primoNumero == '' ) {
//   primoNumero = parseInt(prompt('Il numero inserito non é valido. Inserisci un numero.'));
// }
//
// // Utente inserisce secondo numero
// var secondoNumero = parseInt(prompt('Inserisci un secondo numero.'));
//
// while ( isNaN(secondoNumero) || secondoNumero == '' ) {
//   secondoNumero = parseInt(prompt('Il numero inserito non é valido. Inserisci un secondo numero.'));
// }
//
// // Il software trova il maggiore
// var messaggio = 'I numeri sono pari.';
//
// if ( primoNumero > secondoNumero ) {
//   messaggio = 'Il numero maggiore è: ' + primoNumero;
// } else if ( secondoNumero > primoNumero ) {
//   messaggio = 'Il numero maggiore è: ' + secondoNumero;
// }
//
// // Stampa il numero maggiore
// document.getElementById('ciao').innerHTML = messaggio;


// // JSNACKS-2
// //// L’utente inserisce due parole in successione, con due prompt. Il software
// //// stampa prima la parola più corta, poi la parola più lunga.
//
// // Utente inserisce due parole
// // Prima parola
// var primaParola = prompt("Inserisci la prima parola.");
//
// while ( primaParola.length == 0 || !(isNaN(primaParola)) ) {
//   primaParola = prompt("La parola inserita non è valida. Inserisci la prima parola.");
// }
// // Seconda Parola
// var secondaParola = prompt("Inserisci la seconda parola.");
//
// while ( secondaParola.length == 0 || !(isNaN(secondaParola)) ) {
//   secondaParola = prompt("La parola inserita non è valida. Inserisci la prima parola.");
// }
//
// //Variabile del messaggio finale
// var messaggio = 'Le parole sono uguali';
//
// // Calcolo e paragono la lunghezza delle parole
// if ( primaParola.length > secondaParola.length ) {
//   messaggio = secondaParola + '-' + primaParola;
// } else if ( secondaParola.length > primaParola.length ) {
//   messaggio = primaParola  + '-' + secondaParola;;
// }
//
// // Stampo le parole in base alla lunghezza
// document.getElementById('ciao').innerHTML = messaggio;


// // JSNACKS-3
// //// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// //// Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma
// //// in due versioni, con il for e con il while.
//
// var numeri = [];
// // Chiedo un numero all'utente per 5 volte
//
// // // WHILE
// // while (numeri.length < 5) {
// //   var numero = parseInt(prompt('Inserisci un numero.'));
// //   if ( isNaN(numero) || numero == '' ) {
// //     numero = parseInt(prompt('Il numero inserito non è valido. Inserisci un numero.'));
// //   }
// //   numeri.push(numero);
// // };
// // console.log(numeri);
//
// // FOR
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt('Inserisci un numero.'));
//   while ( isNaN(numero) || numero == '' ) {
//     numero = parseInt(prompt('Il numero inserito non è valido. Inserisci un numero.'));
//   }
//   numeri.push(numero);
// };
//
// // Sommo i numeri e stampo il risultato
// var somma = 0;
// for (var i = 0; i < numeri.length; i++) {
//   somma = somma + numeri[i];
// };
//
// document.getElementById('ciao').innerHTML = 'La somma finale è: ' + somma;


// // JSNACKS-4
// //// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// //// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//
// // Lista invitati
// var lista = ['alberto', 'lara', 'camilla', 'maia', 'noa', 'alex', 'sara'];
//
// // Chiedo all'utente il nome
// // WHILE
// var nome = prompt('Come ti chiami?');
// while ( !(isNaN(nome)) || nome.length == 0 ) {
//   nome = prompt('Il nome inserito non è valido. Come ti chiami?');
// };
//
// // // DO-WHILE
// // do {
// //   var nome = prompt('Come ti chiami?');
// // } while ( !(isNaN(nome)) || nome.length == 0 )
//
// // Ipotesi invitato
// var invitato = false;
//
// // Standardizzazione grandezza nomi
// var nomeMinusciolo = nome.toLowerCase();
//
// // Ciclo di controllo nomi lista
// // WHILE
// var i = 0;
// while (i < lista.length) {
//   if ( nomeMinusciolo == lista[i] ) {
//     invitato = true;
//   }
//   i++;
// }
//
// // // FOR
// // for (var i = 0; i < lista.length; i++) {
// //   if ( nomeMinusciolo == lista[i] ) {
// //     invitato = true;
// //   }
// // }
//
// // Stampo partecipazione o non
// var partecipazione = document.getElementById('ciao');
// if (invitato) {
//   partecipazione.innerHTML = 'Puoi partecipare!';
// } else {
//   partecipazione.innerHTML = 'Mi dispiace, non puoi partecipare.';
// }


// JSNACKS-5
//// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre
//// che compongono il numero.

// Chiedo un numero all'utente
var numero = parseInt(prompt('Scrivi un numero di 4 cifre.'));
while ( !(numero >=  1000 && numero <= 9999) || isNaN(numero)  ) {
  numero = parseInt(prompt('Non valido. Scrivi un numero di 4 cifre.'));
}

// Cambiamo tipo variabile per procedere al calcolo
var stringa = numero.toString();
var singoloNumero = stringa.split('');

// Calcolo la somma
var somma = 0;

// FOR
for (var i = 0; i < singoloNumero.length; i++) {
  somma = somma + parseInt(singoloNumero[i]);
}

// // WHILE
// var i = 0;
// while ( i < singoloNumero.length ) {
//   somma = somma + parseInt(singoloNumero[i]);
//   i++;
// }

// Stampo il risulatato
document.getElementById('ciao').innerHTML = 'La somma è: ' + somma;
