import React from "react";
import book from "./index.jpg";
import "./Card.css"

const Card = () =>{
	return(
	<div class="card-deck">
		<div class="card border border-dark rounded" className="card-item">
			<img class="card-img-top" src={book}/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
				</div>
			  </div>
		<div class="card border border-dark rounded" className="card-item">
			<img class="card-img-top" src={book}/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
		<div class="card border border-dark rounded" className="card-item">
			<img class="card-img-top" src={book}/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
		<div class="card border border-dark rounded" className="card-item">
			<img class="card-img-top" src={book}/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
		<div class="card border border-dark rounded" className="card-item">
			<img class="card-img-top" src={book}/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
		<div class="card border border-dark rounded" className="card-item">
			<img class="card-img-top" src={book}/>
			<div class="card-body">
				<h5 class="card-title">Book Title</h5>
				<p class="card-text">Genre</p>
				<p class="card-text">Autor</p>
				<p class="card-text">Year Written</p>
			</div>
		</div>
	</div>
	);
}

export default Card;