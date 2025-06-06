import React from 'react';
import imgUrl from "../../assets/image/logo.png";
import "./index.less";
import {
	Avatar, Button,
	Dropdown,
	Layout
} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {switchMenuFold} from "../../store/reducers/menuFoldSlice.js";
import {useDispatch, useSelector} from "react-redux";

const {Header} = Layout;

// 下拉列表配置
const items = [
	{
		key: '1',
		label: (
			<a target="_blank" rel="noopener noreferrer">
				个人中心
			</a>
		),
	},
	{
		key: '2',
		label: (
			<a target="_blank" rel="noopener noreferrer">
				退出
			</a>
		)
	}
]

const HeaderLayout = () => {
	const isCollapsed = useSelector((state) => state.menuFold.isCollapsed);
	const dispatch = useDispatch();
	
	return (
		<Header
			style={{
				padding: 0,
				textAlign: 'center',
				fontSize: '2rem',
				fontWeight: 'bold',
				color: 'white',
				display: 'flex',
				justifyContent: 'space-between',
				position: 'relative'
			}}
		>
			<Button
				shape="circle"
				style={{marginTop: '16px'}}
				icon={isCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
				onClick={() => dispatch(switchMenuFold())}
			/>
			<Dropdown menu={{items}}>
				<Avatar src={imgUrl} size={50} gap={0} style={{marginTop: '7px', marginRight: '10px'}}/>
			</Dropdown>
		</Header>
	);
};

export default HeaderLayout;
