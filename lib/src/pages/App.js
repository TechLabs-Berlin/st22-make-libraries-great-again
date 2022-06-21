import React from "react";
import NavBar from "../navigation/NavBar";
import Intro from "./Intro";
import Card from "./Card";
import Browse from "./Browse";

const item = {
	title: "Welcome to new and improved VOBB Website",
}

const App = () => {
	return (
		<div className="container">
			<NavBar/>
			<Intro
				item={item}
			/>
			<Card/>
			<Browse/>
			<Card/>
		</div>
	);
}

export default App;