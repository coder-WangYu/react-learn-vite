import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main.jsx";
import Home from "../pages/home/index.jsx";

const routes = [
	{
		path: "/",
		Component: Main,
		children: [
			{
				path: "/home",
				Component: Home,
			}
		]
	}
]

export default createBrowserRouter(routes);
