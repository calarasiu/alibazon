// from the index page - on click on the category -> make the api call for that category to get the products data
const api = require('../api');

const axios = require('axios');

exports.getProducts=async (req, res)=>{
  const productsURL= `${api.urlBase}/products/product_search?primary_category_id=${req.params.subcategory_id}&secretKey=${api.key}`;
  
  console.dir(req.params);
  const products=[];
  // const images=[];
  await axios.get(productsURL).then((response)=>{
    const {data} = response
    data.forEach((product)=>{
      products.push(product);

      product.image_groups.forEach((image)=>{
        if(image.view_type=='large'){
          image.images.forEach((image)=>{
            product.images=image;
          });
        };
      })
    })

    res.render('products',{
      products,
      breadcrumbs: res.locals.breadcrumbs,
    });
  }).catch((err)=>{
    console.error(err.message);
  });
}

exports.getProduct=async (req,res)=>{
  
  const productURL= `${api.urlBase}//products/product_search?id=${req.query.id}&secretKey=${api.key}`;

  await axios.get(productURL).then((response)=>{
    const {data} = response;
    const products=[]
    data.forEach((product)=>{
      products.push(product);
      product.image_groups.forEach((image)=>{
        // console.dir(image);
        if(image.view_type=='large'){
          image.images.forEach((image)=>{
            product.images=image;
          });
        };
      })
      // console.dir(product);
      // product.variation_attributes.forEach((variant)=>{
      //   console.log(typeof variant);
      // })
    })
    res.render('product',{
      products,
      breadcrumbs: res.locals.breadcrumbs  
    });
  }).catch((err)=>{
    console.error(err.message);
  });
}

// {
//   variation_values: { color: 'JJZ01XX', size: '9LG' },
//   price: 64,
//   product_id: '701643540013',
//   orderable: true
// }
// {
//   variation_values: { color: 'JJZ01XX', size: '9SM' },
//   price: 64,
//   product_id: '701643540037',
//   orderable: true
// }
// {
//   variation_values: { color: 'JJZ01XX', size: '9MD' },
//   price: 64,
//   product_id: '701643540020',
//   orderable: true
// }
// {
//   variation_values: { color: 'JJZ01XX', size: '9XL' },
//   price: 64,
//   product_id: '701643540044',
//   orderable: true
// }



// product.variation_attributes={
//   values: [
//     { orderable: true, name: 'S', value: '9SM' },
//     { orderable: true, name: 'M', value: '9MD' },
//     { orderable: true, name: 'L', value: '9LG' },
//     { orderable: true, name: 'XL', value: '9XL' }
//   ],
//   id: 'size',
//   name: 'Size'
// }