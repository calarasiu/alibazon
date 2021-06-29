const api = require('../api');

const axios = require('axios');

const Category = require('../models/category');

exports.getGenderAttributes=(req, res)=>{
  const{gender} = req.params;
  const categories = res.locals.categories;
  const categoriesUrl= `${api.urlBase}/categories/${gender}?secretKey=${api.key}`;
  axios.get(categoriesUrl).then((response)=>{
    const {data}=response
    const genderObject=new Category(data.id, data.name, data.image, data.page_title, data.page_description, categories);
    res.render('categories', {
      genderCategory: genderObject,
      breadcrumbs: res.locals.breadcrumbs,
    });
    
  }).catch((err)=>{
    console.error(err.message);
  })
}
