import React from 'react'

class ItemCard extends React.Component {

  state = {
    purchased: this.props.purchased
  }

  render () {
    return (
      <div className="card">
        <img src={this.props.image_url} alt="Product" />
        <p>{this.props.brand} ${this.props.price}</p>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default ItemCard;
