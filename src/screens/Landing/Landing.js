import React from "react";
import { GiPartyPopper } from "react-icons/gi";
import { Link } from "react-router-dom";

import LandingPage from "../../assets/svgs/LandingPage";
import Layout from "../Layout/Layout";
import "./Landing.scss";

const Landing = () => {
	const renderLandingPageImage = () => (
		<div className="text-center">
			<LandingPage />
		</div>
	);

	const renderLangingPageInfo = () => (
		<div className="welcome-info w-100 d-flex flex-column justify-content-center mt-sm-5 mt-md-0 align-items-sm-center align-items-lg-end">
			<p className="welcome-info__title">Imagine if</p>
			<p className="welcome-info__title-shade">Snapchat</p>
			<p className="welcome-info__title">had events.</p>
			<p className="welcome-info__tagline">
				Easily host and share events with your friends across any social media.
			</p>

			<Link
				to="/create"
				className="welcome-info__create-btn mt-2 d-flex justify-content-center align-items-center"
			>
				<GiPartyPopper className="me-2" size={20} color="#fff020" />
				Create my event
			</Link>
		</div>
	);

	return (
		<div className="landing-section">
			<Layout
				leftSectionJSX={renderLandingPageImage}
				rightSectionJSX={renderLangingPageInfo}
			/>
		</div>
	);
};

export default Landing;
