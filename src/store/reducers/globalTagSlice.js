// 用于添加全局tag标签
import {createSlice} from "@reduxjs/toolkit";

const globalTagSlice = createSlice({
	name: "globalTag",
	initialState: {
		tagList: [
			{
				path: '/',
				name: '首页'
			}
		],
		currentTag: {}
	},
	reducers: {
		setCurrentTag: (state, {payload}) => {
			if (payload.name !== '首页') {
				state.currentTag = payload;
				const result = state.tagList.findIndex(item => item.name === payload.name);
				
				// 禁止重复添加
				if (result === -1) {
					state.tagList.push(payload);
				}
			} else if (payload.name === '首页' && state.tagList.length === 1) {
				state.currentTag = {}
			}
		},
		closeCurrentTag: (state, {payload}) => {
			state.tagList = state.tagList.filter(item => item.name !== payload.name);
		},
		switchTag: (state, {payload}) => {
			if (payload.name === '首页') {
				state.currentTag = {}
			} else {
				state.currentTag = payload;
			}
		}
	}
})

export const {setCurrentTag, closeCurrentTag, switchTag} = globalTagSlice.actions;

export default globalTagSlice.reducer;