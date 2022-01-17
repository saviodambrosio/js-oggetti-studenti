//costruzione oggetto generico relativo a studente
let studenti = [
    {
    nome: "Mario",
    cognome: "Rossi",
    eta: "18"
},
{
    nome = "Filippo",
    cognome = "Schisano",
    eta = 42
},
];

for(let i=0; i<studenti.lenght; i++ ){
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
}

//permetto all'utente di inserire i dati per poi mostrare con ciclo for

let nomeUtente = prompt("Inserisci il nome dello studente: ");
let cognomeUtente = prompt("Inserisci il cognome dello studente: ");
let etaUtente = prompt("Inserire età dello studente: ");

studenti.push({
    nome: nomeUtente,
    cognome: cognomeUtente,
    eta: etaUtente
});

for(let i = 0; i < studenti.length; i++){
    console.log(studenti[i].nome);
    console.log(studenti[i].cognome);
    console.log(studenti[i].eta);
}