import { verifyToken } from '../services/sessionService';

export const authenticate = async (req, res, next) => {
  const user = await verifyToken(req.body.auth_token);
 
  if (!user){ res.status(401).json({"mssg" :'Access Denied!!!!!!'})

  } else {
    req.user = user;
    console.log("this is req "+ JSON.stringify(req.user))
    next();

  }
  
};
