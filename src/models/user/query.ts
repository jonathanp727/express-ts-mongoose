import { ObjectId, InsertOneWriteOpResult } from 'mongodb';
import { getDb } from '../../loaders/mongo';

import { User } from './index';

const USER = 'user';

const create = (user: User): Promise<InsertOneWriteOpResult<{ _id: string }>> =>
  getDb().collection(USER).insertOne(user);
const findById = (id: string): Promise<User> =>
  getDb()
    .collection(USER)
    .findOne({ _id: new ObjectId(id) });
const findByEmail = (email: string): Promise<User> =>
  getDb().collection(USER).findOne({ email });

export default {
  create,
  findById,
  findByEmail,
};
