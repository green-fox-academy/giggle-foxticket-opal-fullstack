import request from 'supertest';
import app from '../src/app';

describe('testing /api/users endpoint', () => {
  const mockApp = request(app).post('/api/users');

  it('fails if invalid user credentials are passed', async () => {
    await mockApp
      .send({
        name: '{invalid_user*3@',
        password: 'short',
        email: 'not_an_email',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422);
  });
  it('passes if valid user credentials are passed', async () => {
    const res = await mockApp.send({
      name: 'TikTfdsok',
      password: '12341232',
      email: 'valdid@email.com',
    });

    expect(res).toBe({
      name: 'TikTfdsok',
      password: '12341232',
      email: 'valdid@emdail.com',
    });
    // expect(res.status).toEqual(201);
  });
});
