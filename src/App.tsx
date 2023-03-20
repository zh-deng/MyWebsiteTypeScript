import React from "react";
import "./sass/style.scss";
import { Footer, Hero, Navbar } from "./containers"; 

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Footer />
		</div>
	);
}

export default App;
