import jwt from 'jsonwebtoken';

export class SessionService {
  constructor({ userRepository, passwordValidationService }) {
    this.userRepository = userRepository;
    this.passwordValidationService = passwordValidationService;
  }

  async login(data) {
    if (!data.username || !data.password) {
      throw new Error('Username or Password is missing');
    } else {
      const user = await this.userRepository.getUser(data.username);
      if (user.results.length <= 0) {
        throw new Error('Username is incorrect');
      } else if (
        !(await this.passwordValidationService.passwordCheck(
          data.password,
          user.results[0].password
        ))
      ) {
        throw new Error('Password is incorrect');
      } else {
        const tokenData = {
          user_id: user.results[0].id,
          user_name: user.results[0].name,
          user_isAdmin: user.results[0].isAdmin,
        };
        return {
          token: jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET),
          user: tokenData.user_name,
          isAdmin: tokenData.user_isAdmin,
        };
      }
    }
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  }
}
