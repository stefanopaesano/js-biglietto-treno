// Chiedi all'utente il numero di chilometri e l'età
const km = (prompt("Inserisci il numero di chilometri da percorrere:"));
const eta = (prompt("Inserisci la tua età:"));

console.log(km)
console.log(eta)


// Calcola il prezzo totale senza sconti
let prezzoTotale = km * 0.21;

// Applica gli sconti in base all'età
if (eta < 18) {
    prezzoscontato=prezzoTotale * 0.8;
}


else if (eta > 65) {
    prezzoscontato=prezzoTotale * 0.6;
    
}

console.log(prezzoscontato);

        
document.getElementById("prezzototale").innerHTML = prezzoscontato;






