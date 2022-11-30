/***************************************
******************Variables*************
****************************************/

//Operaciones
let numberraiz = document.getElementById("Numberraiz");
let numberporcent = document.getElementById("Numberporcent");
let numberpunto = document.getElementById("Numberpunto");
let numberdiv = document.getElementById("Numberdiv");
let numbermulti = document.getElementById("Numbermulti");
let numberrest = document.getElementById("Numberrest");
let numbersum = document.getElementById("Numbersum");
let numberigual = document.getElementById("Numberigual");
//Números
let number0 = document.getElementById("Number0");
let number1 = document.getElementById("Number1");
let number2 = document.getElementById("Number2");
let number3 = document.getElementById("Number3");
let number4 = document.getElementById("Number4");
let number5 = document.getElementById("Number5");
let number6 = document.getElementById("Number6");
let number7 = document.getElementById("Number7");
let number8 = document.getElementById("Number8");
let number9 = document.getElementById("Number9");

//teclas de funciones
let pantalla = document.getElementById("ContainerPantalla");
let botonEncender = document.getElementById("NumberPower");
let NumberOval1 = document.getElementById("NumberOval1");
let numberReset = document.getElementById("NumberReset");
const botonesCalculos = document.querySelectorAll(".Numbers");
let audio = document.getElementById("audio");




/********************************************************
************************Funciones************************
*********************************************************/


//Encender Calculadora
botonEncender.onclick = function () {
    encenderCalculadora();
    return;
}


//Guardar los numeros en variable
numbersum.onclick = function () {
    Number(sumar());

}

//Dar resultado de lo instroducido
numberigual.onclick = function () {
    resultado();
}

//Eliminar todo lo ingresado
numberReset.onclick = function () {
    BorrarTodo();

}

//Eliminar elemento
NumberOval1.onclick = function () {
    audio.play();
    EliminarElemento();
}

//Obtener porcentaje
numberporcent.onclick = function () {
    porcentaje();
}



//Obtener Raíz cuadrada.
numberraiz.onclick = function () {
    raiz()
}





/*Extraccion de números, aquí se itera entre todos los botones pulsados  se obtiene el valor de cada uno
Asignandolos a la pantalla de forma concatenada uno a lado del otro*/

botonesCalculos.forEach(SeleccionarBoton => {

    SeleccionarBoton.addEventListener('click', () => {
        audio.play();

        let contenidoBoton = SeleccionarBoton.value;
        let contenidoPantalla = pantalla.innerText;


        //Condicionante para no repetir teclas del mismo tipo.
        if (contenidoBoton === "." && contenidoPantalla.includes(".")
            && contenidoPantalla.charAt(contenidoPantalla.length - 1) === "." ||
            contenidoBoton === "+" && contenidoPantalla.includes("+")
            && contenidoPantalla.charAt(contenidoPantalla.length - 1) === "+" ||
            contenidoBoton === "-" && contenidoPantalla.includes("-")
            && contenidoPantalla.charAt(contenidoPantalla.length - 1) === "-" ||
            contenidoBoton === "*" && contenidoPantalla.includes("*")
            && contenidoPantalla.charAt(contenidoPantalla.length - 1) === "*"||
            contenidoBoton === "/" && contenidoPantalla.includes("/")
            && contenidoPantalla.charAt(contenidoPantalla.length - 1) === "/") return;

        //Condicionante para que se ponga un 0 al inicio si solo se presiona un operador
        if (contenidoBoton === "+" && contenidoPantalla === "" ||
            contenidoBoton === "-" && contenidoPantalla === "" ||
            contenidoBoton === "*" && contenidoPantalla === "" ||
            contenidoBoton === "/" && contenidoPantalla === "" ||
            contenidoBoton === "." && contenidoPantalla === "") pantalla.innerHTML = "0";



        //Setear si solo hay 0, no concatena y lo modifica por el valor siguiente
        if (contenidoPantalla === "0" || contenidoPantalla === 'undefined' || contenidoPantalla === 'NaN') {
            numberigual.value="0";
            pantalla.innerHTML = SeleccionarBoton.value;
            //Limitar caracteres.

        }else {
            numberigual.value="";

            //asigna y concatena    
            pantalla.innerHTML += SeleccionarBoton.value;
            //Guarda en variable lo ultimo ingresado
            contenidoPantalla = pantalla.innerText;
            console.log(contenidoPantalla + "  dato guardado")

          
    }

    });

});




/***********************************************
 * **************Creación de funciones**********
 * *********************************************/

//eventos al encender la calculadora(boton on/of)

