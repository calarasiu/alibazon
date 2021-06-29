let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);


describe('GET /product', function() {
  describe('/GET product', () => {
    it('it should GET the requested product', (done) => {
      chai.request(app)
          .get('/womens/clothing/womens-clothing-dresses/Black%20And%20White%20V-Neck%20Floral%20Dress?id=25592211')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });
});

});

describe('GET /products', function() {
  describe('/GET products', () => {
    it('it should GET all the requested products', (done) => {
      chai.request(app)
          .get('/womens/clothing/womens-clothing-dresses')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });
});

});

describe('GET /subcategories', function() {
  describe('/GET subcategories', () => {
    it('it should GET all the requested subcategories', (done) => {
      chai.request(app)
          .get('/womens/clothing')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
          });
    });
});

});