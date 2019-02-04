import React from 'react'
import ItemCard from './ItemCard'

const ItemList = (props) => {
  return (
    <div className="list">
      {props.items.map((item) => {
        return <ItemCard {...item} updateTotal={props.updateTotal}/>
      })}
    </div>
  )
}

export default ItemList
