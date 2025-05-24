import React, {useEffect, useState} from 'react';
import {getUserData} from "../../api/user";
import {Button, message, Modal, Popconfirm, Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search.js";
import './index.less'

const User = () => {
	const [userData, setUserData] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalTitle, setModalTitle] = useState("");
	
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
				// 处理编辑功能
				function editTableItem() {
					console.info(rowData);
					setModalTitle('编辑')
					setIsModalOpen(true)
				}
				
				// 处理删除功能
				function deleteItem(type, props) {
					console.info(props);
					if (type && type === 'confirm') {
						message.success("删除成功！")
					} else {
						message.error("取消删除！")
					}
				}
				
				return (
					<>
						<Button
							style={{marginRight: "10px"}}
							onClick={() => editTableItem()}
						>
							编辑
						</Button>
						<Popconfirm
							title="删除数据"
							description="是否要彻底删除这条数据？"
							onConfirm={e => deleteItem('confirm', e)}
							onCancel={e => deleteItem('cancel', e)}
							okText="是"
							cancelText="否"
						>
							<Button type='primary' danger>删除</Button>
						</Popconfirm>
					</>
				)
			}
		}
	]
	
	useEffect(() => {
		getUserData().then((res) => {
			setUserData(res.data.data.userData);
		})
	}, []);
	
	// 处理新增功能
	function addTableItem() {
		setModalTitle('新增')
		setIsModalOpen(true)
	}
	
	// 处理查询功能
	function onSearch() {
		console.info('search');
	}
	
	// 处理弹窗确认事件
	function handleOk() {
		setIsModalOpen(false)
	}
	
	// 处理弹窗取消事件
	function handleCancel() {
		setIsModalOpen(false)
	}
	
	return (
		<>
			<Modal
				title={modalTitle}
				closable={{'aria-label': 'Custom Close Button'}}
				cancelText='取消'
				okText='确定'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
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
					onClick={() => addTableItem()}
				>
					新增
				</Button>
			</div>
			<Table
				rowKey="key"
				bordered
				dataSource={userData}
				columns={userTalbeColumn}
				rowClassName="editable-row"
			/>
		</>
	);
};

export default User;