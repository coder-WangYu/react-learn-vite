import React from 'react';
import {Layout} from 'antd';
import AsideLayout from "../components/AsideLayout/index.jsx";
import HeaderLayout from "../components/HeaderLayout/index.jsx";
import ContentLayout from "../components/ContentLayout/index.jsx";
import FooterLayout from "../components/FooterLayout/index.jsx";

const App = () => {
	return (
		<Layout style={{minHeight: '100vh'}}>
			<AsideLayout/>
			<Layout>
				<HeaderLayout/>
				<ContentLayout/>
				<FooterLayout/>
			</Layout>
		</Layout>
	);
};

export default App;
