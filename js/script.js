// dichiarazione variabili globali
var costo;

// INPUT
  // chiedere all'utente il numero di km da percorrere
  var km = parseInt(prompt("inserisci il numero di chilometri da percorrere"));
  console.log("kilometri ",km);

  // chiedere all'utente la sua età
  var eta = parseInt(prompt("inserisci la tua età"));
  console.log("età ",eta);

// OPERAZIONI COSTO BIGLIETTO
  // costo di base
  costo = (0.21 * km);
  console.log("costo base",costo);

  // condizioni
  if (eta < 18) {
    // se l'utente è minorenne
    costo = costo - ((costo * 20) / 100);
    console.log("costo scontato del 20%: ",costo);
  } else if (eta > 65) {
    // se l'utente è over 65
    costo = costo - ((costo * 40) / 100);
    console.log("costo scontato del 40%: ",costo);
  }
  // else {
  //   se l'utente è tra i 18 e i 65 anni
  //   costo
  // }

// OUTPUT
  // dire all'utente il costo del biglietto
  document.getElementById("dinamic").innerHTML =costo.toFixed(2) + "&#8364;";
