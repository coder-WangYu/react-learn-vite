import {
	createBrowserRouter,
	redirect
} from "react-router";

import Main from "../pages/main.jsx";
import Home from "../pages/home/index";
import User from "../pages/user/index";
import Mall from "../pages/mall/index";
import Page1 from "../pages/others/page1";
import Page2 from "../pages/others/page2";

const routes = createBrowserRouter([
	{
		path: "/",
		Component: Main,
		children: [
			{
				path: "/",
				// 访问"/"时 重定向到home页
				loader: () => redirect("/home"),
			},
			{
				path: "home",
				Component: Home,
			},
			{
				path: "user",
				Component: User,
			},
			{
				path: "mall",
				Component: Mall,
			},
			{
				path: "others",
				children: [
					{
						path: "page1",
						Component: Page1,
					},
					{
						path: "page2",
						Component: Page2,
					}
				],
			}
		]
	}
])

export default routes;
