import {Avatar, Divider, Tag} from 'antd';
import '../styles/components/author.css'
import {QqOutlined, GithubOutlined, ZhihuOutlined} from '@ant-design/icons'

const Author =()=>{
    return(
        <div className="author-div comm">
            <div>
                <Avatar size={100} src="https://tse3-mm.cn.bing.net/th/id/OIP.lrQNqoJpEZGuFE5KUm-RaQAAAA?pid=Api&rs=1" />
            </div>
            <span className="name" >大橙子</span>
            <div className="author-introduction">
                一个学前端的程序狗
                <div className="tag-box">
                    <Tag color="magenta">大学牲</Tag>
                    <Tag color="cyan">前端两年</Tag>
                    <Tag color="geekblue">萌新</Tag>
                </div>
                
                <Divider>社交账号</Divider>
                <div>
                    <Avatar icon={<QqOutlined />} className="account"/>
                    <Avatar icon={<GithubOutlined />}className="account" />
                    <Avatar icon={<ZhihuOutlined />} className="account"/>
                </div>
                <Divider></Divider>
            </div>
        </div>
    )
}

export default Author;