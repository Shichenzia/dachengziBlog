module.exports = app =>{
    const {router, controller} = app
    router.get('/default/getArticleList',controller.default.home.getArticleList)
    router.get('/default/getDetailedById/:id',controller.default.home.getDetailedById)
    router.get('/default/getTypeById/:id',controller.default.home.getTypeById)

}