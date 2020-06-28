import {getDbStatus} from '../services/heartbeatService'

export const getSystemStatus = async (req, res) => {
  let result = await getDbStatus()
  res.json({
    db: result === 0 ? false : true ,
  });
};

