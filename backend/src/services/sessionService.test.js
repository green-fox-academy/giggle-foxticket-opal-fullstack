import { createToken } from './sessionService';

test('token is generating  something', () => {
  let result = createToken({ name: 'dummy', password: 'dummy' });

  expect(result).toBeTruthy();
});
