// store配置
import {configureStore} from "@reduxjs/toolkit";
import menuFoldReducer from "./reducers/menuFoldSlice.js";
import userReducer from "./modules/user";
import homeReducer from "./modules/home";
import mallReducer from "./modules/mall";
import othersReducer from "./modules/others";

export const store = configureStore({
	reducer: {
		menuFold: menuFoldReducer,
		user: userReducer,
		home: homeReducer,
		mall: mallReducer,
		others: othersReducer,
	}
})

export default store;
