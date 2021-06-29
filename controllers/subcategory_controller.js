const axios = require('axios');

exports.getSubcategory=async (req, res)=>{
  const {gender}= req.params;
  const {subcategory}= req.params;
  const subcategoriesURL= `${process.env.URL_BASE}/categories/parent/${gender}-${subcategory}?secretKey=${process.env.API_KEY}`;

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