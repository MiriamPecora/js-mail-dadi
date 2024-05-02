// Dichiaro le due variabili con math.floor e math.random per generare randomicamente un numero da 1 a 6
let computerNum = Math.floor(Math.random() * 6) + 1;
let userNum = Math.floor(Math.random() * 6) + 1;

// Stampo in console i due valori per verificare
console.log(userNum, computerNum);

// Verifico cosa fare in base alla vittoria, la sconfitta o il pareggio dei due
if (userNum > computerNum){
    alert("Hai vinto!");
}
else if (userNum == computerNum) {
    alert("Pareggio!");
}
else {
    alert("Hai perso!");
}

