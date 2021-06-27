const api = require('../api');

const axios = require('axios');

const Category = require('../models/category');

exports.getGender=(req, res)=>{
  const defaultGender = 'womens'
  res.redirect(`/categories/${defaultGender}`)
}

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

//from home redirect the user to /women clothing or / mens-clothing like the clicked buttons 
// with each object in the response I need to create a category object and to display it in the home page menu

//1  to obtain the gender categories I need to make another api call to :
// https://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens?secretKey=$2a$08$KNVmMX6n2LISN4D8I9QqOesTpa/8bSyapIvGSxldG3LLW6LSFXqm.

// 2: each obtained object needs to be passed to the subcategories 


// const shirts = new Category(123,'name', 'image', 'title', 'description', 'subcategories', 'parent_category' );

// console.dir(shirts);
// category.id