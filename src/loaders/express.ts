import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { errors as celebrateErrorHandler } from 'celebrate';

import routes from '../api';
import config from '../config';
import ResponseError from '../types/ResponseError';

export default (app: express.Application): void => {
  // Healthcheck endpoints
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(cors());
  app.use(bodyParser.json());
  app.use(config.api.prefix, routes);

  app.use(celebrateErrorHandler());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err: ResponseError = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  /// error handlers
  app.use(
    (
      err: ResponseError,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      /**
       * Handle 401 thrown by express-jwt library
       */
      if (err.name === 'UnauthorizedError') {
        return res.status(err.status).send({ message: err.message }).end();
      }
      return next(err);
    }
  );
  app.use((err: ResponseError, req: express.Request, res: express.Response) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
