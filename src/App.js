import React from 'react'
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Links from './components/Links';
import Social from './components/Social';
// import Footer from './components/Footer';
// import styles from './style';

function App() {
	return (
			<div className="max-w-[1440px] m-auto">
				<TopBar />
				<Navbar />
				<Hero />
				<Links />
			{/* <Footer /> */}
			<Social />
			</div>
		);
}

export default App;
