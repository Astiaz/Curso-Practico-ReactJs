import React, {useContext} from "react";
import AppContext from "@context/AppContext";
import OrderItem from "@components/OrderItem";
import Sum from "@hooks/useSum";
import '@styles/Checkout.scss';

const Checkout = () =>{
    const { state } = useContext(AppContext);

    return(
        <div className="Checkout">
            <div className="Checkout-container">
                <h1 className="title">My Order</h1>
                <div className="Checkout-content">
                    <div className="order">
                        <p>
                            <span>03.25.21</span>
                            {state.cart.lenght > 0 ? <span>{state.cart.lenght}articles</span> : <span>0 articles</span> }
                            
                        </p>
                        <p>{state.cart.lenght > 0 ? <span>${Sum()}</span> : <span>$0</span> }</p>
                    </div>
                </div>
                {state.cart.map(product => {
                    <OrderItem product={product}/>    
                })}
            </div>
        </div>
    )
}

export default Checkout;