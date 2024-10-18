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



// 14.6.-En un control d’alcoholèmia necessiten un programa que els hi digui si una persona 
// pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el 
// valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir 
// si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25 
let teCarnetDeConduir = prompt("Té carnet? (Si/No)");
let valorAlcohol = parseFloat(prompt("Quin és el valor de la prova?"));
if (teCarnetDeConduir === "Si" && valorAlcohol < 0.25) {
    console.log("Sí, pot conduir");
} else {
    console.log("No, no pot conduir");
}


// 14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on 
// posa dues dades: 
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 
// 3.95 
// 2. Quin d’aquests sabors vol: 
// 1. Vainilla o Xocolata. No cal afegir res 
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final. 
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final. 
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error 
// dades mal introduïdes” 
// Si totes les dades són correctes, escriurà el preu final.
let ConusoTarrina = prompt("Vol un conus o una tarrina? (c/t)");
let Sabor = prompt("Quin sabor vol? (Vainilla,Xocolata,Turró,Menta,Oreo,Crema,Gerds o Ametlles)");
let suplement = 0;
let PreuBase;

if (ConusoTarrina == "c") {
    PreuBase = 3.45;   
} else if (ConusoTarrina == "t") {
    PreuBase = 3.95;
} else {
    console.log("Error de dades introduides");
    PreuBase = undefined
}

if (Sabor == "Vainilla" || Sabor == "Xocolata") {
    suplement = 0;
} else if (Sabor == "Turró" || Sabor == "Menta" || Sabor == "Oreo") {
    suplement = 0.5;
} else if (Sabor == "Crema" || Sabor === "Gerds" || Sabor == "Ametlles") {
    suplement = 1;
} else {
    console.log("Error dades mal introduïdes");
    suplement = undefined
}

if (PreuBase !== undefined && suplement !== undefined) {
    let preuFinal = PreuBase + suplement;
    console.log("El preu final és: " + preuFinal.toFixed(2) + "€");
}
