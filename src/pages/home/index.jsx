import React from 'react';
import {Card, Col, Row} from "antd";
import imgUrl from "../../assets/image/logo.png";
import "./index.less";

const Home = () => {
	return (
		<div className='home-container'>
			<Row>
				<Col span={8}>
					<Card hoverable>
						<div className="user-infos">
							<div className='avator'>
								<img src={imgUrl} alt=""/>
							</div>
							<div className="info">
								<p style={{fontSize: '40px'}}>Admin</p>
								<p style={{fontSize: '20px'}}>超级管理员</p>
							</div>
						</div>
						<hr/>
						<div className="login-infos">
							<div className="info-item">
								<p>上次登录时间：</p>
								<p>{new Date().toLocaleDateString()}</p>
							</div>
							<div className="info-item">
								<p>上次登录地点：</p>
								<p>内蒙古 呼和浩特市</p>
							</div>
						</div>
					</Card>
				</Col>
				<Col span={16}>
					右侧内容区域
				</Col>
			</Row>
		</div>
	);
};

export default Home;