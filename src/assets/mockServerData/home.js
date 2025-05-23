// 首页数据mock
export default function getHomeData() {
	return {
		code: 2000,
		data: {
			tableData: [
				{
					key: 1,
					name: 'wy',
					age: 18,
					height: 188,
					weight: 80
				},
				{
					key: 2,
					name: 'wy',
					age: 18,
					height: 188,
					weight: 81
				},
				{
					key: 3,
					name: 'wy',
					age: 18,
					height: 188,
					weight: 82
				},
				{
					key: 4,
					name: 'wy',
					age: 18,
					height: 188,
					weight: 83
				},
				{
					key: 5,
					name: 'wy',
					age: 18,
					height: 188,
					weight: 83
				}
			],
			countData: [
				{
					key: 1,
					name: 'wy',
					value: 18,
					icon: 'CheckOutlined',
					color: '#18e1bb',
					title: '今日支付订单',
				},
				{
					key: 2,
					name: 'wy',
					value: 18,
					icon: 'PlusCircleOutlined',
					color: '#ebe513',
					title: '今日收藏订单'
				},
				{
					key: 3,
					name: 'wy',
					value: 18,
					icon: 'CheckSquareOutlined',
					color: '#e43eb5',
					title: '今日未支付订单'
				},
				{
					key: 4,
					name: 'wy',
					value: 18,
					icon: 'CheckOutlined',
					color: '#18e1bb',
					title: '本月支付订单'
				},
				{
					key: 5,
					name: 'wy',
					value: 18,
					icon: 'PlusCircleOutlined',
					color: '#ebe513',
					title: '本月收藏订单'
				},
				{
					key: 6,
					name: 'wy',
					value: 18,
					icon: 'CheckSquareOutlined',
					color: '#e43eb5',
					title: '本月未支付订单'
				}
			]
		}
	}
}
