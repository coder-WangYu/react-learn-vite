// mock数据
import Mock from 'mockjs'
import getHomeData from '../assets/mockServerData/home.js'
import getUserData from "../assets/mockServerData/user.js";
import {addUserData, alterUserData} from "./user/index.js";

Mock.mock(/home\/get/, getHomeData);
Mock.mock(/user\/getUserData/, getUserData);
Mock.mock(/user\/addUserData/, addUserData);
Mock.mock(/user\/alterUserData/, alterUserData);