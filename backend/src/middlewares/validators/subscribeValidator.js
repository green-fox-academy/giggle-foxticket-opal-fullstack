import { check, validationResult } from 'express-validator';

export const validateSubscriber = [
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

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
