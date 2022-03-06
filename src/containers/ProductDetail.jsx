import React from 'react';
import closeIcon from '@icons/icon_close.png';
import ProductInfo from '@components/ProductInfo.jsx';
import '@styles/ProductDetail.scss';


const ProductDetail = ({setToggleInfo, product}) =>{
    return(
        <aside className='ProductDetail'>
            <div className="ProductDetail-close" onClick={()=>{setToggleInfo(false)}}>
                <img src={closeIcon} alt="close" style={{width:100+'%', height:100+'%'}}/>
            </div>
            <ProductInfo product={product}/>
        </aside>
    )
}

export default ProductDetail;