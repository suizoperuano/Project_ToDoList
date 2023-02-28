import React from "react";



const Home = () => {
	return (
	<div className="container">
		<h1>my to do's</h1>
		<ul>
			<li>
				<input type="text" placeholder="What do you need to do?"></input>
			</li>
			<li>Change Adress</li>
			<li>Go out with my friend</li>
			<li>Buy coffee</li>
			<li>Have a short nap</li>
			<li>Buy flowers</li>
		</ul>
		<div>23 tasks</div>

	</div>	
	);
};

export default Home;
