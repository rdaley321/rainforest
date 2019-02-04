import React from 'react'

const Header = (props) => {
  return (
    <div className="header">
      <h3>Rainforest TM</h3>
      <h3>Total: {props.total}</h3>
    </div>
  )
}

export default Header
