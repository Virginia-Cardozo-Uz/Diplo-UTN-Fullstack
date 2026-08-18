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