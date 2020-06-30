import {db} from '../data/connection'

export const getDbStatus = async ()=> {
  try {
    let result = await db.query('SELECT 1')
     return true
  } catch {
  return false
  }
}
