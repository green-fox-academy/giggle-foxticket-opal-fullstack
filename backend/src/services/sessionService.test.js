import { login } from './sessionService';

test('token is generating  something', () => {
  let result = login({ username: 'dummy', password: 'dummy' });

  expect(result).toBeTruthy();
});
