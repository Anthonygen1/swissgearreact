import React, { Component } from 'react';

class Product extends Component {

    state = {
        imgSrc: ''
    }

    componentDidMount() {
        this.setState({ imgSrc: this.props.img })
    }

    hoverHandler = () => {
        if (this.state.imgSrc === this.props.img) {
            this.setState({ imgSrc: this.props.imgHover })
        } else {
            this.setState({ imgSrc: this.props.img })
        }
    }

    render() {
        return (
            <div className='card' key={this.props.name}>
                <img
                    src={this.state.imgSrc}
                    alt="oopps"
                    onMouseEnter={this.hoverHandler}
                    onMouseLeave={this.hoverHandler}/>
                <div className='card-section'>
                    <h2>Name</h2>
                    <h3 className='card-section-name'>{this.props.name}</h3>
                </div>
                <div className='card-section'>
                    <h2>Sku</h2>
                    <h3>{this.props.sku}</h3>
                </div>
                <div className='card-section'>
                    <h2>Price</h2>
                    <h3>{this.props.price}</h3>
                </div>
            </div>
        )
    }
}

export default Product;
