import React from "react";
import cover1 from "./images/subject1.png";
import cover2 from "./images/subject2.png";
import cover3 from "./images/subject3.png";
import cover4 from "./images/subject4.png";
import "./Browse.css";


const Browse = () => {
	return(
		<div>
			<div className="browse-h2">
				<h2>Browse by Subject</h2>
			</div>
			<div className= "row">				
				<div className="col-md">
					<h2 className="cl-h2">Art</h2>
					<img src={cover1} className="rounded" alt="img" />
				</div>
				<div className="col-md">
					<h2 className="cl-h2">IT</h2>
					<img src={cover2} className="rounded" alt="img" />
				</div>
				<div className="col-md">
					<h2 className="cl-h2">Kids</h2>
					<img src={cover3} className="rounded" alt="img" />
				</div>
				<div className="col-md">
					<h2 className="cl-h2">Cooking</h2>
					<img src={cover4} className="rounded" alt="img" />
				</div>
			</div>
		</div>
	);
}

export default Browse;