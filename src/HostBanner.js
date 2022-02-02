import { Button } from "@material-ui/core";
import React from "react";
import "./HostBanner.css";

function HostBanner() {
	return (
		<div className="hostBanner">
			<div className="hostBanner__info">
				<h1>Become a Host</h1>
				<h3>
					Earn extra income and unlock new opportunities by sharing your space.
				</h3>
				<Button>Learn more</Button>
			</div>
		</div>
	);
}

export default HostBanner;
