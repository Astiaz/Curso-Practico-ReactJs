import React from 'react';
import '@styles/MobileMenu.scss';
import closeIcon from '@icons/icon_close.png'

const MobileMenu = ({toggle}) => {
    return(
      <div className="MobileMenu">
        <div className="MobileMenu-container">
        	<img src={closeIcon} alt="close" onClick={()=>{toggle(false)}}/>
        </div>
        <ul>
          <li>
            <a href="/">CATEGORIES</a>
          </li>
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
            <a href="/">Other</a>
          </li>
        </ul>
    
        <ul>
          <li>
            <a href="/">My orders</a>
          </li>
          <li>
            <a href="/">My account</a>
          </li>
        </ul>
    
        <ul>
          <li>
            <a href="/" className="email">platzi@example.com</a>
          </li>
          <li>
            <a href="/" className="sign-out">Sign out</a>
          </li>
        </ul>
      </div>
    )
}

export default MobileMenu;