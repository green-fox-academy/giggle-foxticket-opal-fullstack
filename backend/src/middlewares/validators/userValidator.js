import { check, validationResult } from 'express-validator';

export const validateUser = [
  check('name')
    .notEmpty()
    .withMessage('Username is required')
    .bail()
    .matches(/^[a-zA-Z0-9]+$/)
    .withMessage('Username should not contain symbols or special characters')
    .bail(),

  check('email')
    .notEmpty()
    .withMessage('E-mail is required.')
    .bail()
    .isEmail()
    .withMessage('Not a valid e-mail address.')
    .bail(),

  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Password must be longer than 6 characters')
    .bail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(422)
        .json({ message: 'There was an error during register...' });
    next();
  },
];
