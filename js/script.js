var costoBase;
// INPUT
  // chiedere all'utente il numero di km da percorrere
  var km = parseInt(prompt("inserisci il numero di chilometri da percorrere"));
  console.log("kilometri ",km)

  // chiedere all'utente la sua età
  var eta = prompt("inserisci la tua età");
  console.log("età ",eta)

// OPERAZIONI
  // approssimazione
  costoBase = (0.21 * km).toFixed(2);
  console.log("costo base",costoBase)

  // sconti


// OUTPUT
  // dire all'utente il costo del biglietto
