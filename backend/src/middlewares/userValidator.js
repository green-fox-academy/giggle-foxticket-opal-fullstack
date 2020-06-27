import { check, validationResult } from 'express-validator';

export const validateUser = [
  check('username')
    .not()
    .exists()
    .withMessage('username is required')
    .isLength({ min: 3 })
    .withMessage('wrong username length')
    .matches(/^[a-zA-Z0-9]+$/)
    .withMessage('username should not contain symbols/special characters')
    .isString,

  check('email')
    .not()
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email not valid')
    .bail(),

  check('password')
    .not()
    .exists()
    .withMessage('password is required')
    .isLength({ min: 6 })
    .withMessage('password must be longer than 6 characters')
    .bail(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    else {
      res.send({});
    }
  },
];
