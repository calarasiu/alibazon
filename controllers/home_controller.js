const api = require('../api');

const axios = require('axios');

exports.getHomePage= async (req, res)=>{
  const genders = ["mens", "womens"];

  const gendersAttributes = [];
  for (const gender of genders){
    const url = `${api.urlBase}/categories/${gender}?secretKey=${api.key}`;

    await axios.get(url).then((response)=>{
      const {data} = response;

      gendersAttributes.push(data);
    }).catch((err)=>{
      console.error(err.message);
    })
  }
  res.render(`home`, {gendersAttributes});
}
