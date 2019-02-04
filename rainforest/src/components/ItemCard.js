import React from 'react'

class ItemCard extends React.Component {

  state = {
    purchased: this.props.purchased
  }

  handleClick = (id) => {
    this.props.updateTotal(this.props.price)
    this.setState({
      purchased: true
    })
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({purchased: true})
    })
  }

  removeFromCart = (id) => {
    this.props.subtractTotal(this.props.price)
    this.setState({
      purchased: false
    })
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({purchased: false})
    })
  }

  render () {

    let button

    if(!this.state.purchased) {
      button = <button onClick={e => {this.handleClick(this.props.id)}} className="buy">Buy</button>
    } else {
      button = <button onClick={e => this.removeFromCart(this.props.id)} className="purchased">Already Purchased</button>
    }

    return (
      <div className="card">
        <img src={this.props.image_url} alt="Product" />
        <p>{this.props.brand} ${this.props.price}</p>
        <p>{this.props.title}</p>
        {button}
      </div>
    )
  }
}

export default ItemCard;
