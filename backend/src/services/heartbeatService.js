import {db} from '../data/connection'

export const getDbStatus = async()=> {
  try{
    let result = await db.query('SELECT 1' )
     console.log(result)
     return 1

  } catch{
  return 0
  }
}
