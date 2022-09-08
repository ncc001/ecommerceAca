import React from 'react';
import './style/productPurcase.css';

const ProductPurcase = ({ product }) => {
	return (
		<li className='card-purcharse__item'>
			<h4 className='card-purcharse__name'>Product: {product.title}</h4>
			<span className='card-purchase__quantity'>
				Quantity :{product.productsInCart.quantity}
			</span>
			<span className='card-purcharse__price'>Price $ {product.price}</span>
		</li>
	);
};

export default ProductPurcase;
