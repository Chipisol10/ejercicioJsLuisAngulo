//Tarea entregable
//Ejercicio 1
let numer1=100
let numer2=5


if (numer1 > numer2) {
    console.log("si el numero1 es mayor que el numero2")
}


//Ejercicio 2

let numero2 = 10
let numero1 = 15
if(numero2 === numero1){
    console.log("los dos numeros son iguales")
}else{
    console.log("los dos numeros son diferentes")
}

//Ejercicio 3

let numr1 = 10
let numr2 = 15
if(numr1>numr2){
    console.log("los dos numeros son iguales")
}else{
    console.log("El numr2 es el mas grande")
}


//Ejercicio 4

let num1=5
let num2=10
let num3=15

if(num1>=num2>=num3){
    alert("El numero mas pequeño num1")
}else if(num1<=num2>=num3){
    alert("El numero mas pequeño num1")
}else{
    alert("El num1 es el mas chicos")
}


//Ejercicio 5
let pers1={
    nombre:"luis",
    edad:46,
    altura:173
}

let pers2={
    nombre:"gerardo",
    edad:53,
    altura:180
}

if(pers1.altura>pers2.altura){
    alert("pers1 es la mas alta")
}else if(pers2.altura>pers1.altura){
    alert("pers2 es la mas alta")
}else{
    alert("pers1 y pers2 son de la misma altura")
}

if(pers1.edad>pers2.edad){
    alert("pers1 es la que tiene mas edad")
}else if(pers2.altura>pers1.altura){
    alert("pers2 es la que tiene mas edad")
}else{
    alert("pers1 y pers2 son de la misma edad")
}



//Ejercicio Numero 6
let primerNombre = prompt("Ingresa tu nombre, por favor")
let edadPersona = prompt("Ingresa tu edad, por favor")
let alturaPersona= prompt("Ingresa tu altura, por favor")
let examenVision = prompt ("Ingrese un numero entre el 0 y 10")

if(edadPersona>=18 && alturaPersona>150 && examenVision>=8){
    alert("tiene la edad permitidad para conducir")
}else{
    alert("usted no cumple con los requisitos para conducir")

}


//Ejercicio Numero 7

let nombre = prompt("Ingresa tu nombre:");
let tienePase = prompt("¿Tienes pase? (si/no)");
let nombrepase = "Juan";

if (nombre === nombrepase) {
    alert("¡Bienvenido " + nombre + "! Disfruta tu acceso VIP.");
} else if (tienePase === "si") {
    let tipoPase = prompt("¿Qué tipo de pase tienes? (vip/normal)");

    if (tipoPase === "vip") {
        alert("¡Bienvenido " + nombre + "! Disfruta tu acceso VIP.");
    } else if (tipoPase === "normal") {
        let usarPase = prompt("¿Deseas usar tu pase normal? (si/no)");
        if (usarPase === "si") {
            alert("¡Bienvenido " + nombre + "!");
        } else {
            alert("Gracias por tu visita. ¡Hasta pronto!");
        }
    } else {
        alert("Tipo de pase no válido. No se permite el ingreso.");
    }
} else {
    let quiereComprar = prompt("No tienes pase. ¿Deseas comprar uno? (si/no)");
    if (quiereComprar === "si") {
        let dinero = prompt("¿Cuánto dinero tienes disponible?");
        if (Number(dinero) >= 1000) {
            alert("Venta exitosa. ¡Bienvenid@ " + nombre + "!");
        } else {
            alert("Lo siento, no tienes suficiente dinero para comprar un pase.");
        }
    } else {
        alert("Gracias por tu visita. ¡Hasta pronto!");
    }
}



//Ejercicio Numero 8

let numeroIncognita = 3
let numeroIngresado =parseInt(prompt('escribe un numero del 1 al 10'))
let intento = 3

if (numeroIngresado===numeroIncognita){
    console.log('Ganaste, haz adivinado el número.');

}else if (numeroIngresado>numeroIncognita && intento!==0){
    intento--
    numeroIngresado =parseInt(prompt('ingresaste un numero mayor vuelve a intentar'))
    console.log(intento);

    if (numeroIngresado===numeroIncognita){
        console.log('Ganaste, haz adivinado el número.');

    }else if (numeroIngresado>numeroIncognita && intento!==0){
        intento--
        numeroIngresado =parseInt(prompt('ingresaste un numero mayor vuelve a intentar'))
        console.log(intento);
        if (numeroIngresado===numeroIncognita){
            console.log('Ganaste, haz adivinado el número.');
        }else if(numeroIngresado<numeroIncognita){
            intento--
            alert('has superado el numero de intentos');

        }else{
            alert('has superado el numero de intentos');
        }


    }else if(numeroIngresado<numeroIncognita && intento!==0){
            numeroIngresado= parseInt(prompt('el numero ingresado es menor, vuelve a intentarlo'))
            intento--
            console.log(intento); 

            if (numeroIngresado===numeroIncognita){
                console.log('Ganaste, haz adivinado el número.');
            }else if(numeroIngresado<numeroIncognita){
                intento--
                alert('has superado el numero de intentos') 

            }else{
                alert('has superado el numero de intentos') 
            }
        }

}else if (numeroIngresado<numeroIncognita && intento!==0){
    numeroIngresado= parseInt(prompt('el numero ingresado es menor, vuelve a intentarlo'))
    intento--
    console.log(intento); 

    if (numeroIngresado===numeroIncognita){
        console.log('Ganaste, haz adivinado el número.');

    }else if (numeroIngresado>numeroIncognita && intento!==0){
        intento--
        numeroIngresado =parseInt(prompt('ingresaste un numero mayor vuelve a intentar'))
        console.log(intento);

        if (numeroIngresado===numeroIncognita){
            console.log('Ganaste, haz adivinado el número.');
        }else if(numeroIngresado<numeroIncognita){
            intento--
            alert('has superado el numero de intentos') 

        }else{
            alert('has superado el numero de intentos') 
        }


    }else if(numeroIngresado<numeroIncognita && intento!==0){
        numeroIngresado= parseInt(prompt('el numero ingresado es menor, vuelve a intentarlo'))
        intento--
        console.log(intento); 

        if (numeroIngresado===numeroIncognita){
            console.log('Ganaste, haz adivinado el número.');
        }else if(numeroIngresado<numeroIncognita){
            intento--
            alert('has superado el numero de intentos') 

        }else{
            alert('has superado el numero de intentos') 
        }
    }

}

