// Profe: así hice el ejercicio 1 antes de ver el video de resolución

let promedioAna;

let notaAna1 = 9;
let notaAna2 = 7;

promedioAna = (notaAna1 + notaAna2) / 2;

console.log(`El promedio de historia de la alumna Ana es ${promedioAna}.`);

if (promedioAna >= 7) {
    console.log("Ana, aprobaste la materia");
} else {
    console.log("Ana, reprobaste la materia");
}

let promedioLucas;

let notaLucas1 = 2;
let notaLucas2 = 6;

promedioLucas = (notaLucas1 + notaLucas2) / 2;

console.log(`El promedio de historia del alumno Lucas es ${promedioLucas}.`);

if (promedioLucas >= 7) {
    console.log("Lucas, aprobaste la materia");
} else {
    console.log("Lucas, reprobaste la materia");
}

// Así lo corregí después del video de resolución:

// function calcularPromedio (nota1, nota2){
//     const promedio = (nota1 + nota2) /2;
//     return promedio
// }

// const notaprimerParcial = 8;
// const notasegundoParcial = 9.5;

// console.log(notaprimerParcial, notasegundoParcial)

// const promediofinal = calcularPromedio(notaprimerParcial, notasegundoParcial);
// console.log(promediofinal)
// console.log(`La nota del primer parcial es ${notaprimerParcial}`)
// console.log(`La nota del segundo parcial es ${notasegundoParcial}`)
// console.log(`El promedio de las notas es ${promediofinal}`)