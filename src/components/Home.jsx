import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
		<section>
			<hr />
	<div style={{backgroundImage:`url("https://images.unsplash.com/photo-1519143468229-4cde34927323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`}}>
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
			<h1 className="text-4xl text-yellow-400 font-bold leading-none sm:text-6xl xl:max-w-3xl">The Most Luxurious Hotel in Bangladesh.</h1>
			<p className="mt-6 mb-8 text-md sm:mb-12 xl:max-w-3xl text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Ea accusamus corrupti soluta aliquam, non inventore ad ab veniam atque asperiores?</p>
			<div className="flex flex-wrap justify-center">
				<Link to='/book'><button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded-lg text-yellow-500 border border-yellow-500 hover:bg-black w-40">Let's Book</button></Link>
				<button type="button" className="px-8 py-3 m-2 text-lg text-yellow-500 border border-yellow-500 hover:bg-black rounded-lg w-40">Learn more</button>
			</div>
		</div>
	</div>
	<img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="w-5/6 h-96 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-36 bg-gray-500 border border-1 border-yellow-400 shadow-xl" />
</section>
    );
};

export default Home;