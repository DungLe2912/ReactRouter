import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom'
import ProductItem from './ProductItem';

class Products extends Component {
    
    showProducts=(products)=>{
        const {match}=this.props;
        const url=match.url;
     //   console.log(match);
        let result=null;
        if(products.length>0){
            result=products.map((product,index)=>{
                return(
               <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item" >{product.id} - {product.name} - {product.price}</li>
               </NavLink>
                )
            });
        }
        return result;
    }
    render() {
        const products=[
            {
                id:1,
                slug:'iphone',
                name:'Iphone X',
                price: 400
            },
            {
                id:2,
                slug:'xiaomi',
                name:'Xiaomi 9A',
                price: 200
            },
            {
                id:3,
                slug:'samsung',
                name:'Samsung Galaxy',
                price: 350
            },
        ];
       
        return (
            <div className="container">
                <h3>ProductsPage</h3>
                
                <div className="row">
                   
                   <ul className="list-group">
                       {this.showProducts(products)}
                       
                   </ul>
                   
                </div>
                
                {/* <div className="row">
                    <Route path="/products/:name" component={ProductItem} />
                </div> */}
                
                
            </div>
        );
    }
}

export default Products;