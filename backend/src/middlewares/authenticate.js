export default authenticate = (req, res, next) => {
  const token = req.body.auth_token;
  if (!token) return res.sendStatus(401).send('Access Denied');
  next()
}