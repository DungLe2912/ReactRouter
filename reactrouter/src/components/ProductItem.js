import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {match}=this.props;
        const name=match.params.name;
        console.log(name);
        return (
            <div>
                <h3>Detail Product {name}</h3>
            </div>
        );
    }
}

export default ProductItem;