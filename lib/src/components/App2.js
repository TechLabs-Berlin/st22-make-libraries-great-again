import React from "react";
import NavBar from "../navigation/NavBar";
import LandingPage from "./LandingPage";
import Card from "./Card";

const item = {
	title: "Welcome to new and improved VOBB Website",
}

function App2() {
	return (
		<div className="container">
			<NavBar/>
			<LandingPage
				item={item}
			/>
			<Card></Card>
			<Card></Card>
		</div>
	);
}


export default App2;