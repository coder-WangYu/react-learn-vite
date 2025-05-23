import http from "../axios.js";

const getUserData = () => {
	return http.request({
		url: "/user/getUserData",
		method: "get",
		params: {}
	})
}

export {
	getUserData
}