// No le voy a mentir profe, este ejercicio no pude hacerlo. Así que el que aparece acá lo hice después del video.
const texto = document.getElementById('texto');

const contar = document.getElementById('contar');

// console.log(texto,contar)

texto.addEventListener('keyup', function(){
    contar.innerText = texto.value.length
})