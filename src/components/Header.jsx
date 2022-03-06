import React, { useState, useContext } from 'react';
import '@styles/Header.scss'
import Menu from '@components/Menu.jsx';
import MyOrder from '@containers/MyOrder.jsx';
import menu from '@icons/icon_menu.svg';
import MobileMenu from '@components/MobileMenu.jsx';
import logo from '@logos/logo_yard_sale.svg';
import cart from '@icons/icon_shopping_cart.svg';
import AppContext from '@context/AppContext';

const Header = () => {
    const [toggle, setToggle] = useState(false); //estado del menú
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const { state } = useContext(AppContext); //Conectando al contexto y usándolo

    const handleToggle = () =>{
        setToggle(!toggle);
    }

    const handleMobileMenu = () =>{
        setToggleMobileMenu(!toggleMobileMenu);
    }

    return(
        <nav>
            <img src={menu} alt="menu" className="menu" onClick={handleMobileMenu}/>        
            <div className="navbar-left">
                        <img src={logo} alt="logo" className="nav-logo"/>
                        <ul>
                            <li>
                            <a href="/">All</a>
                            </li>
                            <li>
                            <a href="/">Clothes</a>
                            </li>
                            <li>
                            <a href="/">Electronics</a>
                            </li>
                            <li>
                            <a href="/">Furnitures</a>
                            </li>
                            <li>
                            <a href="/">Toys</a>
                            </li>
                            <li>
                            <a href="/">Others</a>
                            </li>
                        </ul>
            </div>  
            <div className="navbar-right">
                    <ul>
                        <li className="navbar-email" onClick={handleToggle}>
                            platzi@example.com
                        </li>
                        <li className="navbar-shopping-cart" 
                        onClick={() => setToggleOrders(!toggleOrders)}>
                            <img src={cart} alt="shopping cart" />
                            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                        </li>
                    </ul>
            </div>
            {toggle && <Menu/>}
            {toggleMobileMenu && <MobileMenu toggle={setToggleMobileMenu}/>}
            {toggleOrders && <MyOrder/>}
        </nav>  
    );
}; 

export default Header;