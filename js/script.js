// 1 - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// 2 - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// 3 - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.





// 1 - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.

console.log('esercizio 1');


var studente = {
  nome : 'emanuele',
  cognome : 'cannone',
  eta : 31
};

for (var k in studente){
  console.log(k + ' ' + studente[k]); // se voglio vedere sia la proprietà che il valore
  // console.log(k); // se voglio vedere solo le proprietà
}


console.log('esercizio 2');


// 2 - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var studenti = [
  {
    nome : 'emanuele',
    cognome : 'cannone',
    eta : 99
  },
  {
    nome : 'davide',
    cognome : 'corsini',
    eta : 99
  },
  {
    nome : 'cristiano',
    cognome : 'tarconi',
    eta : 99
  },
  {
    nome : 'emanuele',
    cognome : 'tarconi',
    eta : 99
  },
  {
    nome : 'giacomo',
    cognome : 'biffi',
    eta : 99
  }
];


// console.log(studenti[i]); // in questo modo visualizzo ogni oggetto che si trova nell'array
for( var k in studenti){ // per ogni oggetto all'interno dell'array studenti
  console.log(studenti[k].nome + ' ' + studenti[k].cognome ); // stampa l'indice nome di studenti + l'indice cognome di studenti
}



console.log('esercizio 3');

