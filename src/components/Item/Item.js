import React from 'react'
import './Item.css'

const Item = ({info}) => {
  return (
    <a href='' className='producto'>
        <img src={info.image} alt="" />
        <p>{info.title}</p>
        <p>{info.price}</p>

    </a>
  );
}

export default Item;