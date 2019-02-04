import React from 'react'
import ItemCard from './ItemCard'

const ItemList = (props) => {
  return (
    <div className="list">
      {props.items.filter(item => item.title.toLowerCase().includes(props.search.toLowerCase())).map(item => {
        return <ItemCard key={item.id} {...item} updateTotal={props.updateTotal} subtractTotal={props.subtractTotal}/>
      })}
    </div>
  )
}

export default ItemList
