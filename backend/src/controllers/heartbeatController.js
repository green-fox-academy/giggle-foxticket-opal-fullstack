import { getDbStatus } from '../services';

export const getSystemStatus = async (req, res) => {
  let result = await getDbStatus();
  res.json({
    db: result,
  });
};
