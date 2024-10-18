//15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número 
//de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 
let mes = prompt("Escriu un mes de l'any");
switch (mes) {
    case "1":
        console.log("Gener");
        break;
    case "2":
        console.log("Febrer");
        break;

    default:
        break;


}


// 16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el 
// text “Estem fent bucles”.
for (let i = 0; i < 10; i++) {
document.getElementById("resposta1").innerHTML = "Estem fent bucles";
}

// 17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el 
// text “Estem fent bucles”.  
let j = 1;

while (j <= 10) {
    console.log("Estem fent bucles");
    j++;
}


// 14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el 
// número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.
let NumparellSenar = prompt("Escriu qualsevol numnero");
if (NumparellSenar % 2 == 0) {
    console.log("El numero llegit es parell");
} else {
    console.log("El número llegit es senar");
}

