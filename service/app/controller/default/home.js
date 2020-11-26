'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 获取首页所有文章
  async getArticleList() {
    const { ctx } = this;
    let sql = `SELECT 
                articles.id AS id,
                articles.title AS title,
                FROM_UNIXTIME(articles.addTime,'%Y-%m-%d' ) as Time,
                type.typeName As type,
                articles.browseCount As count,
                articles.typeID As typeID,
                articles.introduction As introduction
                FROM articles , type 
                WHERE articles.typeID = type.id;`

    let result = await this.app.mysql.query(sql)
    ctx.body = {data:result};
  }

  // 根据ID查询文章详情信息 
  async getDetailedById() {
    const { ctx } = this;
    let id = ctx.params.id;
    // console.log(id); 
    let sql = `SELECT 
                articles.id AS id,
                articles.typeID As typeID,
                articles.title AS title,
                FROM_UNIXTIME(articles.addTime,'%Y-%m-%d' ) as Time,
                type.typeName As type,
                articles.browseCount As count,
                articles.articleValue As markdown,
                articles.introduction As introduction
                FROM articles , type 
                WHERE articles.typeID = type.id and articles.id = ${id};`

    let result = await this.app.mysql.query(sql)
    ctx.body = {data:result};
  }

  // 根据ID查询文章相同类型的文章 
  async getTypeById() {
    const { ctx } = this;
    let id = ctx.params.id;
    // console.log(id); 
    let sql = `SELECT 
                articles.id AS id,
                articles.typeID As typeID,
                articles.title AS title,
                FROM_UNIXTIME(articles.addTime,'%Y-%m-%d' ) as Time,
                type.typeName As type,
                articles.browseCount As count,
                articles.introduction As introduction
                FROM articles , type 
                WHERE articles.typeID = type.id and type.id = ${id};`

    let result = await this.app.mysql.query(sql)
    ctx.body = {data:result};
  }
}

module.exports = HomeController;
