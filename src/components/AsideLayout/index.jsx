import React from 'react';
import {Layout, Menu} from "antd";
import {useLocation, useNavigate} from "react-router";
import asideItems from "../../configs/asideConfig.jsx";
import {useSelector} from "react-redux";

const {Sider} = Layout;

const AsideLayout = () => {
	const isCollapsed = useSelector(state => state.menuFold.isCollapsed)
	const {pathname} = useLocation();
	
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
				selectedKeys={[pathname]}
				mode="inline"
				items={asideItems}
				onClick={e => navigate(e.key)}
			/>
		</Sider>
	);
};

export default AsideLayout;