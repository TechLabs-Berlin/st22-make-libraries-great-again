import React from "react";
import cover1 from "./images/subject1.png";
import cover2 from "./images/subject2.png";
import cover3 from "./images/subject3.png";
import cover4 from "./images/subject4.png";

const Browse = () => {
	return(
		<div class= "d-flex justify-content-lg-between">
		<img src={cover1} class="rounded" alt="img" style={{width: "274px", height: "225px"}}/>
		<img src={cover2} class="rounded" alt="img" style={{width: "274px", height: "225px"}}/>
		<img src={cover3} class="rounded" alt="img" style={{width: "274px", height: "225px"}}/>
		<img src={cover4} class="rounded" alt="img" style={{width: "274px", height: "225px"}}/>
		</div>
	);
}

export default Browse;