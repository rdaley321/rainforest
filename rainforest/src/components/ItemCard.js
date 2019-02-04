import React from 'react'

class ItemCard extends React.Component {

  state = {
    purchased: this.props.purchased
  }

  handleClick = () => {
    if(!this.state.purchased) {
      this.props.updateTotal(this.props.price)
      this.setState({
        purchased: !this.state.purchased
      })
    }
  }

  render () {
    return (
      <div className="card">
        <img src={this.props.image_url} alt="Product" />
        <p>{this.props.brand} ${this.props.price}</p>
        <p>{this.props.title}</p>
        <button onClick={e => {
          this.handleClick();
        }} className="buy">Buy</button>
      </div>
    )
  }
}

export default ItemCard;
