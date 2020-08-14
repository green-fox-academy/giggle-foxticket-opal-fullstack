import request from 'supertest';
import app from '../src/app';
import SessionService from '../src/services/SessionService';
/* import UserRepository from '../src/repository/UserRepository'
 */
jest.mock('../src/services/SessionService');
jest.mock('../src/repository/UserRepository');
 
describe('Testing /api/session endpoint ', () => {
  it('It should pass with 200 ok ', async () => {

    const ValideUser = { username: 'Lehel', password: 'password1223' };
/*     const inValideUser = { username: 'CCVVV', password: 'SSDDFC' };
 */

    const resp = {
      results: [
        {
          id: 1,
          name: 'Lehel',
          email: 'lehel@gmail.com',
          password: 'dummy2',
          isAdmin: 0,
        },
      ],
    }; 
    
   /*  SessionService.prototype.login.mockImplementation(() =>
    Promise.reject({message: "Error"})
    ); */
    SessionService.prototype.login.mockImplementation(() =>
    Promise.resolve(resp)
    );

    await request(app)
      .post('/api/session')
      .set('Content-Type', 'application/json')
      .send(ValideUser)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
