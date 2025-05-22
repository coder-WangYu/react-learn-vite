import http from "./axios.js";

const getData = () => {
	return http.request({
		url: "/api/v1/getData",
		method: "get",
		params: {}
	})
}

export {
	getData
}