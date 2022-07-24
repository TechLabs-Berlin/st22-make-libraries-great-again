import React from "react";
import "./Card.css"
import bookcover1 from "./images/bookcover1.png";
import bookcover2 from "./images/bookcover2.png";
import bookcover3 from "./images/bookcover3.png";
import bookcover4 from "./images/bookcover4.png";
import bookcover5 from "./images/bookcover5.png";
import bookcover6 from "./images/bookcover6.png";

const Kaart = () => {
	return(
		<div className="kaart">
			<div className="card-h2">
				<h2>New Comers</h2>
			</div>
			<div className="row">
				<div className="card col-md-4">
					<img className="card-img-top" src={bookcover1} alt="text"/>
					<div className="card-body">
						<h5 className="card-title">Book Title</h5>
						<p className="card-text">Genre</p>
						<p className="card-text">Autor</p>
					</div>
				</div>
				<div className="card col-md-4">
					<img className="card-img-top" src={bookcover2} alt="text"/>
					<div className="card-body">
						<h5 className="card-title">Book Title</h5>
						<p className="card-text">Genre</p>
						<p className="card-text">Autor</p>
					</div>
				</div>
				<div className="card col-md-4">
					<img className="card-img-top" src={bookcover3} alt="text"/>
					<div className="card-body">
						<h5 className="card-title">Book Title</h5>
						<p className="card-text">Genre</p>
						<p className="card-text">Autor</p>
					</div>
				</div>
				<div className="card col-md-4">
					<img className="card-img-top" src={bookcover4} alt="text"/>
					<div className="card-body">
						<h5 className="card-title">Book Title</h5>
						<p className="card-text">Genre</p>
						<p className="card-text">Autor</p>
					</div>
				</div>
				<div className="card col-md-4">
					<div className="img"></div>
					<img className="card-img-top" src={bookcover5} alt="text"/>
					<div className="card-body">
						<h5 className="card-title">Book Title</h5>
						<p className="card-text">Genre</p>
						<p className="card-text">Autor</p>
					</div>
				</div>
				<div className="card col-md-4">
					<div className="img">
					<img className="card-img-top" src={bookcover6} alt="text"/>
					</div>
					<div className="card-body">
						<h5 className="card-title">Book Title</h5>
						<p className="card-text">Genre</p>
						<p className="card-text">Autor</p>
					</div>
				</div>
			</div>	
			</div>
	);
}

export default Kaart;