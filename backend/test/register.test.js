import request from 'supertest';
import app from '../src/app';

describe('testing /register endpoint', () => {
  it('fails if invalid user credentials are passed', async () => {
    await request(app)
      .post('/register')
      .send({
        name: '{invalid_user*3@',
        password: 'short',
        email: 'not_an_email',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);
  });
});

// TODO: find out why only an empty array is being sent
// {"errors": [{"location": "body", "msg": "Username is required", "param": "name"}
// {"location": "body", "msg": "E-mail is required.", "param": "email"}
// {"location": "body", "msg": "Password is required", "param": "password"}]}
