var tasa = 1.19

function getTasa(tasa, tipoTasa, periodo) {
  if (tipoTasa == ANUAL) {
    tasa = tasa / 12
  } else {

  tasa = tasa / 100.0
  if (periodo == DIARIO) { tasa = tasa / 30.4167 };
  if (periodo == SEMANAL) { tasa = tasa / 4.34524 };
  if (periodo == QUINCENAL) { tasa = tasa / 2 };
  if (periodo == MENSUAL) { };
  if (periodo == BIMESTRAL) { tasa = tasa * 2 };
  if (periodo == TRIMESTRAL) { tasa = tasa * 3 };
  if (periodo == CUATRIMESTRAL) { tasa = tasa * 4 };
  if (periodo == SEMESTRAL) { tasa = tasa * 6 };
  if (periodo == ANUAL) { tasa = tasa * 12 };
  return tasa;
  }


  
}

function simularPrestamo() {
  let option = prompt("*****  Bienvenido al simulador de tu Credito  *****\n" +
    "Favor de ingresar su Nombre para comenzar o ESC si deseas finalizar")

  while (option.toUpperCase() != "ESC") {
    let monto = prompt(option + " Favor de indicar monto o capital a solicitar: ")
    if (monto <= 100000) {
      alert('El monto debe ser sobre los $100.000 CLP');
      return;
    } else {
      let cuotas = prompt(option + " Favor de indicar la cantidad de cuotas(mensuales): ")
      if (cuotas < 1 || cuotas > 100) {
        alert("Ha indicado una cantidad menor que 1 o sobre 100, porfavor corregir"); return;
      } else {
        let tipoTasa = prompt(option + " Favor de indicar el tipo de TASA: \n" +
          "- ANUAL \n" +
          "- MENSUAL")
        if (tipoTasa.toUpperCase() == "ANUAL" ||tipoTasa.toUpperCase() == "MENSUAL") {
          getTasa()
        } else {

        }
      }
    }
  }
}


