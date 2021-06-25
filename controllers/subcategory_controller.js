// get the products subcategory from 
// const url = `https://osf-digital-backend-academy.herokuapp.com/api/categories/parent/${subcategory_id}?secretKey=$2a$08$KNVmMX6n2LISN4D8I9QqOesTpa/8bSyapIvGSxldG3LLW6LSFXqm.`

const api = require('../api');

const axios = require('axios');

exports.getSubcategory=async (req, res)=>{
  const {gender}= req.params;
  const {subcategory}= req.params;
  const subcategoriesURL= `${api.urlBase}/categories/parent/${gender}-${subcategory}?secretKey=${api.key}`;

  const subcategories=[]
  await axios.get(subcategoriesURL).then((response)=>{
    const {data} = response;
    data.forEach(subcategory =>{
      subcategories.push(subcategory);
    })
    res.render('subcategories', {
      subcategories:subcategories,
      breadcrumbs: res.locals.breadcrumbs,
    });
  }).catch((err)=>{
    console.error(err.message);
  })
}