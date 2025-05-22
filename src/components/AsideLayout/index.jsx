import React, {useState} from 'react';
import {Layout, Menu} from "antd";
import {useNavigate} from "react-router";
import asideItems from "../../assets/configs/asideConfig.jsx";

const {Sider} = Layout;

const AsideLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	
	let navigate = useNavigate();
	
	return (
		<Sider collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
			<div style={{
				width: '100%',
				height: '58px',
				lineHeight: '58px',
				textAlign: 'center',
				fontSize: '18px',
				color: '#fff'
			}}>
				通用后台管理系统
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