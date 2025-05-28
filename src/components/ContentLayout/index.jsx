import React from 'react';
import {Layout, Tag, theme} from "antd";
import {Outlet, useNavigate} from "react-router";
import './index.less'
import {useDispatch, useSelector} from "react-redux";
import {closeCurrentTag, switchTag} from "../../store/reducers/globalTagSlice.js";

const {Content} = Layout;

const ContentLayout = () => {
	const tagList = useSelector(state => state.globalTag.tagList);
	const currentTag = useSelector(state => state.globalTag.currentTag);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		token: {colorBgContainer, borderRadiusLG},
	} = theme.useToken();
	
	// 处理关闭事件
	function onClose(item) {
		const index = tagList.findIndex(tag => tag.name === item.name)
		dispatch(closeCurrentTag(item))
		
		if (index === tagList.length - 1) {
			dispatch(switchTag(tagList[index - 1]))
			navigate(tagList[index - 1].path)
		} else {
			dispatch(switchTag(tagList[index + 1]))
			navigate(tagList[index + 1].path)
		}
	}
	
	// 处理切换事件
	function switchCurrentTag(item) {
		dispatch(switchTag(item))
		navigate(item.path)
	}
	
	// 添加Tag
	function setTag(flag, item) {
		return (
			flag ?
				<Tag key={item.name} closeIcon color='#55acee' onClose={() => onClose(item)}>{item.name}</Tag>
				: <Tag className='tag-hover' key={item.name} onClick={() => switchCurrentTag(item)}>{item.name}</Tag>
		)
	}
	
	return (
		<Content style={{margin: '0 16px'}}>
			<div className="nav-tags">
				{
					currentTag.name && tagList.map((item, index) => setTag(item.path === currentTag.path, item, index))
				}
			</div>
			<div
				style={{
					padding: 24,
					minHeight: 360,
					minWidth: 1600,
					height: '100%',
					background: colorBgContainer,
					borderRadius: borderRadiusLG,
				}}
			>
				<Outlet/>
			</div>
		</Content>
	);
};

export default ContentLayout;