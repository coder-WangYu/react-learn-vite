import React, {useEffect, useState} from 'react';
import {getUserData} from "../../api/user";
import {Button, message, Popconfirm, Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import './index.less'

const User = () => {
	const [userData, setUserData] = useState([]);
	
	// 设置表头
	const userTalbeColumn = [
		{
			title: '姓名',
			dataIndex: 'name',
		},
		{
			title: '年龄',
			dataIndex: 'age',
		},
		{
			title: '性别',
			dataIndex: 'sex',
		},
		{
			title: '出生年月',
			dataIndex: 'birthDay',
		},
		{
			title: '地址',
			dataIndex: 'address'
		},
		// 添加表格操作列
		{
			title: '操作',
			render: (rowData) => {
				function editItem(props) {
					console.info(props);
				}
				
				function deleteItem(props) {
					console.info(props);
				}
				
				return (
					<>
						<Button
							style={{marginRight: "10px"}}
							onClick={() => editItem(rowData)}
						>
							编辑
						</Button>
						<Popconfirm
							title="Delete the task"
							description="Are you sure to delete this task?"
							onConfirm={() => deleteItem(rowData)}
							onCancel={message.error('Click on No')}
							okText="Yes"
							cancelText="No"
						>
							<Button type='primary' danger>删除</Button>
						</Popconfirm>
					</>
				)
			}
		}
	]
	
	// 处理新增、编辑、删除功能
	function tableAction(type, data) {
		console.info(data)
		switch (type) {
			case 'add':
				break
			case 'edit':
				break
			case 'delete':
				break
		}
	}
	
	// 处理查询功能
	function onSearch() {
		console.info('search');
	}
	
	useEffect(() => {
		getUserData().then((res) => {
			setUserData(res.data.data.userData);
		})
	}, []);
	
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
				<Button
					type="primary"
					icon={<PlusOutlined/>}
					size='large'
					onClick={() => tableAction('add', '')}
				>
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