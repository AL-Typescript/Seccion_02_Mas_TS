// *** Let VS Const ***

let variable = 10;
variable = 11;
variable = 20;

variable++;

variable = null;
variable = undefined;


const variableFija = "";

// variableFija = ""; Error! NO puede cambiar su valor, es una constante;


// *** Template Strings ***

let nombre = "Alejandro";

let saludo = "Hola, soy " + nombre+ ", bienvenido!";

let template = `Hola, soy ${nombre}, bienvenido!`; // Interpolación de string

let multilinea = `Hola, soy ${nombre}.
    Eres muy bienvenido!.
    Hasta pronto!`;

console.log(multilinea);

// *** Union Types ***

let valor: string | number;

valor = "Valor";
// valor = 4;

console.log(valor);