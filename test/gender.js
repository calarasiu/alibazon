/Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);
// test the get route
describe('Categories', () => {
// Test the /GET route

  describe('/GET gender', () => {
      it('it should GET the selected gender category description', (done) => {
        chai.request(app)
            .get('/mens')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});

