import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
// import Components from 'unplugin-react-components/vite'
// import {AntdResolver} from 'unplugin-react-components'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// 配置按需导入antd组件
		// Components({
		//   resolvers: [
		//     AntdResolver(),
		//   ],
		// }),
	],
	css: {
		preprocessors: {
			less: {
				javascriptEnabled: true,
			}
		}
	}
})
