/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app/controllers/patchController');

const { expect } = chai;

chai.use(chaiHttp);

const patchExample = [
  {
    op: 'replace',
    path: '/a',
    value: 18,
  },
  {
    op: 'add',
    path: '/b',
    value: [
      0,
      2,
      3,
    ],
  },
];

describe('json patch', () => {
  it('should receive a token', async () => {
    chai.request(app)
      .get('/json-patch')
      .end((err, res) => {
        expect(res).to.have.status(401);
      });
  });
  it('the token should be valid', async () => {
    chai.request(app)
      .get('/json-patch')
      .set('token', 'random token')
      .end((err, res) => {
        expect(res).to.have.status(500);
      });
  });
  it('should receive jsonObject AND patch of type json', async () => {
    chai.request(app)
      .get('/patch')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('patch should be an array', async () => {
    chai.request(app)
      .get('/patch')
      .send({ patch: {} })
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
  });

  it('should receive a jsonObject of type json', async () => {
    chai.request(app)
      .get('/patch')
      .send({ patch: patchExample })
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
  });
  it('should receive a patch of type json', async () => {
    chai.request(app)
      .get('/patch')
      .send({ jsonObject: { a: 10 } })
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
  });
  it('should generate a json result', async () => {
    chai.request(app)
      .get('/json-patch')
      .send({ jsonObject: { a: 10 }, patch: patchExample })
      .end((err, res) => {
        expect(res.body).to.have.property('result');
      });
  });
});
