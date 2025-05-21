import React, {useState} from 'react';
import {Layout} from "antd";
import imgUrl from "../../assets/image/logo.png";
import "./index.less";

const {Header} = Layout;

const HeaderLayout = () => {
	const [dropDownFlag, setDropDownFlag] = useState(false)
	
	return (
		<Header
			style={{
				padding: 0,
				textAlign: 'center',
				fontSize: '2rem',
				fontWeight: 'bold',
				color: 'white',
				display: 'flex',
				justifyContent: 'space-between',
				position: 'relative'
			}}
		>
			<div style={{flex: '1'}}>通用后台管理系统</div>
			<div onClick={() => setDropDownFlag(!dropDownFlag)} style={{width: '64px', height: '64px', padding: '7px'}}>
				<img
					style={{width: '50px', height: '50px', cursor: 'pointer', clipPath: 'circle(50%)'}}
					src={imgUrl}
					alt=""
				/>
			</div>
			{
				dropDownFlag && <>
					<div className={'dropDown'}>
						<div className={'dropDown-item'}>个人中心</div>
						<div className={'dropDown-item'}>退出登录</div>
					</div>
				</>
			}
		</Header>
	);
};

export default HeaderLayout;
