import React from 'react';
import ProductPurcase from './ProductPurcase';
import './style/purchasecards.css';

const PurcharseCard = ({ purchase }) => {
	return (
		<article className='card-purcharse'>
			<h3 className='card-purcharse__date'>{purchase.createdAt}</h3>
			<ul className='card-purcharse__body'>
				{purchase.cart.products.map((product) => (
					<ProductPurcase key={product.id} product={product} />
				))}
			</ul>
		</article>
	);
};

export default PurcharseCard;
