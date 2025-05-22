// 用于控制左边栏收起或展开
import {createSlice} from "@reduxjs/toolkit";

const menuFoldSlice = createSlice({
	name: "menuFold",
	initialState: {
		isCollapsed: false, // f展开，t收起
	},
	reducers: {
		switchMenuFold: state => {
			state.isCollapsed = !state.isCollapsed;
		}
	}
})

export const {switchMenuFold} = menuFoldSlice.actions;

export default menuFoldSlice.reducer;