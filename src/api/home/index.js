import http from "../axios.js";

// 获取左侧表格数据
const getTableData = () => {
	return http.request({
		url: "/home/getHomeTableData",
		method: "get",
		params: {}
	})
}

export {
	getTableData
}