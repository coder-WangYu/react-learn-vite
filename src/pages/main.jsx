import React from 'react';
import { Outlet } from "react-router";

const Main = () => {
	return (
		<div>
			main
			<Outlet />
		</div>
	);
};

export default Main;