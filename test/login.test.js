/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app/controllers/loginController');

const { expect } = chai;
chai.use(chaiHttp);

describe('Login', () => {
  it('checks a user is logged in', async () => {
    chai
      .request(app)
      .post('/login')
      .send({ username: '' })
      .end((res) => {
        expect(res.status).to.equal(200);
      });
  });
  it('Return a JWT', async () => {
    chai
      .request(app)
      .post('/login')
      .end((res) => {
        expect(res.body).to.have.property('token');
      });
  });
});
