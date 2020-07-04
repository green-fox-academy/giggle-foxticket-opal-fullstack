import request from 'supertest';

import app from '../src/app';
describe('sessions', () => {
  it('should respond with 200 - OK ', done => {
    request(app)
      .post('/api/session')
      .set('Content-Type', 'application/json')
      .send({ name: 'Lehel', password: 'asdf' })
      .expect(200)
      .end(function (err, res) {
        if (err || !res.ok) {
          console.log('Oh no! error');
        } else {
          console.log('yay' + JSON.stringify(res.header.auth_token));
          return done()
        }
      });
  });
});
