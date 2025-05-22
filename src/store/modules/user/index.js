// user模块store配置
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {},
	reducers: {}
})

export const {user} = userSlice.actions;

export default userSlice.reducer;