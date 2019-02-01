import React, { Component } from 'react';
import { ProductList } from '../presentational/ProductList';
import { Header } from '../presentational/Header';
export class ProductContainer extends Component {

    state = {
        loading: true,
        products: []
    }

    componentDidMount(){

        fetch('http://localhost:3001/products')
            .then( res => res.json())
            .then( products => this.setState({ products, loading: false }))
    }


    get products(){
        return this.state.products
    }

    get total(){
        return this.state.total
    }

    get purchased(){
        return this.products.filter( product => product.purchased)
    }

    get total(){
        return this.purchased.reduce( (total, { price }) => total + price, 0)
    }

    purchaseProduct = purchasedProduct => {
        this.setState({
            products: this.state.products.map( product => {
                if(product == purchasedProduct){
                    return { ...product, purchased: true }
                } else {
                    return product
                }
            })
        })
    }

    render() {
        const { loading, products, total, purchaseProduct } = this
        if(loading) return <h1>Loading...</h1>
        return (
            <div>
                <Header total={total} />
                <ProductList products={products} onPurchase={purchaseProduct}/>
            </div>
        );
    }
}