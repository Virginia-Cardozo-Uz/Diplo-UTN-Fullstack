const num1 = 50;
const num2 = 120;
const num3 = 535;
const num4 = 100;
const num5 = 300;
const num6 = 2;

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5 && num1 > num6) {
    console.log(`El mayor es el ${num1}`);
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5 && num2 > num6) {
    console.log(`El mayor es el ${num2}`);
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5 && num3 > num6) {
    console.log(`El mayor es el ${num3}`);
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5 && num4 > num6) {
    console.log(`El mayor es el ${num4}`);
} else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4 && num5 > num6) {
    console.log(`El mayor es el ${num5}`);
} else {
    console.log(`El mayor es el ${num6}`);
}

// Ejercicio corregido:

// const numeros = [100, 2, 345, 567, 34, 25];
// let mayor= 0;

// for (let i = 0; i< numeros.length i++){
    
//     if(numero[i] > mayor) {
//         mayor= numeros [i]
//     }
// }

// console.log('El mayor de estos números ${numeros} es ${mayor}')