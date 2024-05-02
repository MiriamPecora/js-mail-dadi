// Dichiaro array e variabile con prompt per far inserire la mail all'user
const eMails = ["viola@colore.it", "blue@colore.it", "rosa@colore.it", "giallo@colore.it", "rosso@colore.it"];
let userMail = prompt("Inserisci qui la tua mail");

// Inizio ciclo for(). Nelle condizioni inserisco che l'indice parte da 0, che il ciclo dovrà continuare per la lunghezza dell'array e che ad ogni verifica, dovrà aumentare di uno il suo valore
for (let i = 0; i < eMails.length; i++){
    
    if (userMail == eMails[i]){
        console.log("la tua mail è presente")
        alert('La tua mail è presente');
        break;
    }
    else {
        console.log("la tua mail non è presente")
        alert('La tua mail non è presente');
        break;
    }
};