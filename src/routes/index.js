import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CreateEvent from "../screens/CreateEvent/CreateEvent";

import Landing from "../screens/Landing/Landing";
// import CreateEvent from "../screens/CreateEvent/CreateEvent";
import ViewEvent from "../screens/ViewEvent/ViewEvent";

const index = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" name="landingPage" component={Landing} />
				<Route exact path="/event" name="viewEventPage" component={ViewEvent} />
				<Route exact path="/create" name="createEventPage" component={CreateEvent} />
			</Switch>
		</Router>
	);
};

export default index;