function encenderCalculadora() {

    if (NumberOval1.disabled == true) {
        botonEncender.style.backgroundColor = "red";
        pantalla.style.backgroundColor = "white";

        pantalla.innerText = "0";

        number1.disabled = false;
        number2.disabled = false;
        number3.disabled = false;
        number4.disabled = false;
        number5.disabled = false;
        number6.disabled = false;
        number7.disabled = false;
        number8.disabled = false;
        number9.disabled = false;
        number0.disabled = false;
        NumberOval1.disabled = false;
        NumberOval1.style.visibility = 'visible';


        numberporcent.disabled = false;
        numberraiz.disabled = false;
        numbersum.disabled = false;
        numberrest.disabled = false;
        numbermulti.disabled = false;
        numberdiv.disabled = false;
        numberpunto.disabled = false;
        numberigual.disabled = false;
        numberReset.disabled = false;
        return;

    } else if (NumberOval1.disabled == false) {
        botonEncender.style.backgroundColor = "green";
        pantalla.style.backgroundColor = "rgb(0, 0, 0)";
        //Ocultar imagen
        NumberOval1.style.visibility = 'hidden';

        number1.disabled = true;
        number2.disabled = true;
        number3.disabled = true;
        number4.disabled = true;
        number5.disabled = true;
        number6.disabled = true;
        number7.disabled = true;
        number8.disabled = true;
        number9.disabled = true;
        number0.disabled = true;
        NumberOval1.disabled = true;

        numberporcent.disabled = true;
        numberraiz.disabled = true;
        numbersum.disabled = true;
        numberrest.disabled = true;
        numbermulti.disabled = true;
        numberdiv.disabled = true;
        numberpunto.disabled = true;
        numberigual.disabled = true;
        numberReset.disabled = true;
        pantalla.innerHTML = "";
    }
}


//Con esta funcion se guarda en la variable los numeros ingresados para poder operarlos
function sumar() {
    num1 = pantalla.innerText;
    return;
}


//Realizar todas las operaciones, la misma funcon eval() reconoce lo ingresado y realiza la operacion

function resultado() {

    try {

        operacion = pantalla.innerText
        //Evalua lo intrucido en el div y realiza las operaciones
        operacion = eval(operacion);
        console.log(operacion);
        pantalla.innerText = operacion;


    } catch (error) {
        if(pantalla.innerText === "NaN") pantalla.innerText = "0";
        


    }


}




function EliminarElemento() {
    elementos = pantalla.innerHTML
    elementos = elementos.slice(0, elementos.length - 1);
    pantalla.innerHTML = elementos;
}


function BorrarTodo() {
    pantalla.innerHTML = "0";
}



function raiz() {
    try {
        let contenido = pantalla.innerText;
      pantalla.innerText = Math.sqrt(contenido)
        
    } catch (error) {
        if(pantalla.innerText === "NaN" || pantalla.innerText === "")
        pantalla.innerText = "0";
        
        
        
    }
    
}




function porcentaje() {
    let contenidoPantalla = pantalla.innerText;
    let parts = [];
    let operacion = "";

    try {
        
        
        //Si se tiene el caracter - entonces entra a el if
        if (contenidoPantalla.includes("-")) {
            //Separo la ruta en partes delimitadas por el caracter /
            parts = contenidoPantalla.split("-");
            //Se asigna a una variable cada elemento del arreglo obtenido
            num1 = parts[0];
            num2 = parts[1];

            //Operacion de porcentaje resta.
            operacion = parseFloat(num1) - ((parseFloat(num1) * parseFloat(num2)) / 100);
            pantalla.innerText = operacion;
            console.log(operacion)


        } else if (contenidoPantalla.includes("+")) {

            parts = contenidoPantalla.split("+");
            //Se asigna a una variable cada elemento del arreglo obtenido
            num1 = parts[0];
            num2 = parts[1];
            //Operacion para el porcentaje suma.
            operacion = parseFloat(num1) + parseFloat(num1) * parseFloat(num2) / 100;
            pantalla.innerText = operacion;



        } else if (contenidoPantalla.includes("*")) {

            parts = contenidoPantalla.split("*");

            num1 = parts[0];
            num2 = parts[1];

            operacion = parseFloat(num1) * [parseFloat(num2 / 10) / 10];

            pantalla.innerText = operacion;
            console.log("Multiplicacion: " + operacion);



        } else if (contenidoPantalla.includes("/")) {

            parts = contenidoPantalla.split("/");
            num1 = parts[0];
            num2 = parts[1];

            operacion = parseFloat(num1) * 100 / (parseFloat(num2));


            pantalla.innerText = operacion;
            console.log("Division: " + operacion);

        }

        else {
            
            pantalla.innerText = contenidoPantalla * 10 / 1000;
        }

    } catch (error) {
    
        pantalla.innerText = "0";

    }

}







  //Poner los miles en la pantalla
            // arreglopantalla = contenidoPantalla.split('.').join();
            // arreglopantalla = arreglopantalla.split('').reverse();

            // let salida=[];
            // let aux="";

            // let paginador = Math.ceil(arreglopantalla.length/3);

        //     for (let i = 0; i < paginador; i++) {
        //         for (let j = 0; j < paginador; j++) {
        //         "1234"
        //         if(arreglopantalla[j+(i*3)]!=undefined){
        //             aux += arreglopantalla[j+(i*3)];
        //         }
                
        //     }
        //     salida.push(aux)
        //     aux='';

           

        //     console.log("Se esta guardando"+salida.join('.').split("").reverse().join(''));

        // }
