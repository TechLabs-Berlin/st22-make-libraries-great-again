import React from "react";
import "./Navigation.css";

const NavBar = () => {

	return(
		<div className="navigation">
		<nav class="navbar navbar-expand-lg">
			<ul class="navbar-nav mr-auto">
				  <li class="nav-item">
					   <a class="nav-link" href="#">Books</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Ebooks</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Audiobooks</a>
				  </li>
				  <li class="nav-item">
					   <a class="nav-link" href="#">Magazines</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="#">Events</a>
				  </li>
			</ul>
		</nav>		
	</div>
	);
}

export default NavBar;