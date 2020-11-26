import React from 'react';
import Head from 'next/head'
import Header from '../components/Header'
import { Col, Row, Breadcrumb, Affix } from 'antd';
import {CalendarOutlined, FireOutlined, FolderOutlined} from '@ant-design/icons'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../styles/pages/detailed.css'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'


export default function Detailed(list) {
  let markdown = list.markdown;
 
  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header/>
      <Row className="comm-main" justify="center" >
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="nvaBreadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href={`/types/?id=${list.typeID}`}>{list.type}</a></Breadcrumb.Item>
                <Breadcrumb.Item>{list.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                {list.title}
              </div>
              <div className="list-icon center">
                  <span> <CalendarOutlined /> {list.Time}</span>
                  <span> <FireOutlined /> {list.type}</span>
                  <span> <FolderOutlined /> {list.count}人</span>
              </div>
              <div className="detailed-content" >
                  <ReactMarkdown 
                    source={markdown}
                    escapeHtml={false}
                  />
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={15}>
            <div className="detailed-nav comm">
              <div className="nav-title">文章目录</div>
              <MarkNav 
                className="article-menu"
                source={markdown}
                ordered={false}
              />
            </div>
          </Affix>
          
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async (context)=>{
  let id = context.query.id;
  const promise = new Promise((resolve)=>{
    axios(`http://127.0.0.1:7001/default/getDetailedById/${id}`).then(
      (res)=>{
        // console.log('获取成功',res.data.data[0]);
        // console.log(new Date().getTime());
        resolve(res.data.data[0]); 
      }
    )
  })
  return await promise;

}
