// 表格配置
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
	{
		title: '操作',
		key: 'operation',
		fixed: 'right',
		width: 100,
		render: () => <a>action</a>,
	}
]

export {
	homeTalbeColumn,
	userTalbeColumn
}