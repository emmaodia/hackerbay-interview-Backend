/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const app = require('../app/controllers/loginController');

chai.use(chaiHttp);
const validImageURL = 'https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg';

describe('Create Thumbnail Route', () => {
  it('should receive a token', async () => {
    chai.request(app)
      .get('/thumbnail')
      .end((err, res) => {
        expect(res).to.have.status(401);
      });
  });
  it('the token should be valid', async () => {
    chai.request(app)
      .get('/thumbnail')
      .set('token', 'random token')
      .end((err, res) => {
        expect(res).to.have.status(500);
      });
  });
  it('should return status 400 if dont receive a url', async () => {
    chai.request(app)
      .get('/thumbnail')
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
  });
  it('should return status 500 if url is invalid', async () => {
    chai.request(app)
      .get('/thumbnail')
      .send({ url: 'invalid url' })
      .end((err, res) => {
        expect(res).to.have.status(500);
      });
  });
  it('should return status 400 if url isn\'t a string', async () => {
    chai.request(app)
      .get('/thumbnail')
      .send({ url: [] })
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
  });
  it('Should send a Html if image is valid', async () => {
    chai.request(app)
      .get('/thumbnail')
      .send({ url: validImageURL })
      .end((err, res) => {
        expect(res).to.be.html;
      });
  });
});
