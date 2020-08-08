import { login } from './sessionService';

test('token is generating  something', async () => {
  let result = await login({ username: 'dummy', password: 'dummy', isAdmin:true });

  expect(result).toBeTruthy();
});



/* mock token admin  */