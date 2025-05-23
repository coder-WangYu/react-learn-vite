import {CheckOutlined, CheckSquareOutlined, PlusCircleOutlined} from "@ant-design/icons";

const icons = {
	CheckOutlined: <CheckOutlined/>,
	CheckSquareOutlined: <CheckSquareOutlined/>,
	PlusCircleOutlined: <PlusCircleOutlined/>,
}

function getIcons(name) {
	return icons[name];
}

export {
	getIcons,
}