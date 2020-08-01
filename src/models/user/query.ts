import { ObjectId } from 'mongodb';
import { getDb, getClient } from '../../loaders/mongo';

import { User } from './index';

const USER = 'user';

const create = (user: User) =>
  getDb()
    .collection(USER)
    .insertOne(user)
    .then((res) => res.ops[0]);
const findById = (id: string) =>
  getDb()
    .collection(USER)
    .findOne({ _id: new ObjectId(id) });
const findByEmail = (email: string) =>
  getDb().collection(USER).findOne({ email });

export default {
  create,
  findById,
  findByEmail,
};
