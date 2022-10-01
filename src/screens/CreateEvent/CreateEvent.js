import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import "./CreateEvent.scss";

const CreateEvent = () => {
	const history = useHistory();
	return (
		<div className="create-event-section d-flex justify-content-center align-items-center">
			<Form className="event-form">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Event name</Form.Label>
					<Form.Control type="text" placeholder="Enter Event name" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Host name</Form.Label>
					<Form.Control type="text" placeholder="Enter Host name" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Start date and time</Form.Label>
					<Form.Control type="datetime-local" placeholder="Enter Start date and time" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>End date and time</Form.Label>
					<Form.Control type="datetime-local" placeholder="Enter End date and time" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Location</Form.Label>
					<Form.Control type="text" placeholder="Enter Location" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Event photo</Form.Label>
					<Form.Control type="file" placeholder="Enter Event photo" />
				</Form.Group>

				<Button
					variant="primary"
					type="button"
					className="next-btn"
					onClick={() => history.push("/event")}
				>
					Next
				</Button>
			</Form>
		</div>
	);
};

export default CreateEvent;
