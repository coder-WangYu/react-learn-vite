import React, {useEffect, useState} from 'react';
import {Card, Col, Row, Table} from "antd";
import imgUrl from "../../assets/image/logo.png";
import "./index.less";
import {getTableData} from "../../api/home/index.js";
import {homeTalbeColumn} from "../../configs/tableConfig.js";
import {getIcons} from "../../configs/countConfig.jsx";

const Home = () => {
	// 获取表格数据
	const [tableData, setTableData] = useState([]);
	const [countData, setCountData] = useState([]);
	
	useEffect(() => {
		getTableData().then((res) => {
			setTableData(res.data.data.tableData);
			setCountData(res.data.data.countData);
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
			<Col span={16} className="right-container">
				<div className="count-area">
					{
						countData.map(item => {
							return (
								<Card className="card-item" key={item.key} hoverable>
									<div className="item-wrapper">
										<div className="icon" style={{background: item.color}}>{getIcons(item.icon)}</div>
										<div className="infos">
											<div className="price">{item.value}</div>
											<div className="status">{item.title}</div>
										</div>
									</div>
								</Card>
							)
						})
					}
				</div>
			</Col>
		</Row>
	);
};

export default Home;