export function ListaProductos(props) {
    return(
        <div>
            <h2>Tu carrito de la tienda:</h2>
            <ul>
                {props.items.map(item => (

                    <li key={item.id}>
                        {item.nombre} -  ${item.precio}
                    </li>
                ))}
            </ul>
        </div>
    );


}