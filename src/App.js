import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
	const nayoks = ['Jasim', 'Razzak', 'Alamgir', 'Bappi', 'Shuvo'];
	const friends = [
		{ name: 'Karim', job: 'AmukKaj' },
		{ name: 'Rahim', job: 'TamukKaj' },
		{ name: 'Razzak', job: 'Rangoli' },
		{ name: 'Rubina', job: 'Karom' }
	];
	const products = [
		{ name: 'Photoshop', price: '$90.99' },
		{ name: 'Illustrator', price: '$30.99' },
		{ name: 'PDF Reader', price: '$6.99' },
		{ name: 'Premiere EL', price: '$259.99' },
	];
	const nayokNames = nayoks.map(nayok => nayok);
	return (
		<div className="App">
			<header className="App-header">
				<p>I am a React Person</p>
				<Counter></Counter>

				<Users></Users>
				<ul>
					{
						nayoks.map(nayok => <li>{nayok}</li>)
					}
					{
						products.map(product => <li>{product.name}</li>)
					}
					{/* <li>{nayoks[0]}</li>
					<li>{nayoks[1]}</li>
					<li>{nayoks[2]}</li>
					<li>{nayoks[3]}</li> */}
				</ul>
				{
					friends.map(friend => <Friends friends={friend}></Friends>)
				}
				{/* <Person name={nayoks[0]} job={friendsJob[0]}></Person>
				<Person name={nayoks[1]} job={friendsJob[1]}></Person>
				<Person name={nayoks[2]} job={friendsJob[2]}></Person>
				<Person name={nayoks[3]} job={friendsJob[3]}></Person> */}
				{
					products.map(product => <Product product={product}></Product>)
				}
				{
					nayoks.map(nayok => <Nayok name={nayok}></Nayok>)
				}
				{/* <Product product={products[0]}></Product>
				<Product product={products[1]}></Product>
				<Product product={products[2]}></Product> */}
				{/* <Product></Product>
				<Product></Product> */}
			</header>
		</div >
	);
}
function Product(props) {
	const { name, price } = props.product;
	const productStyle = {
		border: '1px solid gray',
		borderRadius: '5px',
		backgroundColor: 'lightgray',
		height: '250px',
		width: '250px',
		float: 'left'
	}
	// console.log(props.product.name);
	return (
		<div style={productStyle}>
			<h3>{name}</h3>
			<h5>{price}</h5>
			<button>Buy Now</button>
		</div>
	)
}
function Nayok(props) {
	const nayokStyle = {
		color: 'salmon',
	}
	return (
		<div style={nayokStyle}>
			<h1>{props.name}</h1>
		</div>
	)
}
function Counter() {
	const [count, setCount] = useState(10);
	const handleIncrease = () => {
		const newCount = count + 1;
		setCount(newCount);
	};
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={handleIncrease}>Increase</button>
			<button onMouseOver={() => setCount(count - 1)}>Decrease</button>
		</div>
	)
}
function Users() {
	const [users, setUsers] = useState([]);
	const listStyle = {
		backgroundColor: 'IndianRed',
		borderRadius: '20px',
		margin: '20px',
		padding: '15px'
	}
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setUsers(data))
	}, [])
	return (
		<div>
			<h3>Dynamic users: {users.length}</h3>
			<div>
				{
					users.map(user =>
						<div style={listStyle}>
							<h4>{user.title}</h4>
							<p>{user.body}</p>
						</div>)
				}
			</div>
		</div >
	)
}
function Friends(props) {
	// console.log(props)
	const { name, job } = props.friends;
	return (
		<div style={{ border: '2px solid gold', margin: '10px', padding: '30px' }}>
			<h3>My Friend's name: {name}</h3>
			<p>Profession: {job}</p>
		</div>
	)
}
export default App;
