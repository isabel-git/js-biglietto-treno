// dichiarazione variabili globali
var costo;
var costoTot;

// INPUT
  // chiedere all'utente il numero di km da percorrere
  var km = parseInt(prompt("inserisci il numero di chilometri da percorrere"));
  console.log("kilometri ",km);

  // chiedere all'utente la sua età
  var eta = parseInt(prompt("inserisci la tua età"));
  console.log("età ",eta);

// OPERAZIONI COSTO BIGLIETTO
  // costo di base
  costoBase = (0.21 * km);
  console.log("costo base",costoBase);

  // condizioni
  if (eta < 18) {
    // se l'utente è minorenne
    costoTot = costoBase - ((costoBase * 20) / 100);
    console.log("costo scontato del 20%: ",costoTot);
  } else if (eta > 65) {
    // se l'utente è over 65
    costoTot = costoBase - ((costoBase * 40) / 100);
    console.log("costo scontato del 40%: ",costoTot);
  }  else {
    // se l'utente è tra i 18 e i 65 anni
    costoTot = costoBase;
    // console.log("costo del biglietto base: ",costoTot);
  }

// OUTPUT
  // dire all'utente il costo del biglietto
  document.getElementById("dinamic").innerHTML =costoTot.toFixed(2) + "&#8364;";
