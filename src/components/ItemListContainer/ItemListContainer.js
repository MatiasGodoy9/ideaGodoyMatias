import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Title from '../Title/Title'

const ItemListContainer = ({texto}) => {

  const onAdd = (valor) => {
    console.log(`Compraste ${valor} unidades`)
  }

  return (
    <>
    <Title greeting={texto} />
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer