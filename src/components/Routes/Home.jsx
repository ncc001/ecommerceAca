import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import CardHome from '../home/CardHome';
import './style/home.css';

const Home = () => {
	const products = useSelector((state) => state.products);

	console.log(products);

	return (
		<div className='home'>
			<div className='home__container-card'>
				{products?.map((product) => (
					<CardHome key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Home;
