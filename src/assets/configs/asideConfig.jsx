import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	UserOutlined
} from "@ant-design/icons";
import React from "react";

function getItem(label, key, icon, path, children) {
	return {
		key,
		icon,
		children,
		label,
		path
	};
}

// 左边栏配置
const asideItems = [
	getItem('首页', '1', <PieChartOutlined/>, '/home'),
	getItem('商品管理', '2', <DesktopOutlined/>, '/mall'),
	getItem('用户管理', '3', <UserOutlined/>, '/user'),
	getItem('其他', '4', <FileOutlined/>, '', [
		getItem('Tom', '5', '', '/others/page1'),
		getItem('Bill', '6', '', '/others/page2'),
	]),
];

export default asideItems;