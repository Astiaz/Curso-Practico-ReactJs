import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
    return(
        <div className="Menu">
            <ul>
            <li>
                <a href="/" className="title">My orders</a>
            </li>
            <li>
                <a href="/">My account</a>
            </li>
            <li>
                <Link to="/login">Sign out</Link>
            </li>
            </ul>
        </div>
    )
}

export default Menu;