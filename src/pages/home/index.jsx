import React, {useEffect, useState} from 'react';
import {Card, Col, Row, Table} from "antd";
import imgUrl from "../../assets/image/logo.png";
import "./index.less";
import {getTableData} from "../../api/home/index.js";
import {homeTalbeColumn} from "../../configs/tableConfig.js";

const Home = () => {
	// 获取表格数据
	const [tableData, setTableData] = useState([]);
	useEffect(() => {
		getTableData().then((res) => {
			setTableData(res.data.data.tableData);
		})
	}, []);
	
	return (
		<Row>
			{/* 左侧内容区域 */}
			<Col span={8} className="left-container">
				{/* 用户信息 */}
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
				
				{/* 表格区域 */}
				<Card hoverable style={{marginTop: '50px'}}>
					<Table rowKey={"key"} dataSource={tableData} columns={homeTalbeColumn} pagination={false}/>
				</Card>
			</Col>
			
			{/* 右侧内容区域 */}
			<Col span={16}>
				右侧内容区域
			</Col>
		</Row>
	);
};

export default Home;