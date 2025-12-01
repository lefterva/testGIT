const utenti = [
  { nome: 'Anna', cognome: 'Bianchi', regione: "Friuli" },
  { nome: 'Luca', cognome: 'Verdi', regione: "Veneto" },
  { nome: 'Sara', cognome: 'Neri', regione: "Lombardia" },
  { nome: 'Marco', cognome: 'Gialli', regione: "Emilia" },
  { nome: 'Elena', cognome: 'Blu', regione: "Veneto" },
];

const result = utenti.reduce(
    (acc,{regione}) => {
        if (typeof acc[regione] === "undefined") {
            return {
                ...acc,
                [regione]: 1
            }
        }
    },
    {}
)
console.log(result)
/* data una lista di utenti e la loro relative proprietà:
Nome
Cognome
Regione

Crei un oggetto dove i campi sono i nomi delle regioni che compaiono (es. veneto. friulia etc) e il valore è il nmer di volte che compaiono all'interno degliuteti
*/