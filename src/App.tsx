import React from "react";
import { About, Career, Footer, Hero, Impressum, LandingPage, Login, Navbar, Products, Registration, Services} from "./containers"; 
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<><Hero /><LandingPage /></>} />
				<Route path="/Produkte" element={<Products />} />
				<Route path="/Services" element={<Services />} />
				<Route path="/Unternehmen" element={<About />} />
				<Route path="/Karriere" element={<Career />} />
				<Route path="/Impressum" element={<Impressum />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Registrierung" element={<Registration />} />
			</Routes> 
			<Footer />
		</div>
	);
}

export default App;
