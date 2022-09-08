import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';

const Header = () => {
	const navbar = useRef();

	const handleClick = () => {
		navbar.current.classList.toggle('header__nav--close');
	};

	return (
		<header className='header' id='header'>
			<div className='header-container'>
				<NavLink className='header__title' to='/'>
					<h1>
						<i className='fa-solid fa-shop'> </i>E-commerce
					</h1>
				</NavLink>

				<div className='header__toggle'>
					<i
						onClick={handleClick}
						className='fa-sharp fa-solid fa-bars header__toggle'
					></i>
				</div>
				<nav ref={navbar} className='header-nav '>
					<ul className='header-list'>
						<li className='header-item'>
							<NavLink
								className={({ isActive }) => (isActive ? 'active-link' : '')}
								to='/login'
							>
								<i className='fa-solid fa-user header-icons'></i>
							</NavLink>
						</li>

						<li className='header-item'>
							<NavLink
								className={({ isActive }) => (isActive ? 'active-link' : '')}
								to='/purcharse'
							>
								<i className='fa-solid fa-bag-shopping header-icons'></i>
							</NavLink>
						</li>
						<li className='header-item'>
							{' '}
							<NavLink
								className={({ isActive }) => (isActive ? 'active-link' : '')}
								to='/cart'
							>
								<i className='fa-solid fa-cart-shopping header-icons'></i>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
