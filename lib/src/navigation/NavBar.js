import React from "react";
import "./Navigation.css";

const NavBar = () => {

	return(
	<div className="navigation">
		<nav class="navbar navbar-expand-lg">
			<ul class="navbar-nav mr-auto">
				  <li class="nav-item">
					   <a class="nav-link">Books</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link">Ebooks</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link">Audiobooks</a>
				  </li>
				  <li class="nav-item">
					   <a class="nav-link">Magazines</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link">Events</a>
				  </li>
			</ul>
		</nav>
	</div>
	);
}

export default NavBar;