import React from "react";
import Order from '@components/Order';
import '@styles/Orders.scss';

const Orders = () =>{
    return(
        <div className="Orders">
            <div className="Orders-container">
                <h1 class="title">My orders</h1>
                <Order/>
                <Order/>
                <Order/>
            </div>
        </div>
    )
}

export default Orders;