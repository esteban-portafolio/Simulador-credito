const IVA = 1.19

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
    }
  }
}


