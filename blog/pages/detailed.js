import React from 'react';
import Head from 'next/head'
import Header from '../components/Header'
import { Col, Row, Breadcrumb, Affix } from 'antd';
import {CalendarOutlined, FireOutlined, FolderOutlined} from '@ant-design/icons'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../styles/pages/detailed.css'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'

export default function Detailed(list) {
  const renderer = new marked.Renderer();

  const tocify = new Tocify()
  renderer.heading = function(text, level, raw) {
      const anchor = tocify.add(text, level);
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
    };

  marked.setOptions({
    renderer : renderer, // 这个是必须填写的，你可以通过自定义的Renderer渲染出自定义的格式
    gfm: true, // 启动类似Github样式的Markdown,填写true或者false
    pedantic: false, // 只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
    sanitize: false, //  原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
    tables: true, // 支持Github形式的表格，必须打开gfm选项
    breaks: false, // 支持Github换行符，必须打开gfm选项，填写true或者false
    smartLists: true, // 优化列表输出，这个填写ture之后，你的样式会好看很多，
    smartypants: false, // 
    // 高亮显示规则 ，这里我们将使用highlight.js来完成
    highlight: function (code) {   
      return hljs.highlightAuto(code).value;
    }
   });

  let html = marked(list.markdown);
  // let html = marked(props.article_content) 
 
  // let markdown = list.markdown;
 
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
              <div 
                className="detailed-content" 
                dangerouslySetInnerHTML={{__html:html}}
              >
                 
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={15}>
            <div className="detailed-nav comm">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
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
    axios(`${servicePath.getDetailedById}${id}`).then(
      (res)=>{
        // console.log('获取成功',res.data.data[0]);
        // console.log(new Date().getTime());
        resolve(res.data.data[0]); 
      }
    )
  })
  return await promise;

}
