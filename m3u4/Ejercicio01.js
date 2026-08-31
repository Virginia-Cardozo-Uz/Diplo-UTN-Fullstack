

const alumnos = [ 
{ 
nombre: 'Juan Gomez', 
nota: 7 
}, { 
nombre: 'Pedro Rodriguez', 
nota: 4 
}, { 
nombre: 'Roxana García', 
nota: 8 
}, { 
nombre: 'Luciano Lopez', 
nota: 5 
}, { 
nombre: 'Fernanda Gimenez', 
nota: 6 
}, { 
nombre: 'Florencia Martinez', 
nota: 10 
}, { 
nombre: 'Raul Sanchez', 
nota: 7 
}, { 
nombre: 'Sandra Figueroa', 
nota: 8 
} 
]; 

const aprobados = alumnos.filter(alumno => alumno.nota >= 7);

const nombresAprobados = aprobados.map(alumno => alumno.nombre);

console.log(`Los alumnos aprobados son: ${nombresAprobados}`);



// Profesora: Le dejé en los siguientes comentarios todos los intentos fallidos, me costó un montón darme cuenta que alumnos es un array y que adentro había varios objetos.

// const aprobados = alumnos.filter(alumno => alumno.nota >= 7);
// console.log(`Los alumnos aprobados son ${aprobados}`)

// console.log(alumnos);
// console.log(alumnos.nombre);

// alumnos.sort((a,b) =>{
//     if(a.nota > 7 ) {
//         return 'Aprobado'
//     }
//     if(a.nota < 7) {
//         return 'Desaprobado'
//     }
// })
// const aprobados = alumnos.nota.find(num =>num >7)
// console.log(alumnos.nota);
