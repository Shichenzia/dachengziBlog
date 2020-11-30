import React from 'react';
import { Col, Row, Menu} from 'antd';
import {HomeOutlined, YoutubeOutlined, BoldOutlined} from '@ant-design/icons'
import '../styles/components/header.css'
import Link from 'next/link'

const Header = ()=>(
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo"><Link href="/" >大橙子 </Link></span>
                <span className="header-text">一个程序狗的博客</span>
            </Col>
            <Col 
                className="menu-div" 
                xs={0} sm={0} md={14} lg={8} xl={6}
            >
                <Menu  mode="horizontal">
                    <Menu.Item key="home">
                    <HomeOutlined />
                        <Link href="/" >首页 </Link>
                    </Menu.Item>
                    <Menu.Item key="blog">
                        <BoldOutlined />
                        <Link href="/" >博客 </Link>
                    </Menu.Item>
                    <Menu.Item key="life">
                        <YoutubeOutlined />
                        <Link href="/" >生活 </Link>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;