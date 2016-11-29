const supertest = require(`supertest-as-promised`);
const httpStatus = require(`http-status`);
const expect = require(`chai`).expect;
const app = require(`../config/express`);

server = app.listen();

describe(`## Routes`, () => {
  
  describe(`# GET /`, () => {
    it(`should return timestamp`, (done) => {
      supertest(server)
        .get(`/`)
        .expect(httpStatus.OK)
        .expect(`Content-Type`, /text\/html/)
        .expect(`Access-Control-Allow-Origin`, `*`)
        .then((res) => {
          const now = new Date();
          const timestamp = +res.text; // cast response to integer so it can be used with Date obj
          const then = new Date(timestamp);

          expect(then.getTime() > 0).to.be.true;
          expect(then.getFullYear()).to.equal(now.getFullYear());
          expect(then.getMonth()).to.equal(now.getMonth());
          expect(then.getDate()).to.equal(now.getDate());
          expect(then.getHours()).to.equal(now.getHours());
          expect(then.getMinutes()).to.equal(now.getMinutes());
          expect(then.getSeconds()).to.equal(now.getSeconds()); // now and then should only be identical down to this level
          done();
        })
        .catch(done);
    });
  });

  describe(`# POST /hello`, () => {
    it(`should return the word 'universe'`, (done) => {
      supertest(server)
        .post(`/hello`)
        .expect(httpStatus.OK)
        .expect(`Content-Type`, /text\/plain/)
        .expect(`Access-Control-Allow-Origin`, `*`)
        .then((res) => {
          expect(res.text).to.equal(`universe`);
          done();
        })
        .catch(done);
    });
  });

  describe(`# 404 Not found`, () => {
    it(`should return 404 for any other request`, (done) => {
      supertest(server)
        .get(`/test`)
        .expect(httpStatus.NOT_FOUND)
        .expect(`Content-Type`, /text\/plain/)
        .expect(`Access-Control-Allow-Origin`, `*`)
        .then((res) => {
          expect(res.text).to.equal(`not found`);
          done();
        })
        .catch(done);
    });
  });
});