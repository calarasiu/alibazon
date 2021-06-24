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
      breadcrumbs: req.breadcrumbs,
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
        if(image.view_type=='large'){
          image.images.forEach((image)=>{
            product.images=image;
          });
        };
      })
    })
    res.render('product',{
      products,
      breadcrumbs: req.breadcrumbs  
    });
  }).catch((err)=>{
    console.error(err.message);
  });
}

// name: 'Floral Long Sleeve Roll Up Shirt'
// page_description:
// price: 64
// currency: 'USD'
// id: '25565189'
// image_groups:

// {
//   images: [
//     {
//       alt: 'Classic Wrap, , small',
//       link: 'products/small/PG.W20766.LEAOLXX.PZ.jpg',
//       title: 'Classic Wrap, '
//     }
//   ],
//   view_type: 'small'
// }

// .images
// [
//   {
//     alt: 'Classic Wrap, Black, large',
//     link: 'products/large/PG.W20766.BLACKXX.PZ.jpg',
//     title: 'Classic Wrap, Black'
//   }
// ]