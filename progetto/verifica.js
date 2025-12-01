const corsi = [
  { titolo: 'JavaScript Base', ore: 20, iscritti: 120 },
  { titolo: 'React Avanzato', ore: 35, iscritti: 80 },
  { titolo: 'Python per principianti', ore: 25, iscritti: 150 },
  { titolo: 'Machine Learning', ore: 50, iscritti: 60 },
  { titolo: 'HTML & CSS', ore: 15, iscritti: 200 },
];

// Dato l’array dei corsi crea un nuovo array contenente i corsi che hanno più di 100 iscritti e almeno 20 ore di lezioni.

const corsi_filtrati = corsi.filter((corso) => corso.ore > 20 && corso.iscritti > 100)
console.log("Corsi filtrati:", corsi_filtrati)
console.log("\n")
const recensioni = [
  { utente: 'Anna', stelle: 5, commento: 'Fantastica!' },
  { utente: 'Luca', stelle: 3, commento: 'Carina ma migliorabile' },
  { utente: 'Sara', stelle: 4, commento: 'Molto utile' },
  { utente: 'Marco', stelle: 2, commento: 'Troppi bug' },
  { utente: 'Elisa', stelle: 4, commento: 'Bella interfaccia!' },
  { utente: 'Paolo', stelle: 5, commento: 'La uso ogni giorno!' },
];

const sommaStelle = recensioni.reduce((acc, val) => acc+val.stelle,0)
const mediaStelle = sommaStelle/recensioni.length

console.log("La media delle stelle è",mediaStelle.toFixed(2))
const recensioniNegative = recensioni.filter((x) => x.stelle < mediaStelle)
console.log("Recensioni sotto la media:",recensioniNegative)
console.log("\n")
// Dato l’array delle recensioni trova la media di tutte le recensioni
// Dato l’array delle recensioni crea un array con solo le recensioni “negative” (numero di stelle inferiore alla media)

const dipendenti = [
  { nome: 'Giulia', stipendio: 1800, bonus: 200, erogato: 2, reparto: 'vendite' },
  { nome: 'Matteo', stipendio: 2200, bonus: 300,  erogato: 5, reparto: 'sviluppo' },
  { nome: 'Sara', stipendio: 1900, bonus: 150, erogato: 3, reparto: 'assistenza' },
  { nome: 'Luca', stipendio: 2500, bonus: 400, erogato: 1, reparto: 'sviluppo' },
  { nome: 'Elena', stipendio: 1600, bonus: 100, erogato: 6, reparto: 'vendite' },
];

dipendenti_mod = dipendenti.map((dipendente) => {
  return {
    nome: dipendente.nome,
    stipendio: dipendente.stipendio,
    stipendioAnnuale: dipendente.stipendio*12 + dipendente.bonus*dipendente.erogato
  }
})
console.log("Dipendenti con bonus:",dipendenti_mod)
//Dato l’array dei dipendenti crea un nuovo array di dipendenti con una nuova proprietà “stipendioAnnuale” che calcola la somma delle 12 mensilità di stipendio e tutte le volte che è stato erogato il bonus.

