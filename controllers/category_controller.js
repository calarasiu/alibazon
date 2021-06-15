const api = require('../api');

const axios = require('axios');

const Category = require('../models/category');

exports.getCategories=(req, res)=>{
  const defaultCategory = 'womens'
  res.redirect(`/categories/${defaultCategory}`)
}

exports.getCategory=(req, res)=>{
  const{gender} = req.params;

  const categoriesUrl= `${api.urlBase}/categories/${gender}?secretKey=${api.key}`;
  const genderSubcatUrl= `${api.urlBase}/categories/parent/${gender}?secretKey=${api.key}`;

  const genderSubcat = [];

  axios.get(genderSubcatUrl).then((response)=>{
    const {data}=response;
    console.dir(data);
    data.forEach((subcategory)=>{
      genderSubcat.push(subcategory);
    })
    
  }).catch((err)=>{
    console.error(err.message);
  })
  
  axios.get(categoriesUrl).then((response)=>{
    const {data}=response
    const genderObject=new Category(data.id, data.name, data.image, data.page_title, data.page_description, genderSubcat)
    res.render('index', {genderCategory: genderObject});
    
  }).catch((err)=>{
    console.error(err.message);
  })
}
//from home redirect the user to /women clothing or / mens-clothing like the clicked buttons 
// with each object in the response I need to create a category object and to display it in the home page menu

//1  to obtain the gender subcategories I need to make another api call to :
// https://osf-digital-backend-academy.herokuapp.com/api/categories/parent/womens?secretKey=$2a$08$KNVmMX6n2LISN4D8I9QqOesTpa/8bSyapIvGSxldG3LLW6LSFXqm.

// 2: each obtained object needs to be passed to the subcategories 


// const shirts = new Category(123,'name', 'image', 'title', 'description', 'subcategories', 'parent_category' );

// console.dir(shirts);
// category.id