//Ejercicio Numero 9
let edadPersona = prompt("Ingresa tu edad, por favor:")

if (edadPersona>=0 && edadPersona<=12){
    alert("Eres un infante!!")
}else if(edadPersona>=13 && edadPersona<=18){
    alert("Eres un adolescente")
}else if(edadPersona>=19 && edadPersona<=45){
    alert("Eres un joven mayor")
}else if(edadPersona>45 && edadPersona<=100){
    alert("Eres un anciano")
}else{
    alert("En verdad es tu edad")
}

//Ejercicio 10
let jugador1 = prompt("Jugador 1, elige piedra, papel o tijeras:");
let jugador2 = prompt("Jugador 2, elige piedra, papel o tijeras:");

if (jugador1 === "piedra") {
    if (jugador2 === "piedra") {
        alert("EMPATE");
    } else if (jugador2 === "papel") {
        alert("Gana el jugador 2");
    } else if (jugador2 === "tijeras") {
        alert("Gana el jugador 1");
    } else {
        alert("Jugador 2 esta haciendo trampa");
    }
} else if (jugador1 === "papel") {
    if (jugador2 === "piedra") {
        alert("Gana el jugador 1");
    } else if (jugador2 === "papel") {
        alert("EMPATE");
    } else if (jugador2 === "tijeras") {
        alert("Gana el jugador 2");
    } else {
        alert("Jugador 2 esta haciendo trampa");
    }
} else if (jugador1 === "tijeras") {
    if (jugador2 === "piedra") {
        alert("Gana el jugador 2");
    } else if (jugador2 === "papel") {
        alert("Gana el jugador 1");
    } else if (jugador2 === "tijeras") {
        alert("EMPATE");
    } else {
        alert("Jugador 2 esta haciendo trampa");
    }
} else {
    alert("Jugador 1 hace trampa");
}

//Ejercicio 11
let color = prompt("Ingrese un color, por favor")

switch(color){
    case "blanco": 
         alert("Falta de un color")
         break;
   
     case "negro": 
         alert("Falta de un color")
         break;
    
    case "verde":
        alert("El color de la naturaleza")
        break;
    case "azul":
        alert("El color del agua")
        break;
    case "amarillo":
        alert("El color del Sol")
        break;
    case "rojo":
        alert("El color del Fuego")
        break;
    case "marron":
        alert("El color de la Tierra")
        break;
        default:
            alert("Excelente elección, no lo teniamos pensado")
}

//12 ejercicio
let numero1 = parseInt(prompt("Ingresa  un numero"))
let numero2 = parseInt(prompt("Ingresa un segundo numero"))
let operacion =prompt("Ingresa la operacion (suma, resta, multiplicacion, division")
let resultado;

switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        alert("El resultado de la suma es:" + resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        alert("El resultado de la suma es:" + resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        alert("El resultado de la suma es:" + resultado);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            alert("el resultado de la division es: " + resultado)
        } else {
            alert("ERROR: no se puede dividir por cero ")
        }
        break;
    default:
        alert("operacion no reconocida, por favor, ingresa suma, resta,multiplicacion, division")
}






// Ejercicio 13

let nom = prompt("Ingrese su nombre")
let ape = prompt("Ingrese su apellido")
let numD = prompt("Ingrese su numero de documento")
let fechN = prompt("Ingrese su fecha de nacimiento")
let lugarN = prompt("Ingrese su lugar de nacimiento")

let menDatIngres ="Datos ingresado: \n" +
"Nombre: " + nom + "\n" +
"Apellido" + ape + "\n" +
"Numero de documento" + numD + "\n" +
"Fecha de Nacimiento" + fechN + "\n" +
"Lugar de Nacimiento" + lugarN + "\n\n" +
"Los datos ingresados son correcto";

let confirmacion = confirm(menDatIngres);

if(confirmacion){
    let dni = {
        nombre: nom,
        apellido: ape,
        numeroDeDocumento: numD,
        fechaDeNacimiento: fechN,
        lugarDeNacimiento: lugarN,
    }
    console.table(dni);
    console.log("Felicidades su Registro fue exitoso")
}else{
    alert("Vuelva intertarlo en 1 mes")
}
