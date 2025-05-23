import * as echarts from 'echarts';
import {useEffect, useRef} from "react";

const CustomEcharts = ({options, style}) => {
	const echartRef = useRef(null)
	let myChart = useRef(null)
	useEffect(() => {
		myChart.current = echarts.init(echartRef.current)
		myChart.current.setOption(options)
		setTimeout(() => {
			myChart.current.resize()
		}, 100)
	}, [options])
	
	return (
		<div className="chart-item" ref={echartRef} style={style}></div>
	)
}

export default CustomEcharts;