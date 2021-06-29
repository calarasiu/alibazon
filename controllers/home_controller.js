const axios = require('axios');

exports.getHomePage= async (req, res)=>{
  const genders = ["mens", "womens"];

  const gendersAttributes = [];
  for (const gender of genders){
    const url = `${process.env.URL_BASE}/categories/${gender}?secretKey=${process.env.API_KEY}`;

    await axios.get(url).then((response)=>{
      const {data} = response;

      gendersAttributes.push(data);
    }).catch((err)=>{
      console.error(err.message);
    })
  }
  res.render(`home`, {gendersAttributes});
}
