// mall模块store配置
import {createSlice} from "@reduxjs/toolkit";

const mallSlice = createSlice({
	name: "mall",
	initialState: {},
	reducers: {}
})

export const {mall} = mallSlice.actions;

export default mallSlice.reducer;