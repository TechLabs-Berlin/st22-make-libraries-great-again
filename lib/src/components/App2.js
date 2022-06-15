import React from "react";
import NavBar from "../navigation/NavBar";
import LandingPage from "./LandingPage";

const item = {
	title: "Welcome to new and improved VOBB Website",
}

function App2() {
	return (
		<div>
			<NavBar/>
			<LandingPage
				item={item}
			/>
		</div>
	);
}


export default App2;