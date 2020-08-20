import { helloService } from '../services';
import { validateUser } from '../middlewares/validators/userValidator';

export const helloController = {
  async get(req, res) {
    let data = await helloService.getHelloWorld();

    res.status(200).json(data);
  },
};
