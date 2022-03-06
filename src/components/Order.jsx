import React from 'react';
import '@styles/Order.scss';

import arrowIcon from '@icons/flechita.svg';

const Order = () => {
    return(
        <div className="order">
            <p>
            <span>03.25.21</span>
            <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={arrowIcon} alt="arrow"/>
        </div>
    )
}

export default Order;