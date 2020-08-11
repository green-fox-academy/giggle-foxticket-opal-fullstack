import { db } from '../data/connection';

export const getDbStatus = async () => {
  try {
    let result = await db.query('SELECT 1');
    if(result) return true;
  } catch(err) {
    return false;
  }
};
