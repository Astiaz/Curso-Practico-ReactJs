import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import arrowIcon from '@icons/flechita.svg';
import Sum from '@hooks/useSum';
import '@styles/MyOrder.scss';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    return(
        <aside className='MyOrder'>
            <div className="title-container">
                <img src={arrowIcon} alt="arrow"/>
                <p className="title">My order</p>
            </div>
            <div className='my-order-content'>
                <div className="MyOrders-container">
                    {state.cart.map((product, index) =>{
                        return <OrderItem product={product} indexValue={index} key={`orderItem-${index}`} />
                    })}
                </div>
                <div className="order">
                    <p>
                    <span>Total</span>
                    </p>
                    <p>${Sum()}</p>
                </div>

                <button type="button" className="primary-button">
                    <Link to="/checkout" className="primary-button">Checkout</Link>
                </button>
            </div>
        </aside>
    )
}

export default MyOrder;