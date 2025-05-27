import http from "../axios.js";

// 获取用户列表
const getUserData = () => {
	return http.request({
		url: "/user/getUserData",
		method: "get",
		params: {}
	})
}

// 新增用户
const addUserData = params => {
	return http.request({
		url: "/user/addUserData",
		method: "post",
		params: params
	})
}

// 修改用户信息
const alterUserData = params => {
	return http.request({
		url: "/user/alterUserData",
		method: "post",
		params: params
	})
}

export {
	getUserData,
	addUserData,
	alterUserData,
}