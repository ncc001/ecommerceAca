import axios from 'axios';
import React from 'react';
import getConfig from '../utils/getConfig';
import './style/productCart.css';

const ProductCartInfo = ({ product, getAllProductsCart, productInfo }) => {
	const handleDeleteProduct = () => {
		const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;
		axios
			.delete(URL, getConfig())
			.then(() => getAllProductsCart())
			.catch((err) => console.log(err));
	};

	return (
		<article className='cart__item-container'>
			<div className='cart__item'>
				<header className='cart__item-header'>
					<h4 className='cart__category'>{product.brand}</h4>
					<h3 className='cart__name'>{product.title}</h3>
				</header>

				<div className='card-deletequantity'>
					<i onClick={handleDeleteProduct} className='bx bx-trash btn-delete'>
						{' '}
					</i>

					<span className='cart__quantity'>
						{product.productsInCart.quantity}
					</span>
				</div>
				<footer className='cart__item-footer'>
					<span className='cart__total-label'>Total</span>
					<p className='cart__total-number'>$ {product.price}</p>
				</footer>
			</div>
		</article>
	);
};

export default ProductCartInfo;
