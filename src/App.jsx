import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Routes/Home';
import ProducDetail from './components/Routes/ProducDetail';
import Login from './components/Routes/Login';
import Purcharse from './components/Routes/Purcharse';
import Header from './components/shared/Header';

import Cart from './components/shared/Cart';
import ProtectedRoutes from './components/Routes/ProtectedRoutes';
import { useDispatch } from 'react-redux';
import { getAllProdutcs } from './store/slices/products.slice';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProdutcs());
	}, []);
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/product/:id' element={<ProducDetail />} />
				<Route element={<ProtectedRoutes />}>
					<Route path='/purcharse' element={<Purcharse />} />
					<Route path='/cart' element={<Cart />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;

