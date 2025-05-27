import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	UserOutlined
} from "@ant-design/icons";
import React from "react";

function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label
	};
}

// 左边栏配置
const asideItems = [
	getItem('首页', '/home', <PieChartOutlined/>),
	getItem('商品管理', '/mall', <DesktopOutlined/>),
	getItem('用户管理', '/user', <UserOutlined/>),
	getItem('其他', '', <FileOutlined/>, [
		getItem('Tom', '/others/page1', ''),
		getItem('Bill', '/others/page2', '')
	]),
];

export default asideItems;