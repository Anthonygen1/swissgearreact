import React, { Component } from 'react';
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import Product from "./product";

class Products extends Component {

    state = {
        products: [],
        productsFiltered: [],
        loading: true,
        direction: 'Assending'
    }

    componentDidMount() {
        axios.get('https://rma.swissgear.com/api/interview-endpoint')
            .then(data => {
                const items = data.data.data;
                this.setState({
                    products: items,
                    loading: false,
                    productsFiltered: items,
                });
            })
            .catch(err => console.log(err));
    };

    searchBar = (e) => {
        const value = e.target.value.toLowerCase();
        const products = this.state.products;

        const productsFiltered = products.filter(item => {
            const name = item.name.toLowerCase();
            if (name.includes(value)) {
                return true
            }
            return false
        })
        this.setState({productsFiltered: productsFiltered});
    };

    render() {
        const { loading, productsFiltered } = this.state;
        if (loading) {
            return (
                <div className='loader'>
                    <PacmanLoader color="blue"/>
                </div>
            )
        } else {
            return (
                <div className='section'>
                    <div className='searchBar'>
                        <input
                            type="text"
                            placeholder="Search For Backpack..."
                            className='searchBar-input'
                            onChange={this.searchBar}
                        />
                    </div>
                    <div className='container'>
                        {productsFiltered.map((item) => {
                            return (
                                <Product
                                    img={item.base_image}
                                    imgHover={item.hover_image}
                                    name={item.name}
                                    sku={item.sku}
                                    price={item.price}
                                    key={item.name}
                                />
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
}

export default Products;
