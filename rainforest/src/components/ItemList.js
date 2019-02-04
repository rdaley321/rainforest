import React from 'react'
import ItemCard from './ItemCard'

const ItemList = (props) => {
  return (
    <div className="list">
      {props.items.map((item) => {
        return <ItemCard {...item}/>
      })}
    </div>
  )
}

export default ItemList
