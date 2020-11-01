import React from 'react';
import { Col, Row, Menu, Icon} from 'antd';
import {HomeOutlined, YoutubeOutlined, BoldOutlined} from '@ant-design/icons'
import '../styles/components/header.module.css'

const Header = ()=>(
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header_logo">大橙子</span>
                <span className="header_text">一个程序狗的博客</span>
            </Col>
            <Col 
                className="menu-div" 
                xs={0} sm={0} md={14} lg={8} xl={6}
            >
                <Menu  mode="horizontal">
                    <Menu.Item key="home">
                    <HomeOutlined />
                        首页
                    </Menu.Item>
                    <Menu.Item key="life">
                        <BoldOutlined />
                        博客
                    </Menu.Item>
                    <Menu.Item key="video">
                        <YoutubeOutlined />
                        视频
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;