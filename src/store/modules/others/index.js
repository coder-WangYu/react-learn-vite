// others模块store配置
import {createSlice} from "@reduxjs/toolkit";

const othersSlice = createSlice({
	name: "others",
	initialState: {},
	reducers: {}
})

export const {others} = othersSlice.actions;

export default othersSlice.reducer;