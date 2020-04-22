import React, { Component } from 'react';
import MenuLink from '../utills/MenuLink';
const menuarr=[
    {
        name:'Home',
        to: '/',
        exact:true
    },
    {
        name: 'About',
        to: '/about',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact:false
    },
    {
        name: 'Product',
        to: '/products',
        exact:false
    }
];


class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">

                   {this.showMenu(menuarr)}
            
                </ul>
            </nav>
        );
    }
    showMenu=(menuarr)=>{
        let result=null;
        if(menuarr.length >0){
            result=menuarr.map((menu,index)=>{
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
                )
            })
            return result;
        }
      
        
    }
}

export default Menu;