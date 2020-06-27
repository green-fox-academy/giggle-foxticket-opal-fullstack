export const registerController = {
  async register(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    res.status(200).json({
      username,
      email,
      password,
    });
  },
};
