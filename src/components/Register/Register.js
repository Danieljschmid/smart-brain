import React from 'react';
import './Register.css';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email    : '',
			password : '',
			name     : ''
		};
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value});
	};

	onEmailChange = (event) => {
		this.setState({email: event.target.value});
	};

	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	};

	onSubmitSignin = () => {
		fetch('https://lit-bastion-73994.herokuapp.com/register', {
			method  : 'post',
			headers : {'Content-Type': 'application/json'},
			body    : JSON.stringify({
				email    : this.state.email,
				password : this.state.password,
				name     : this.state.name
			})
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
			});
	};

	render() {
		const {onRouteChange} = this.props;
		return (
			<div className="w-full max-w-xs center">
				<div className="form shadow-md rounded px-8 pt-6 pb-8">
					<legend className="text-white text-5xl mb-6 mx-auto">Register</legend>
					<div className="">
						<label className="block text-white text-sm font-bold mb-2" htmlFor="name">
							Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
							id="name"
							type="text"
							placeholder="name"
							onChange={this.onNameChange}
						/>
						<label className="block text-white text-sm font-bold mb-2" htmlFor="email">
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
							id="email"
							type="email"
							placeholder="email"
							onChange={this.onEmailChange}
						/>
					</div>
					<div className="mb-6">
						<label className="block text-white text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="******************"
							onChange={this.onPasswordChange}
						/>
					</div>
					<div>
						<input
							onClick={this.onSubmitSignin}
							className="text-l bg-indigo-800 duration-300 hover:bg-indigo-700 p-3 rounded text-white w-8/12 cursor-pointer"
							type="submit"
							value="Register"
						/>
					</div>
					<div className="mt-6">
						<p onClick={() => onRouteChange('signin')} className="text-white hover:text-gray-400 cursor-pointer">
							Already have an account? Sign in
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
