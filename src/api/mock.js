// mock数据
import Mock from 'mockjs'
import getHomeData from '../assets/mockServerData/home.js'
import getUserData from "../assets/mockServerData/user.js";

Mock.mock(/home\/get/, getHomeData);
Mock.mock(/user\/get/, getUserData);