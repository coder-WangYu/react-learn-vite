import React, {useEffect, useState} from 'react';
import {getUserData} from "../../api/user";
import {Button, Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import './index.less'
import {userTalbeColumn} from "../../configs/tableConfig.jsx";

const User = () => {
	const [userData, setUserData] = useState([]);
	
	useEffect(() => {
		getUserData().then((res) => {
			setUserData(res.data.data.userData);
		})
	}, []);
	
	function onSearch() {
		console.info('search');
	}
	
	return (
		<>
			<div className='user-form'>
				<Search
					style={{width: '20%'}}
					placeholder="请输入查询内容..."
					allowClear
					enterButton="查询"
					size="large"
					onSearch={onSearch}
				/>
				<Button type="primary" icon={<PlusOutlined/>} size='large'>
					新增
				</Button>
			</div>
			<Table
				// components={{body: { cell: EditableCell },}}
				rowKey="key"
				bordered
				dataSource={userData}
				columns={userTalbeColumn}
				rowClassName="editable-row"
				// pagination={{ onChange: cancel }}
			/>
		</>
	);
};

export default User;