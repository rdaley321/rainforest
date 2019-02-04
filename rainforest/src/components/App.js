import React, { Component } from 'react';
import '../App.css';
import Header from './Header'
import ItemList from './ItemList'
import SearchBar from './SearchBar'

class App extends Component {

  state = {
    items: [],
    total: 0,
    search: ''
  }

  updateTotal = (price) => {
    this.setState({
      total: this.state.total + price
    })
  }

  subtractTotal = (price) => {
    this.setState({
      total: this.state.total - price
    })
  }

  updateSearch = (search) => {
    this.setState({search})
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(items => this.setState({items}))
      .then(() => {
        this.state.items.forEach(item => {
          if(item.purchased) {
            this.updateTotal(item.price)
          }
        })
      })
  }

  render() {
    return (
      <div className="app">
        <Header total={this.state.total} />
        <SearchBar updateSearch={this.updateSearch}/>
        <ItemList search={this.state.search} items={this.state.items} updateTotal={this.updateTotal} subtractTotal={this.subtractTotal}/>
      </div>
    );
  }
}

export default App;
