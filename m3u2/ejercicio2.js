// 0 a 1000 metros = pie
// 1000 a 10000 metros = bicicleta
// 10000 a 30000 metros = colectivo
// 30000 a 100000 metros = auto
// +100000 = avion
const metros = 35000;

if (metros <= 1000) {
    console.log(`El transporte recomendado es a pie`);
} else if (metros <= 10000) {
    console.log(`El transporte recomendado es bicicleta`);
} else if (metros <= 30000) {
    console.log(`El transporte recomendado es colectivo`);
} else if (metros <= 100000) {
    console.log(`El transporte recomendado es auto`);
} else {
    console.log(`El transporte recomendado es avión`);
}


// Tarea corregida:

// const metros = 25000;
// let transporte = '';

// if (metros > 0 && metros <= 1000) {
//     transporte = 'pie';
//     
// } else if (metros > 1000 && metros <= 3000) {
//      transporte = 'colectivo;}
//  else if (metros > 3000 && metros <= 10000) {
//      transporte = 'auto;}
//  else if (metros > 100000) {
//      transporte = 'avión;}
// console.log('Para ${metros} metros te recomiendo ustilizar este medio: ${transporte}')
