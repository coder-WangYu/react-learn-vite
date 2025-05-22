// mock数据
import Mock from 'mockjs'
import getHomeData from '../assets/mockServerData/home.js'

Mock.mock(/home\/get/, getHomeData);