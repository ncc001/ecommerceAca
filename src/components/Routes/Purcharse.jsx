import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getConfig from '../utils/getConfig';
import PurcharseCard from '../purcharse/PurcharseCard';

import './style/purcharse.css';

const Purcharse = () => {
	const [purchases, setPurchases] = useState();

	const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases';

	useEffect(() => {
		axios
			.get(URL, getConfig())
			.then((res) => setPurchases(res.data.data.purchases))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='purcharse_wrapper'>
			<div className='purcharse_container'>
				{purchases?.map((purchase) => (
					<PurcharseCard key={purchase.id} purchase={purchase} />
				))}
			</div>
		</div>
	);
};

export default Purcharse;
