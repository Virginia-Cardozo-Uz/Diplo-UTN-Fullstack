import { TituloPrincipal } from "@/components/tituloPrincipal";

const titulo2 = '¡Estoy aprendiendo Next!'

import { ListaProductos } from "@/components/lista";

const productos =[
  {id:1, nombre: 'Cartera Vintage', precio: 3000},
  {id:2, nombre: 'Mochila Porta Notebook', precio: 6000},
  {id:3, nombre: 'Riñonera de cuerina', precio: 2000},
  {id:4, nombre: 'Bolso deportivo', precio: 4000},
]


import { NovedadItem } from "@/components/novedadItem";

const contenidoNovedad = {
  id: "1",
  titulo: "Nueva tienda online con envíos gratuitos",
  subtitulo: "Promociones exclusivas hasta Octubre 2026",
  autor: "Virginia Cardozo Uz",
  cuerpo: "Si buscabas una tienda onlina con productos exclusivos y de calidad, ¡No busques más!"
};

import { Contador } from "@/components/contador";
import { Botonluz } from "@/components/encender-apagar";


  export default function Home() {
   return (
    <div >
      <h2>Propiedades de Next</h2>
      {/* Propiedad simple */}
        <TituloPrincipal titulo="¡Hola Profesora!" />
        <hr />
        {/* Propiedad simple y la reutilicé*/}
        <TituloPrincipal titulo={titulo2}  />
        <hr />
        <ListaProductos items={productos}  />
        <hr />
        {/* Múltiples props y destructirung */}
        <NovedadItem 
        title={contenidoNovedad.titulo}
        subtitle={contenidoNovedad.subtitulo}
        author={contenidoNovedad.autor}
        body={contenidoNovedad.cuerpo}/>
        <hr />

        <h2>Ejemplos de Estados</h2>
        <Contador/>
        <hr />


        <Botonluz/>

    </div>
  );
}
