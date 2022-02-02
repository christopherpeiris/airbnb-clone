import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<p>&copy; {new Date().getFullYear()} Airbnb clone! No rights reserved</p>
			<p>Privacy &#183; Terms &#183; Sitemap &#183; Company Details</p>
		</div>
	);
}

export default Footer;
