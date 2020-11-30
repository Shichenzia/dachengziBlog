 let ipUrl = 'http://127.0.0.1:7001/default/'

 let servicePath = {
    getArticleList : ipUrl+`getArticleList` , // 获取博客所有文章
    getDetailedById : ipUrl+`getDetailedById/` , //根据id获取博客详情
    getTypeById : ipUrl+`getTypeById/` , // 根据文章类型id获取同类的博客 
 }

 export default servicePath;