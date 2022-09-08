import axios from 'axios';
import React, { useState } from 'react';
import getConfig from '../utils/getConfig';
import './productDescription.css';

const ProductDescription = ({ productInfo }) => {
	const [counter, setCounter] = useState(1);
	const handlePlus = () => setCounter(counter + 1);
	const handleMinus = () => {
		if (counter - 1 >= 1) {
			setCounter(counter - 1);
		}
	};

	const handleAddCart = () => {
		const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart';
		const obj = {
			id: productInfo.id,
			quantity: counter,
		};
		axios
			.post(URL, obj, getConfig())
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<section className='product-info'>
			<div className='col-1'>
				<header className='product__header'>
					<img className='product__img' src={productInfo?.productImgs} alt='' />
				</header>
			</div>

			<div className='col-2'>
				<h2 className='product-info__name'>{productInfo?.title}</h2>
				<p className='product-info__description'>{productInfo?.description}</p>

				<div className='product-info__body'>
					<article className='product-info__price'>
						<h3 className='product-info__price-label'>Price</h3>
						<span className='product-info__price-value'>
							$ {productInfo?.price}
						</span>
					</article>
					<article className='product-info__quantity'>
						<h3 className='product-info__quantity_label'></h3>
						<div className='product-info__quantity-products'>
							<button onClick={handleMinus}>-</button>
							<div>{counter}</div>
							<button onClick={handlePlus}>+</button>
						</div>
					</article>
				</div>
				<button className='btn-cart-add' onClick={handleAddCart}>
					{`ADD TO CART   `}
					<span>
						<i className='fa-solid fa-cart-plus'></i>
					</span>
				</button>
			</div>
		</section>
	);
};

export default ProductDescription;
