// home模块store配置
import {createSlice} from "@reduxjs/toolkit";

const homeSlice = createSlice({
	name: "home",
	initialState: {},
	reducers: {}
})

export const {home} = homeSlice.actions;

export default homeSlice.reducer;