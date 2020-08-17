import { createToken } from './sessionService';

test('token is generating  something', () => {
  const result = createToken({ name: 'dummy', password: 'dummy' });

  expect(result).toBeTruthy();
});
