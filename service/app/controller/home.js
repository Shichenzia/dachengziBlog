'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async todo() {
    const { ctx } = this;
    ctx.body = '<h1> hi, todo </h1>';
  }
}

module.exports = HomeController;