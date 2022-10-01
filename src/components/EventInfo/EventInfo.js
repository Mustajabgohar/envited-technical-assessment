import React from "react";
import "./EventInfo.scss";

const EventInfo = ({ title, SubTitleJSX, Icon }) => {
	return (
		<div className="d-flex align-items-center px-2 event-info">
			<div className="event-info__icon-box">
				<Icon size={26} color="#8456EC" />
			</div>
			<div className="ms-4">
				<p className="event-info__title">{title}</p>
				{SubTitleJSX}
			</div>
		</div>
	);
};

export default EventInfo;
