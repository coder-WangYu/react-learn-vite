import React from 'react';
import {Breadcrumb, Layout, theme} from "antd";
import {Outlet} from "react-router";

const {Content} = Layout;

const ContentLayout = () => {
	const {
		token: {colorBgContainer, borderRadiusLG},
	} = theme.useToken();
	
	return (
		<Content style={{margin: '0 16px'}}>
			<Breadcrumb style={{margin: '16px 0'}} items={[{title: 'User'}, {title: 'Bill'}]}/>
			<div
				style={{
					padding: 24,
					minHeight: 360,
					height: '100%',
					background: colorBgContainer,
					borderRadius: borderRadiusLG,
				}}
			>
				<Outlet/>
			</div>
		</Content>
	);
};

export default ContentLayout;