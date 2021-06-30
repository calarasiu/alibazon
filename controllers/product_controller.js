const axios = require('axios');

exports.getProducts=async (req, res)=>{
  const productsURL= `${process.env.URL_BASE}/products/product_search?primary_category_id=${req.params.subcategory_id}&secretKey=${process.env.API_KEY}`;
  
  console.dir(req.params);
  const products=[];
  const navigation = req.path.split('/')
  navigation.pop();
  await axios.get(productsURL).then((response)=>{
    const {data} = response
    data.forEach((product)=>{
      products.push(product);
    
    })
    
    res.render('products',{
      products,
      nav:navigation.join('/')
    });
  }).catch((err)=>{
    console.error(err.message);
  });
}

exports.getProduct=async (req,res)=>{
  
  const productURL= `${process.env.URL_BASE}//products/product_search?id=${req.query.id}&secretKey=${process.env.API_KEY}`;
  const navigation = req.path.split('/')
  navigation.pop();
  await axios.get(productURL).then((response)=>{
    const {data} = response;
    const products=[]
    data.forEach((product)=>{
      products.push(product);
   
      })
      res.render('product',{
        products,
        nav:navigation.join('/')
         
      });
    }).catch((err)=>{
      console.error(err.message);
  });
}
