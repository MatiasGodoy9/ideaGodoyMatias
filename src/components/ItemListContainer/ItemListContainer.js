import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Title from '../Title/Title'
import ItemList from '../ItemList/ItemList'

const productos = [
  { id: 1, image:"https://www.lafontemarket.com/productos/sandwiches-de-miga-media-docena/", title: "Sanguches de miga JyQ", price: "200$"},
  { id: 2, image:"https://www.nuria.com.ar/producto/triples-rucula-y-queso/", title: "Sanguches de miga primavera", price: "190$"},
  { id: 3, image:"https://www.tantesaraonline.com/productos/medialunas-c-jamon-y-queso-por-6/", title: "Medialunas JyQ", price: "150$"}
]

const ItemListContainer = ({texto}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
    getData.then(res => setData(res));

  }, [])
  

  const onAdd = (valor) => {
    console.log(`Compraste ${valor} unidades`)
  }

  return (
    <>
    <Title greeting={texto} />
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    <ItemList data={data}/>
    </>
  )
}

export default ItemListContainer