import { useContext } from "react";
import AppContext from '@context/AppContext';

const Sum = () =>{
    const {state} = useContext(AppContext);

    const reducer = (accumulator, curentValue)  => accumulator + curentValue.price;
    const sum = state.cart.reduce(reducer, 0)
    return sum;
}

export default Sum;