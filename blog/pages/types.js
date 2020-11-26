import React,{useState} from 'react';
import Head from 'next/head';
import Header from '../components/Header'
import { Col, Row, List } from 'antd';
import '../styles/pages/index.css';
import {CalendarOutlined, FireOutlined, FolderOutlined} from '@ant-design/icons';
import Author from '../components/Author';
import Footer from '../components/Footer';
import axios from 'axios';
import Link from 'next/link'

function Types(list) {
  const [stateList,setStateList] = useState(list.data);  

  return (
    <div>
      <Head>
        <title>{stateList[0].type}</title>
      </Head>
      <Header/>
      <Row className="comm-main" justify="center" >
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <List 
                header={<div>{stateList[0].type}</div>}
                itemLayout="vertical"
                dataSource={stateList}
                renderItem={(item)=>{
                    return(
                        <List.Item>
                        <div className="list-title">
                          <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                            {item.title}
                          </Link>
                         
                        </div>
                            <div className="list-icon">
                            <span> <CalendarOutlined /> {item.Time}</span>
                            <span> <FolderOutlined />{item.type}</span>
                            <span> <FireOutlined /> {item.count}人</span>
                        </div>
                        <div className="list-context">{item.introduction}</div>
                        </List.Item>
                    )
                }}
                split={true}
             />  
          </div>  
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
        </Col>
      </Row>

      <Footer />
      
    </div>
  )
}

Types.getInitialProps = async (context)=>{
  let id = context.query.id;
  // console.log(id);
  const promise = new Promise((resolve)=>{
    axios(`http://127.0.0.1:7001/default/getTypeById/${id}`).then(
      (res)=>{
        // console.log('获取成功',res.data);
        // console.log(new Date().getTime());
        resolve(res.data);
      }
    )
  })
  return await promise;

}

export default Types;
