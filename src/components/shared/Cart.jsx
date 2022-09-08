import axios from 'axios';

import React, { useEffect, useState } from 'react';
import ProductCartInfo from '../cart/ProductCartInfo';
import getConfig from '../utils/getConfig';
import './styles/cart.css';

const Cart = () => {
	const [cartProducts, setCartProducts] = useState();
	const [totalPrice, setTotalPrice] = useState();

	const getAllProductsCart = () => {
		const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart';
		axios
			.get(URL, getConfig())
			.then((res) => {
				const products = res.data.data.cart.products;
				setCartProducts(products);
				const total = products.reduce((acc, cv) => {
					return Number(cv.price) * cv.productsInCart.quantity + acc;
				}, 0);
				setTotalPrice(total);
			})
			.catch((err) => setCartProducts());
	};

	useEffect(() => {
		getAllProductsCart();
	}, []);

	const handleCheckout = () => {
		const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases';
		const obj = {
			street: 'Green St. 1456',
			colony: 'Southwest',
			zipCode: 12345,
			city: 'USA',
			references: 'Some references',
		};
		axios
			.post(URL, obj, getConfig())
			.then((res) => {
				console.log(res.data);
				getAllProductsCart();
				setTotalPrice(0);
			})
			.catch((err) => console.log(err));
	};

	return (
		<article className='cart'>
			<header className='cart__item-header1'>
				{cartProducts?.map((product) => (
					<ProductCartInfo
						key={product.id}
						product={product}
						getAllProductsCart={getAllProductsCart}
					/>
				))}

				<footer className='cart__footer'>
					<span className='cart__total-global-label'>Total</span>
					<p className='cart__total-global-value'>$ {totalPrice}</p>
					<button onClick={handleCheckout} className='cart__btn'>
						Checkout
					</button>
				</footer>
			</header>
		</article>
	);
};

export default Cart;
