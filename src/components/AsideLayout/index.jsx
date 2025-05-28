import React from 'react';
import {Layout, Menu} from "antd";
import {useLocation, useNavigate} from "react-router";
import asideItems from "../../configs/asideConfig.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentTag} from "../../store/reducers/globalTagSlice.js";

const {Sider} = Layout;

const AsideLayout = () => {
	const isCollapsed = useSelector(state => state.menuFold.isCollapsed)
	const dispatch = useDispatch();
	const {pathname} = useLocation();
	const navigate = useNavigate();
	
	function handleClick(e) {
		let tag = null
		
		asideItems.forEach(item => {
			if (item.key === e.keyPath[e.keyPath.length - 1]) {
				tag = item
				if (item.key === '/others') {
					tag = item.children.find(child => child.key === e.key)
				}
			}
		})
		
		dispatch(setCurrentTag({path: tag.key, name: tag.label}))
		
		navigate(e.key)
	}
	
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
				onClick={e => handleClick(e)}
			/>
		</Sider>
	);
};

export default AsideLayout;