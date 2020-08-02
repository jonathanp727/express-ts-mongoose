import express, { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import Logger from '../../loaders/logger';

const route = Router();

export default (app: express.Router): void => {
  app.use('/auth', route);

  route.post(
    '/signup',
    celebrate({
      [Segments.BODY]: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        role: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }),
    async (req, res, next) => {
      Logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
      try {
        return res.status(201).json('user created!');
      } catch (e) {
        Logger.error('%o', e);
        return next(e);
      }
    }
  );

  route.post(
    '/signin',
    celebrate({
      [Segments.BODY]: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }),
    async (req, res, next) => {
      Logger.debug('Calling Sign-In endpoint with body: %o', req.body);
      try {
        return res.json('user signed in!').status(200);
      } catch (e) {
        Logger.error('%o', e);
        return next(e);
      }
    }
  );
};
