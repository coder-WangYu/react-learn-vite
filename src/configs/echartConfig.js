// 设置折线图配置项
const setLineChartOption = data => {
	console.info('setlineChartOption', data);
	return {
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [150, 230, 224, 218, 135, 147, 260],
				type: 'line'
			}
		]
	}
}

// 设置柱状图配置项
const setBarChartOption = data => {
	console.info('setBarChartOption', data);
	return {
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [120, 200, 150, 80, 70, 110, 130],
				type: 'bar'
			}
		]
	}
}

// 设置饼状图配置项
const setPieChartOption = data => {
	console.info('setPieChartOption', data);
	return {
		title: {
			text: 'Referer of a Website',
			subtext: 'Fake Data',
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left'
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: '50%',
				data: [
					{value: 1048, name: 'Search Engine'},
					{value: 735, name: 'Direct'},
					{value: 580, name: 'Email'},
					{value: 484, name: 'Union Ads'},
					{value: 300, name: 'Video Ads'}
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	}
}

export {
	setLineChartOption,
	setBarChartOption,
	setPieChartOption
}
