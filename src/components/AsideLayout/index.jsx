import React from 'react';
import {Layout, Menu} from "antd";
import {useNavigate} from "react-router";
import asideItems from "../../assets/configs/asideConfig.jsx";
import {useSelector} from "react-redux";

const {Sider} = Layout;

const AsideLayout = () => {
	const isCollapsed = useSelector(state => state.menuFold.isCollapsed)
	
	let navigate = useNavigate();
	
	return (
		<Sider collapsed={isCollapsed}>
			<div style={{
				width: '100%',
				height: '58px',
				lineHeight: '58px',
				textAlign: 'center',
				fontSize: '18px',
				color: '#fff'
			}}>
				<span>{isCollapsed ? '管理系统' : '通用后台管理系统'}</span>
			</div>
			<Menu
				theme="dark"
				defaultSelectedKeys={['1']}
				mode="inline"
				items={asideItems}
				onClick={e => navigate(e.item.props.path)}
			/>
		</Sider>
	);
};

export default AsideLayout;