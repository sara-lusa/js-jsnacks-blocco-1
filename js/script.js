// JSNACKS-1
//// L'utente inserisce due numeri in successione, con due prompt.
//// Il software stampa il maggiore.

// Utente inseisce due numeri
var primoNumero = parseInt(prompt('Inserisci un numero.'));
var secondoNumero = parseInt(prompt('Inserisci un secondo numero.'));

// Validazione elemento inserito
while ( isNaN(primoNumero) || primoNumero == '' ) {
  primoNumero = parseInt(prompt('Il numero inserito non é valido. Inserisci un numero.'));
}
// console.log(primoNumero);

while ( isNaN(secondoNumero) || secondoNumero == '' ) {
  secondoNumero = parseInt(prompt('Il numero inserito non é valido. Inserisci un secondo numero.'));
}
// console.log(secondoNumero);

// Il software trova il maggiore
var numeroMaggiore;
if ( primoNumero > secondoNumero ) {
  numeroMaggiore = primoNumero;
} else if ( secondoNumero > primoNumero ) {
  numeroMaggiore = secondoNumero;
} else {
  numeroMaggiore = 'nessuno, perchè sono uguali';
}

// Stampa il numero maggiore
document.getElementById('ciao').innerHTML = 'Il numero maggiore è: ' + numeroMaggiore;


// // JSNACKS-2
// //// L’utente inserisce due parole in successione, con due prompt. Il software
// //// stampa prima la parola più corta, poi la parola più lunga.
//
// // Utente inserisce due parole
// // Prima parola
// var primaParola = prompt("Inserisci la prima parola.");
// console.log(primaParola);
//
// // Seconda Parola
// var secondaParola = prompt("Inserisci la seconda parola.");
// console.log(secondaParola);
//
// //Variabili utili
// // var parolaCorta;
// // var parolaLunga;
// var messaggio = 'Le parole sono uguali';
//
// // Stampo le parole in ordine di lunghezza
// // Calcolo la lumghezza
// if ( primaParola.length > secondaParola.length ) {
//   // parolaCorta = secondaParola;
//   // parolaLunga = primaParola;
//   messaggio = 'La parola più corta è '+ secondaParola + ', la parola più lunga è ' + primaParola;
// } else if ( secondaParola.length > primaParola.length ) {
//   // parolaCorta = primaParola;
//   // parolaLunga = secondaParola;
//   messaggio = 'La parola più corta è '+ primaParola  + ', la parola più lunga è ' + secondaParola;;
// }
//
// // Stampo le parole
// document.getElementById('ciao').innerHTML = messaggio;
//
// // JSNACKS-3
// //// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// //// Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma
// //// in due versioni, con il for e con il while.
//
// var numeri = [];
// // Chiedo un numero all'utente per 5 volte
// // WHILE
// while (numeri.length < 5) {
//   var numero = parseInt(prompt('Inserisci un numero.'));
//   numeri.push(numero);
// };
// console.log(numeri);
//
// // FOR
// // for (var i = 0; i < 5; i++) {
// //   var numero = parseInt(prompt('Inserisci un numero.'));
// //   numeri.push(numero);
// // };
// // console.log(numeri);
//
// // Sommo i numeri e stampo il risultato
// var somma = 0;
// for (var i = 0; i < numeri.length; i++) {
//   somma = somma + numeri[i];
// };
//
// document.getElementById('ciao').innerHTML = somma;
//
// // JSNACKS-4
// //// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// //// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//
// // Lista invitati
// var lista = ['Alberto', 'Lara', 'Camilla', 'Maia', 'Noa', 'Alex', 'Sara'];
//
// // Chiedo all'utente il nome
// var nome = prompt('Come ti chiami?');
//
// // Ipotesi invitato
// var invitato = false;
//
// // Ciclo di controllo nomi lista
// var i = 0;
// while (i < lista.length) {
//   if ( nome == lista[i] ) {
//     invitato = true;
//   }
//   i++;
// }
//
// // Stampo partecipazione o non
// if (invitato) {
//   alert('Puoi partecipare!');
// } else {
//   alert('Mi dispiace non puoi partecipare.')
// }
//
// // JSNACKS-5
// //// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre
// //// che compongono il numero.
//
// // Chiedo un numero all'utente
// var numero = prompt('Scrivi un numero di 4 cifre.');
// var singoloNumero = numero.split('');
// // console.log(singoloNumero);
//
// // Calcolo la somma
// var somma = 0;
// for (var i = 0; i < singoloNumero.length; i++) {
//   somma = somma + parseInt(singoloNumero[i]);
//   // console.log('Numero da aggiungere:', singoloNumero[i]);
//   // console.log('Somma aggiornata:', somma);
// }
//
// // Stampo il risulatato
// alert('La somma è: ' + somma);
