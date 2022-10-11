let FormContainer = document.getElementById("form")

if (Button = document.querySelector('.tempButton')) {
    Button.addEventListener("click", NewTemp)

} if (Button = document.querySelector('.imcButton')) {
    Button.addEventListener("click", NewIMC)
}


function NewTemp() {
    //borra el otro btn
    var elem = document.getElementById('IButton');
    elem.parentNode.removeChild(elem);

    let label1 = document.createElement("label")
    label1.innerHTML = 'Celcius'
    let input1 = document.createElement("input")
    input1.setAttribute("id", "celcius")
    input1.setAttribute("name", "celcius")
    input1.setAttribute("type", "number")
    input1.setAttribute("class", "input")


    let label2 = document.createElement("label")
    label2.innerHTML = 'Fahrenheit'
    let input2 = document.createElement("input")
    input2.setAttribute("id", "fahr")
    input2.setAttribute("name", "fahr")
    input2.setAttribute("type", "number")
    input2.setAttribute("class", "input")

    let label3 = document.createElement("label")
    label3.innerHTML = 'Kelvin'
    let input3 = document.createElement("input")
    input3.setAttribute("id", "kelvin")
    input3.setAttribute("name", "kelvin")
    input3.setAttribute("type", "number")
    input3.setAttribute("class", "input")

    FormContainer.appendChild(label1); FormContainer.appendChild(input1)
    FormContainer.appendChild(label2); FormContainer.appendChild(input2)
    FormContainer.appendChild(label3); FormContainer.appendChild(input3)

    let celInput = document.getElementById("celcius")
    let fahrInput = document.getElementById("fahr")
    let kelInput = document.getElementById("kelvin")
    const inputs = document.getElementsByClassName("input");

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
    
        input.addEventListener("input", function (e) {
            let value = parseFloat(e.target.value);
            
            switch (e.target.name) {
                case "celcius":
                    fahrInput.value = Math.round((value * 1.8) + 32);
                    kelInput.value = Math.round(value + 273.15);
                    break;
                case "fahr":
                    celInput.value = Math.round((value - 32) / 1.8);
                    kelInput.value = Math.round(((value - 32) / 1.8) + 273.15);
                    break;
                case "kelvin":
                    celInput.value = Math.round(value - 273.15);
                    fahrInput.value = Math.round(((value - 273.15) * 1.8) + 32);
                    break;
            }
        });
    }
}

function NewIMC() {

    //borra el otro btn
    var elem2 = document.getElementById('TButton');
    elem2.parentNode.removeChild(elem2);
    //ALTURA
    let altura = prompt("Favor de ingresar su altura en Centimetros")

    //PESO
    let peso = prompt("Favor de ingresar tu peso en KG")

    var imc, leyenda

    imc = peso / (altura * altura)
    imc = imc * 10000


    if (imc <= 20.5) {
        leyenda = "Estas delgado, debes subir "
    } else if (imc >= 25.5) {
        leyenda = "Estas pasado de peso, debes bajar"
    } else {
        leyenda = "Estas en tu peso ideal"
    }
    console.log(imc + " " + leyenda)

    let resultado = "Su IMC es de: " + Math.round(imc) + " " + leyenda;

    let label = document.createElement("label")
    label.innerHTML = resultado
    FormContainer.appendChild(label)

}



