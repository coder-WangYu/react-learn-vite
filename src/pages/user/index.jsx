import React, {useEffect, useState} from 'react';
import {addUserData, alterUserData, getUserData} from "../../api/user";
import {Button, DatePicker, Form, Input, message, Modal, Popconfirm, Select, Table} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import './index.less'
import dayjs from "dayjs";
import Search from "antd/es/input/Search.js";

const User = () => {
	const [userData, setUserData] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalType, setModalType] = useState("");
	
	// 创建表单实例
	const [form] = Form.useForm();
	
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
				// 打开编辑用户弹窗
				function editTableItem() {
					// 数据深拷贝
					const cloneData = JSON.parse(JSON.stringify(rowData));
					// 处理日期
					cloneData.birthDay = dayjs(cloneData.birthDay);
					// 表单数据回填
					form.setFieldsValue(cloneData)
					setModalType('edit')
					setIsModalOpen(true)
				}
				
				// 处理删除功能
				function deleteItem(type, props) {
					// TODO：添加删除接口
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
	
	// 获取用户列表
	useEffect(() => {
		getUserData().then((res) => {
			setUserData(res.data.data.userData);
		})
	}, []);
	
	// 打开新增用户弹窗
	function addTableItem() {
		setModalType('add')
		setIsModalOpen(true)
	}
	
	// TODO：添加查询接口
	// 处理查询功能
	function onSearch(value) {
		setUserData(userData.filter((item) => item.name.includes(value)))
	}
	
	// 处理查询内容清除功能
	function onClear() {
		getUserData().then(res => {
			setUserData(res.data.data.userData);
		})
	}
	
	// 处理弹窗确认事件
	function handleOk() {
		// 表单校验
		form.validateFields().then(val => {
			// 重置日期格式
			val.birthDay = dayjs(val.birthDay).format('YYYY-MM-DD');
			
			// TODO：添加新增、修改接口
			if (modalType === 'add') {
				// 处理用户新增功能
				addUserData(val).then(res => {
					if (res.status === 200) {
						message.success('添加成功')
					}
				})
			} else {
				// 处理用户修改功能
				alterUserData(val).then(res => {
					if (res.status === 200) {
						message.success('编辑成功')
					}
				})
			}
			setIsModalOpen(false)
			form.resetFields();
		}).catch(err => {
			message.error(err)
		})
	}
	
	// 处理弹窗取消事件
	function handleCancel() {
		setIsModalOpen(false)
		form.resetFields();
		message.info("用户取消操作")
	}
	
	return (
		<>
			<Modal
				title={modalType === 'add' ? '新增用户' : '编辑用户'}
				closable={{'aria-label': 'Custom Close Button'}}
				cancelText='取消'
				okText='确定'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Form
					form={form}
					labelCol={{span: 6}}
					wrapperCol={{span: 16}}
					labelAlign={'left'}
					style={{maxWidth: 600}}
				>
					<Form.Item
						label="姓名"
						name="name"
						rules={[{required: true, message: '请输入姓名！'}]}
					>
						<Input placeholder={'请输入姓名'}/>
					</Form.Item>
					
					<Form.Item
						label="年龄"
						name="age"
						rules={[{required: true, message: '请输入年龄！'}]}
					>
						<Input placeholder={'请输入年龄'}/>
					</Form.Item>
					
					<Form.Item
						label="性别"
						name="sex"
						rules={[{required: true, message: '请选择性别！'}]}
					>
						<Select
							placeholder={'请选择性别'}
							optionFilterProp="label"
							options={[{value: '1', label: '男'}, {value: '0', label: '女'}]}
						/>
					</Form.Item>
					
					<Form.Item
						label="出生日期"
						name="birthDay"
						rules={[{required: true, message: '请选择出生日期！'}]}
					>
						<DatePicker
							format={'YYYY-MM-DD'}
							placeholder={'请选择出生日期'}
							style={{minWidth: '200px'}}
						/>
					</Form.Item>
					
					<Form.Item
						label="地址"
						name="address"
						rules={[{required: true, message: '请输入地址！'}]}
					>
						<Input placeholder={'请输入地址'}/>
					</Form.Item>
				</Form>
			</Modal>
			
			<div className='user-form'>
				<Search
					style={{width: '20%'}}
					placeholder="请输入姓名..."
					allowClear
					enterButton="查询"
					size="large"
					onSearch={onSearch}
					onClear={onClear}
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