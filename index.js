//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const km = prompt("Quanti chilometri vuoi percorrere?");
const age = prompt("Qual è la tua età?");
let price;

if (isNaN(km) || (km == 0) || isNaN(age) || (age == 0)) {
    alert("Inserisci un numero maggiore di 0 sia per il chilometraggio che per l'età")
} else if (age <=17) {
    price = ((km * 0.21) - [(km * 0.21) / 100 * 20])
} else if (age >=65) {
    price = ((km * 0.21) - [(km * 0.21) / 100 * 40])
} else {
    price = (km * 0.21)
};

const roundedPrice = alert(`€ ${price.toFixed(2).replace(".", ",")}`);