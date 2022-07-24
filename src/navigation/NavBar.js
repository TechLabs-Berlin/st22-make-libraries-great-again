import React from "react";
import "./Navigation.css";


const NavBar = () => {
	return(
<nav className="navbar navbar-expand-lg">
	<div className="container-fluid">
		<div style={{marign:'10px'}}>
			<button class="btn my-3 my-sm-0" type="button">VOBB
			<i class="bi bi-book" style={{padding: '0 5px'}}></i>
			</button>
		</div>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      		<span className="navbar-toggler-icon" ></span>
    </button>

    	<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
      			<li className="nav-item">
        	  		<a className="nav-link" aria-current="page" href="Home">Home</a>
        		</li>
        		<li className="nav-item">
          			<a className="nav-link" href="Selection">Selection</a>
        		</li>
        		<li className="nav-item">
        		  <a className="nav-link" href="Events">Events</a>
        		</li>
     		</ul>
      		<form className="d-flex" role="search">
        		<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
	       		<button className="btn btn-outline-success" type="submit">Search</button>
      		</form>
    	</div>
  </div>
</nav>
);
}

export default NavBar;