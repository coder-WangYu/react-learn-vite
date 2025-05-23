// 表格配置
import {Button, Popconfirm, message} from "antd";

const homeTalbeColumn = [
	{
		title: '姓名',
		dataIndex: 'name',
	},
	{
		title: '年龄',
		dataIndex: 'age',
	},
	{
		title: '身高',
		dataIndex: 'height',
	},
	{
		title: '体重',
		dataIndex: 'weight',
	},
]

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

export {
	homeTalbeColumn,
	userTalbeColumn
}