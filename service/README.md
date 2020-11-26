# service



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

/*************自己的笔记*************/


app/controller/两个文件夹：
admin（管理端使用的所有API接口）
default（客户端使用的所有API接口）

/*********** sql表说明文档 ************/

type表：类型表
id int(5)  id标号
typeName char(20) 类型名
orderName int(3) 排序

article表： 文章表
id int(5)  id标号
typeId int(5) 外键type表的id 
title varchar(255) 标题
introduction text 简介
articleValue text 文章内容
addTime int(11) 增加时间
modifyTime int(11) 修改时间
browseCount int(11) 查看次数

/**************************************/




