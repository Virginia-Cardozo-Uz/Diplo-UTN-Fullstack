// Usando la desestructuración de objetos, crea una variable para cada una de las siguientes propiedades: nombre, precio y stock.
// Muestra en la consola el nombre del producto, su precio y la cantidad de stock disponible, utilizando las variables que acabas de crear.


const producto = {  
id: 123,  
nombre: "Auriculares inalámbricos",  
precio: 120000,  
stock: 25,  
categoria: "Electrónica"  
}; 



const {nombre, precio, stock} = producto
console.log(`El producto: ${nombre}, tiene un precio de ${precio} pesos, y la cantidad disponible es ${stock} unidades en stock`);
// console.log(precio);
// console.log(stock);


