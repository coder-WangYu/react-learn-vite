import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import "./assets/style/reset.css"
import store from './store'
import {Provider} from "react-redux";
import './api/mock.js'

// 兼容react19 antd：message功能
import {unstableSetRender} from 'antd';

unstableSetRender((node, container) => {
	container._reactRoot ||= createRoot(container);
	const root = container._reactRoot;
	root.render(node);
	return async () => {
		await new Promise((resolve) => setTimeout(resolve, 0));
		root.unmount();
	};
});

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</StrictMode>,
)
