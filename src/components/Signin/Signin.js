import React from 'react';
import './Signin.css';

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail    : '',
			signInPassword : ''
		};
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	};

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	};

	onSubmitSignin = () => {
		fetch('https://lit-bastion-73994.herokuapp.com/signin', {
			method  : 'post',
			headers : {'Content-Type': 'application/json'},
			body    : JSON.stringify({
				email    : this.state.signInEmail,
				password : this.state.signInPassword
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
				<div className="form shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<legend className="text-white text-5xl mb-6 mx-auto">Sign In</legend>
					<div className="mb-4">
						<label className="block text-white text-sm font-bold mb-2" htmlFor="email">
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							onChange={this.onEmailChange}
							id="email"
							type="email"
							placeholder="Email"
						/>
					</div>
					<div className="mb-6 mt-6">
						<label className="block text-white text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							onChange={this.onPasswordChange}
							className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="******************"
						/>
					</div>
					<div>
						<input
							onClick={this.onSubmitSignin}
							className="text-l bg-indigo-800 duration-300 hover:bg-indigo-700 p-3 rounded text-white w-8/12 cursor-pointer"
							type="submit"
							value="Sign in"
						/>
					</div>
					<div className="mt-6">
						<p onClick={() => onRouteChange('register')} className="text-white hover:text-gray-400 cursor-pointer">
							Register
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Signin;
