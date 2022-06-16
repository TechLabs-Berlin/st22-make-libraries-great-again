import React from "react";
import book from "./index.jpg";
import "./index.css";

function App() {
	return (
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-2"></div>
						<div class="col-md-6"></div>
						<div class="col-md-2"></div>
						<div class="col-md-2"></div>
					</div>
					<div class="row">
						<div class="col-md-2"></div>
						<div class="col-md-2"></div>
						<div class="col-md-2"></div>
						<div class="col-md-2"></div>
						<div class="col-md-2"></div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-6">
							<h2 className="main-header">Welcome to new and improved VOBB Website!</h2>
								<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed consequat accumsan, 
								sapien massa quisque aliquet ipsum et. In etiam iaculis libero, porttitor quam neque sit. Quisque sed 
								commodo quam nibh augue ante sed tortor. Quam pharetra molestie quis suspendisse
								 ut. Tortor dictum urna, nisi, vitae leo varius elementum amet. 
								Nulla augue ultricies bibendum mauris ullamcorper bibendum. Feugiat enim felis,
								arcu mattis. 
								</p>
						</div>
						<div class="col-md-6">
							<div class="carousel slide" id="carousel-919142">
							<ol class="carousel-indicators">
									<li data-slide-to="0" data-target="#carousel-919142" class="active"></li>
									<li data-slide-to="1" data-target="#carousel-919142"></li>
									<li data-slide-to="2" data-target="#carousel-919142"></li>
								</ol>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img className="d-block w-100 img-carousel" alt="Carousel First" src={book}/>
								</div>
								<div class="carousel-item">
									<img className="d-block w-100 img-carousel" alt="Carousel Second" src={book}/>
								</div>
								<div class="carousel-item">
									<img class="d-block w-100 img-carousel" alt="Carousel Third" src={book}/>
								</div>
							</div> 
							<a  class="carousel-control-prev" href="#carousel-919142" data-slide="prev"><span class="carousel-control-prev-icon"></span></a> 
							<a class="carousel-control-next" href="#carousel-919142" data-slide="next"><span class="carousel-control-next-icon"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<h2>Browse by Category</h2>
						<div class="col-md-3">
							<h3 className="header-category">Fiction</h3>
							<img class="img-category" alt="Image Preview" src={book}/>
						</div>
						<div class="col-md-3">
							<h3 className="header-category">Educational</h3>
							<img class="img-category" alt="Image Preview" src={book}/>
						</div>
						<div class="col-md-3">
							<h3 className="header-category">English</h3>
							<img class="img-category" alt="Image Preview" src={book}/>
						</div>
						<div class="col-md-3">
							<h3 className="header-category">Children and Youth</h3>
							<img class="img-category" alt="Image Preview" src={book}/>
						</div>
						<button className="button-seemore">...See more</button>
					</div>
					<div class="row">
						<h2>Browse by Language</h2>
						<div class="col-md-3">
							<h3 className="header-category">German</h3>
							<img className="img-category" alt="Bootstrap Image Preview" src={book}/>
						</div>
						<div class="col-md-3">
							<h3 className="header-category">English</h3>
							<img className="img-category" alt="Bootstrap Image Preview" src={book}/>
						</div>
						<div class="col-md-3">
							<h3 className="header-category">French</h3>
							<img className="img-category" alt="Bootstrap Image Preview" src={book}/>
						</div>
						<div class="col-md-3">
							<h3 className="header-category">Turkish</h3>
							<img className="img-category" alt="Bootstrap Image Preview" src={book}/>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
					<h2>Staff Picks</h2>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<p>Book Title</p>
						<p>Genre</p>
						<p>Autor</p>
						<p>Year written</p>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<button className="button-seemore">...See more</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
					<h2>New Arrivals</h2>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<div class="col-md-2">
						<img className="picks-img" alt="Image Preview" src={book}/>
						<div className="picks-text">
							<p>Book Title</p>
							<p>Genre</p>
							<p>Autor</p>
							<p>Year written</p>
						</div>
						</div>
						<button className="button-seemore">...See more</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6"></div>
				<div class="col-md-4">
					<p>Follow us</p>
				</div>
			</div>
		</div>
	);
}


export default App;