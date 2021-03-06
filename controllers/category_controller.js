const axios = require('axios');

exports.getCategory=async (req, res, next)=>{

  const categoryURL= `${process.env.URL_BASE}/categories/parent/${req.params.gender}?secretKey=${process.env.API_KEY}`;

  const categories=[];
  await axios.get(categoryURL).then((response)=>{
    const {data} = response
    data.forEach((category)=>{
      categories.push(category);
    })
    res.locals.categories=categories;
  }).catch((err)=>{
    console.error(err.message);
  })
  next()
}
// get the gender for the subcategories
// each gender has many subcategories
  // to get the subcategories i need to make the api call 

  // i have the subcategories -> I need to pass it to the index template - using the re.locals
  // I have a list of subcategories- means I need to iterate through it => add it to an array
  // constructor(image, id, name, description, title, parent_category, products)
  // limitation: I cannot use the response bc it won't execute the category controller anymore
  // display the gender subcategories in the subcategory section 
  // 