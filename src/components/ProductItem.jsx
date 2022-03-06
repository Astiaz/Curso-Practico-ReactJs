import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import ProductDetail from '@containers/ProductDetail.jsx';
import '@styles/ProductItem.scss';

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);
	
	const [toggleInfo, setToggleInfo] = useState(false);

	const handleInfo = () => {
		setToggleInfo(!toggleInfo);
	}

	const handleClick = item =>{
		addToCart(item);
	}

    return (
      <div className="ProductItem">
        <img src={product.images[0]} alt={product.title} onClick={handleInfo}/>
        <div className="product-info">
			<div>
				<p>${product.price}</p>
				<p>{product.title}</p>
			</div>
			<figure onClick={()=>handleClick(product)}>
				<img src={addToCartImage} alt=""/>
			</figure>
        </div>

		{toggleInfo && <ProductDetail product={product} setToggleInfo={setToggleInfo}/>}
      </div>
    )
}

export default ProductItem;