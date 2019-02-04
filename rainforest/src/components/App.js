import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import ItemList from './ItemList'

class App extends Component {

  state = {
    items: [],
    total: 0
  }

  updateTotal = (price) => {
    this.setState({
      total: this.state.total + price
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(items => this.setState({items}))
  }

  render() {
    return (
      <div className="app">
        <Header total={this.state.total} />
        <ItemList items={this.state.items} updateTotal={this.updateTotal} />
      </div>
    );
  }
}

export default App;
