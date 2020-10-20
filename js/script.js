// dichiarazione variabili globali
var costoBase;
var scontoUno;
var scontoDue;
var costoTot;

// INPUT
  // chiedere all'utente il numero di km da percorrere
  var km = parseInt(prompt("inserisci il numero di chilometri da percorrere"));
  console.log("kilometri ",km);

  // chiedere all'utente la sua età
  var eta = prompt("inserisci la tua età");
  console.log("età ",eta);

// OPERAZIONI
  // costo di base
  costoBase = (0.21 * km);
  console.log("costo base",costoBase);

  // sconti
  scontoUno = ((costoBase * 20) / 100);
  scontoDue = ((costoBase * 40) / 100);
  console.log("sconti:",scontoUno, scontoDue);

  // condizioni
  if (eta < 18) {
    // se l'utente è minorenne
    costoTot = costoBase - scontoUno;
  } else if (eta > 65) {
    // se l'utente è over 65
    costoTot = costoBase - scontoDue;
  } else {
    // se l'utente è tra i 19 e i 64 anni
    costoTot = costoBase;
  }
  console.log("costo del biglietto ",costoTot);

// OUTPUT
  // dire all'utente il costo del biglietto
  document.getElementById("dinamic").innerHTML =costoTot.toFixed(2) + "&#8364;";
