'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let result = await this.app.mysql.get("user",{id:"2"})
    console.log(result)
    ctx.body = result;
  }
}

module.exports = HomeController;
