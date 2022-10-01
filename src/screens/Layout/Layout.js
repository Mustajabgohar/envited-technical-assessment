import React from "react";

const Layout = ({
	leftSectionJSX: LeftSection,
	rightSectionJSX: RightSection,
}) => {
	return (
		<div className="container layout-section">
			<div className="row flex-sm-column-reverse flex-lg-row">
				<div className="col-sm-12 col-lg-6 py-3">
					<LeftSection />
				</div>
				<div className="col-sm-12 col-lg-6 py-3">
					<RightSection />
				</div>
			</div>
		</div>
	);
};

export default Layout;
