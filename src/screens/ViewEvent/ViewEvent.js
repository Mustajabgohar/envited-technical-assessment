import React, { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import Layout from "../Layout/Layout";
import EventInfo from "../../components/EventInfo/EventInfo";
import BirthdayCake from "../../assets/images/birthday-cake.png";
import "./ViewEvent.scss";

const events = [
	{
		id: 1,
		title: "18 August 6:00PM",
		subTitleJSX: (
			<p className="event-info__sub-title">
				to <strong>19 August 1:00PM</strong> UTC +10
			</p>
		),
		icon: BiCalendar,
	},
	{
		id: 2,
		title: "Street name",
		subTitleJSX: (
			<p className="event-info__sub-title">Suburb, State, Postcode</p>
		),
		icon: HiOutlineLocationMarker,
	},
];
const ViewEvent = () => {
	const renderEventInfo = () => (
		<>
			<p className="heading">Birthday Bash</p>
			<p className="sub-heading">
				Hosted by <strong>Elysia</strong>
			</p>
			<div className="mt-5">
				{events.length > 0 &&
					events.map((ele) => (
						<EventInfo
							key={ele.id}
							title={ele.title}
							SubTitleJSX={ele.subTitleJSX}
							Icon={ele.icon}
						/>
					))}
			</div>
		</>
	);

	const renderEventImage = () => (
		<img className="birthday-img" src={BirthdayCake} alt="birthday-cake" />
	);

	return (
		<div className="view-event-section">
			<Layout
				leftSectionJSX={renderEventInfo}
				rightSectionJSX={renderEventImage}
			/>
		</div>
	);
};

export default ViewEvent;
