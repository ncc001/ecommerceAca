import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './style/formLogin.css';

const FormLogin = ({ setIsLooged }) => {
	const { register, handleSubmit, reset } = useForm();

	const submit = (data) => {
		const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login';
		axios
			.post(URL, data)
			.then((res) => {
				console.log(res.data);
				localStorage.setItem('token', res.data.data.token);
				setIsLooged(res.data.data.user);
			})
			.catch((err) => console.log(err));
		reset({
			email: '',
			password: '',
		});
	};

	return (
		<form onSubmit={handleSubmit(submit)} className='login__form'>
			<div className='login__wrapper'>
				<h2 className='login__title'>Welcome! enter your Email and Password</h2>
				<h3>You have to Log In to access to your cart</h3>
				<div className='login__testdata'>
					<h3>Test data</h3>
					<span>ncc.16@gmail.com</span> <span>12312341234556</span>
				</div>
				<div className='login__email'>
					<label className='login__label' htmlFor='email'>
						Email
					</label>
					<input
						{...register('email')}
						className='login__input'
						type='email'
						id='email'
					/>
				</div>
				<div className='login__password'>
					<label className='login__label' htmlFor='password'>
						Password
					</label>
					<input
						{...register('password')}
						className='login__input'
						type='password'
						id='password'
					/>
				</div>
				<button className='btn-login' type='submit' id='submit'>
					Login
				</button>
			</div>
		</form>
	);
};
export default FormLogin;
