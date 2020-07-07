import request from 'supertest';

import app from '../src/app';
describe('sessions', () => {
  it('should respond with 200 - OK ', done => {
    request(app)
      .post('/api/session')
      .set('Content-Type', 'application/json')
      .send({ name: 'Lehel', password: 'asdf' })
      .expect('Content-Type', /json/)
      .expect(200).toHaveProperty('token')
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
