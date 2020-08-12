import { db } from '../data/connection';

export const getDbStatus = async () => {
  try {
    await db.query('SELECT 1');
    return true;
  } catch (err) {
    return false;
  }
};
