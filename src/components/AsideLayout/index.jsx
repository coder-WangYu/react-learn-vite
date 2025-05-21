import React, {useState} from 'react';
import {Layout, Menu} from "antd";
import {useNavigate} from "react-router";
import asideItems from "../../assets/configs/asideConfig.jsx";
import imgUrl from "../../assets/image/logo.png";

const {Sider} = Layout;

const AsideLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	
	let navigate = useNavigate();
	
	return (
		<Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
			<img
				style={{width: '100%', height: '58px'}}
				src={imgUrl}
				alt=""
			/>
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