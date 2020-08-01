import { Express } from 'express';

import expressLoader from './express';
import mongoLoader from './mongo';
import Logger from './logger';

export default async (app: Express) => {
  await mongoLoader();
  Logger.info('DB loaded and connected!');

  await expressLoader(app);
  Logger.info('Express loaded');
};
