import React from 'react';
import "./index.less";
import {Button, Form, Input} from "antd";

const Login = () => {
	
	function onFinish(values) {
		console.log('Success:', values);
	}
	
	return (
		<div className="login-wrapper">
			<div className="title">系统登录</div>
			
			<Form
				className='login-form'
				labelCol={{span: 8}}
				wrapperCol={{span: 16}}
				style={{maxWidth: 600}}
				initialValues={{remember: true}}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item
					label="账号"
					name="username"
					rules={[{required: true, message: '请输入账号!'}]}
				>
					<Input/>
				</Form.Item>
				
				<Form.Item
					label="密码"
					name="password"
					rules={[{required: true, message: '请输入密码!'}]}
				>
					<Input.Password/>
				</Form.Item>
				
				<Form.Item label={null}>
					<Button type="primary" htmlType="submit">
						登录
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;