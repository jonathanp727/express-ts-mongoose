import { UserTokenData } from '../../models/user';

declare namespace Express {
  export interface Request {
     user?: UserTokenData;
  }
}
