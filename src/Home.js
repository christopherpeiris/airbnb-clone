import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import HostBanner from "./HostBanner";

function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home__section">
				<h1>Discover Experiences</h1>
				<h2>Unique activities with local experts—in person or online.</h2>
				<div className="home__sectionCard">
					<Card
						src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg"
						title="Featured collection: Wanderlust"
						description="Travel from home with Online Experiences."
					/>
					<Card
						src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg"
						title="Online Experiences"
						description="Live, interactive activities led by Hosts."
					/>
					<Card
						src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg"
						title="Experiences"
						description="Local things to do, wherever you are."
					/>
				</div>
			</div>
			<HostBanner />
			<div className="home__section">
				<h1>Inspiration for future getaways</h1>
				<div className="home__sectionCard">
					<Card
						src="https://a0.muscache.com/im/pictures/2c72d97e-8ad3-46b1-88bd-06c229c336ac.jpg"
						title="Angam Villa - an Oasis in Colombo"
						description="Enjoy everything Colombo has to offer from a tranquil villa set in the historical suburb of Kotte."
						price="$50/ night"
					/>
					<Card
						src="https://a0.muscache.com/im/pictures/miso/Hosting-21024234/original/64b434f3-d47c-4ae3-b9ef-306c030c311f.jpeg"
						title="Modern Private Studio Close to SFO SF and Beach!"
						description="Clean Modern Studio apartment with all new furnishings! Completely private studio and private entrance."
						price="$109/ night"
					/>
					<Card
						src="https://a0.muscache.com/im/pictures/90333f88-cc2d-4c7f-9c9a-c532f7309db7.jpg"
						title="Oriental Fusioned King Room with Mountain View"
						description="This room gives you the old fashion of sri lanka in a luxury way."
						price="$19/ night"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
